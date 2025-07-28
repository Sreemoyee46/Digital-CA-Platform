import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const monthlyFilingsData = [
  { month: 'Jan', filings: 3 },
  { month: 'Feb', filings: 2 },
  { month: 'Mar', filings: 4 },
  { month: 'Apr', filings: 1 },
  { month: 'May', filings: 3 },
  { month: 'Jun', filings: 2 },
];

const taxData = [
  { month: 'Jan', tax: 5000 },
  { month: 'Feb', tax: 3000 },
  { month: 'Mar', tax: 7000 },
  { month: 'Apr', tax: 2000 },
  { month: 'May', tax: 4000 },
  { month: 'Jun', tax: 3500 },
];

function ChartsDashboard() {
  return (
    <section className="charts-dashboard" style={{ width: '100%' }}>
      <h3>Monthly Filings</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={monthlyFilingsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="filings" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>

      <h3>Tax Data</h3>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={taxData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tax" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ChartsDashboard;
