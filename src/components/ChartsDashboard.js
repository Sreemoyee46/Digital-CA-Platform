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
    <div style={{ 
      width: '100%', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px',
      marginTop: '20px'
    }}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>📊 Analytics Dashboard</h2>
      
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#666', marginBottom: '15px' }}>📈 Monthly Filings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyFilingsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="filings" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h3 style={{ color: '#666', marginBottom: '15px' }}>💰 Tax Collection Data</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={taxData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="tax" stroke="#82ca9d" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default ChartsDashboard;
