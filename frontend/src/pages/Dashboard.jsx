import React from 'react';
import TradeTable from '../components/TradeTable';
import LineChart from '../components/LineChart';
export default function Dashboard() {
  return (<div><h1>Crypto Dashboard</h1><LineChart/><TradeTable/></div>);
}