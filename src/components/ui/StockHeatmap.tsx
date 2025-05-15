'use client';

import React, { useEffect, useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from '@tanstack/react-table';

// Define the shape of the stock data
interface StockData {
  symbol: string;
  c: number; // current price
  d: number; // change
  dp: number; // % change
  h: number;
  l: number;
  o: number;
  pc: number;
  t: number;
}

// Define the API response shape
interface ApiResponse {
  success: boolean;
  data: StockData[];
}

const StockHeatmap = () => {
  const [data, setData] = useState<StockData[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Fetch data with error handling
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://backend-7xk0.onrender.com/stocks/market-heatmap');
        const json: ApiResponse = await res.json();

        if (json.success && Array.isArray(json.data)) {
          setData(json.data);
        } else {
          setError('Invalid API response');
        }
      } catch (err) {
        setError('Failed to fetch stock data');
        console.error(err);
      }
    };

    fetchData();
  }, []);

  // Define table columns
  const columns: ColumnDef<StockData>[] = [
    {
      accessorKey: 'symbol',
      header: 'Symbol',
    },
    {
      accessorKey: 'c',
      header: 'Current Price',
    },
    {
      accessorKey: 'd',
      header: 'Price Change',
    },
    {
      accessorKey: 'dp',
      header: '% Change',
      cell: ({ getValue }) => {
        const value = getValue<number>();
        return `${value.toFixed(2)}%`;
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // Heatmap color logic based on % change
  const getRowColor = (dp: number) => {
    if (dp > 5) return '#b6fcb6'; // strong green
    if (dp > 0) return '#e3fbe3'; // light green
    if (dp < -5) return '#ffbaba'; // strong red
    if (dp < 0) return '#ffe0e0'; // light red
    return '#f9f9f9'; // neutral
  };

  return (
  <div style={{ padding: '1rem' }}>
    <h2 style={{ marginBottom: '1rem' }}>📊 Stock Market Heatmap</h2>

    {error && <p style={{ color: 'red' }}>{error}</p>}

    {data.length === 0 ? (
      <p>Loading...</p>
    ) : (
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    borderBottom: '2px solid #ccc',
                    padding: '10px',
                    textAlign: 'left',
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => {
            const dp = row.original.dp;
            return (
              <tr key={row.id} style={{ backgroundColor: getRowColor(dp) }}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    style={{
                      padding: '10px',
                      border: '1px solid #eee',
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    )}
  </div>
);

};

export default StockHeatmap;
