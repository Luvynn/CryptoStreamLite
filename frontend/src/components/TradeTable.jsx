import React from 'react';

const mockTrades = [
  { price: 27210, quantity: 0.12, time: "12:01:15" },
  { price: 27195, quantity: 0.05, time: "12:01:17" },
  { price: 27205, quantity: 0.32, time: "12:01:19" },
];

export default function TradeTable() {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">Recent Trades</h2>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Price (USDT)</th>
            <th className="border px-4 py-2">Quantity (BTC)</th>
            <th className="border px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {mockTrades.map((trade, idx) => (
            <tr key={idx}>
              <td className="border px-4 py-2">{trade.price}</td>
              <td className="border px-4 py-2">{trade.quantity}</td>
              <td className="border px-4 py-2">{trade.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
