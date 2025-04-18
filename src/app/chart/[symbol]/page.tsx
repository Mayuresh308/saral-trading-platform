'use client';

import { useParams } from 'next/navigation';

export default function ChartPage() {
  const params = useParams();
  const symbol = params.symbol;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Chart for {symbol}</h2>
      <p>This will display the chart and data for: {symbol}</p>
    </div>
  );
}
