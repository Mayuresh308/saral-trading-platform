// 'use client'

// import { useEffect, useRef, useState } from 'react'
// import { createChart, ColorType } from 'lightweight-charts'

// interface StockData {
//   c: number  // close
//   d: number  // change
//   dp: number // percent change
//   h: number  // high
//   l: number  // low
//   o: number  // open
//   pc: number // previous close
//   t: number  // timestamp
// }

// interface ApiResponse {
//   success: boolean
//   data: StockData
// }

// export default function StockChart() {
//   const chartContainerRef = useRef<HTMLDivElement>(null)
//   const chartRef = useRef<any>(null)
//   const seriesRef = useRef<any>(null)
//   const dataHistory = useRef<StockData[]>([])
//   const [error, setError] = useState<string | null>(null)

//   useEffect(() => {
//     if (!chartContainerRef.current) return

//     try {
//       // Initialize chart
//       const chart = createChart(chartContainerRef.current, {
//         width: chartContainerRef.current.clientWidth,
//         height: 400,
//         layout: {
//           background: { type: ColorType.Solid, color: '#ffffff' },
//           textColor: '#333333',
//         },
//         grid: {
//           vertLines: { color: '#eeeeee' },
//           horzLines: { color: '#eeeeee' },
//         },
//         timeScale: {
//           timeVisible: true,
//           secondsVisible: true,
//         },
//       })

//       chartRef.current = chart

//       // Add candlestick series
//       const series = chart.addCandlestickSeries({
//         upColor: '#26a69a',
//         downColor: '#ef5350',
//         borderVisible: false,
//         wickUpColor: '#26a69a',
//         wickDownColor: '#ef5350',
//       })
//       seriesRef.current = series

//       // Initial data fetch
//       fetchData()

//       // Set up refresh interval
//       const interval = setInterval(fetchData, 20000)

//       const handleResize = () => {
//         if (chartContainerRef.current && chartRef.current) {
//           chartRef.current.applyOptions({ 
//             width: chartContainerRef.current.clientWidth 
//           })
//         }
//       }

//       window.addEventListener('resize', handleResize)

//       return () => {
//         window.removeEventListener('resize', handleResize)
//         clearInterval(interval)
//         if (chartRef.current) {
//           chartRef.current.remove()
//         }
//       }
//     } catch (err) {
//       setError('Failed to initialize chart')
//       console.error('Chart initialization error:', err)
//     }
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('https://backend-7xk0.onrender.com/stocks/market-chart')
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`)
//       }
      
//       const result = await response.json() as ApiResponse
      
//       if (!result.success || !result.data) {
//         throw new Error('Invalid API response structure')
//       }

//       const data = result.data
//       const newCandle = {
//         time: data.t,
//         open: data.o,
//         high: data.h,
//         low: data.l,
//         close: data.c,
//       }

//       if (!seriesRef.current) {
//         throw new Error('Chart series not initialized')
//       }

//       // Safe update with proper undefined check
//       const lastCandle = dataHistory.current[dataHistory.current.length - 1]
//       if (lastCandle && lastCandle.t === newCandle.time) {
//         // Update existing candle
//         seriesRef.current.update(newCandle)
//         dataHistory.current[dataHistory.current.length - 1] = data
//       } else {
//         // Add new candle
//         seriesRef.current.update(newCandle)
//         dataHistory.current.push(data)
//       }

//       if (chartRef.current) {
//         chartRef.current.timeScale().fitContent()
//       }

//       setError(null) // Clear any previous errors
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Failed to fetch stock data'
//       setError(errorMessage)
//       console.error('Data fetch error:', err)
//     }
//   }

//   return (
//     <div className="relative w-full">
//       <div 
//         ref={chartContainerRef} 
//         className="w-full h-[400px]"
//         aria-label="Stock price chart"
//       />
//       {error && (
//         <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-800 p-2 text-center">
//           Error: {error} - Retrying in 20 seconds...
//         </div>
//       )}
//     </div>
//   )
// }













'use client';

import { useEffect, useRef, useState } from 'react';
import {
  createChart,
  ColorType,
  UTCTimestamp,
  ISeriesApi,
  CandlestickData,
} from 'lightweight-charts';

interface CandleData {
  datetime: string;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
}

interface ApiResponse {
  success: boolean;
  data?: {
    values?: CandleData[];
  };
}

export default function StockChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart>>();
  const candleSeriesRef = useRef<ISeriesApi<'Candlestick'>>();
  const [isMounted, setIsMounted] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://backend-7xk0.onrender.com/stocks/market-chart');
      const json: ApiResponse = await response.json();

      if (json.success && json.data?.values) {
        const formattedData: CandlestickData[] = json.data.values.map((item) => {
          const time = Math.floor(
            new Date(item.datetime + 'T00:00:00Z').getTime() / 1000
          ) as UTCTimestamp;

          return {
            time,
            open: parseFloat(item.open),
            high: parseFloat(item.high),
            low: parseFloat(item.low),
            close: parseFloat(item.close),
          };
        });

        formattedData.sort((a, b) => (a.time as number) - (b.time as number));


        console.log('Formatted Candlestick Data:', formattedData); // ✅ Debug log

        if (candleSeriesRef.current && formattedData.length > 0) {
          candleSeriesRef.current.setData(formattedData);
          chartRef.current?.timeScale().fitContent();
        }
      }
    } catch (err) {
      console.error('Failed to load chart data', err);
    }
  };

  useEffect(() => {
    if (!chartContainerRef.current) return;

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: '#131722' },
        textColor: '#d1d4dc',
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
      grid: {
        vertLines: { color: '#2B2B43' },
        horzLines: { color: '#2B2B43' },
      },
      crosshair: {
        mode: 1,
      },
      rightPriceScale: {
        borderColor: '#485c7b',
      },
      timeScale: {
        borderColor: '#485c7b',
      },
    });

    chartRef.current = chart;

    candleSeriesRef.current = chart.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
      borderVisible: false,
    });

    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
        chart.timeScale().fitContent();
      }
    };

    window.addEventListener('resize', handleResize);
    setIsMounted(true);
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.remove();
    };
  }, []);

  useEffect(() => {
  if (!isMounted) return;

  fetchData(); // Initial fetch

  const interval = setInterval(() => {
    fetchData();
  }, 20000); // 20 seconds

  return () => clearInterval(interval); // Clean up on unmount
}, [isMounted]);


  return (
    <div
      ref={chartContainerRef}
      className="w-full"
      style={{ height: '500px', backgroundColor: '#131722' }}
    />
  );
}
