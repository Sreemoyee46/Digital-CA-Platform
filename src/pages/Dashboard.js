import React from 'react';
import TaxFilingOverview from '../components/TaxFilingOverview';
import ComplianceReminderCards from '../components/ComplianceReminderCards';
import DocumentUpload from '../components/DocumentUpload';
import { Box, Grid, Paper, Typography, Chip } from '@mui/material';

function Dashboard() {
  // Get current date for realistic greeting
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <Box sx={{ maxWidth: 1200, margin: '40px auto', padding: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" color="primary" sx={{ mb: 1 }}>
          Welcome back, CA Practice
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {currentDate} • Last updated: 2 hours ago
        </Typography>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip label="Active Clients: 24" color="success" size="small" />
          <Chip label="Pending Filings: 3" color="warning" size="small" />
          <Chip label="This Month Revenue: ₹2.4L" color="info" size="small" />
        </Box>
      </Box>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <TaxFilingOverview />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ComplianceReminderCards />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <DocumentUpload />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
