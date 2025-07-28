import React from 'react';
import TaxFilingOverview from '../components/TaxFilingOverview';
import ComplianceReminderCards from '../components/ComplianceReminderCards';
import DocumentUpload from '../components/DocumentUpload';
import ChartsDashboard from '../components/ChartsDashboard';
import { Box, Grid, Paper, Typography } from '@mui/material';

function Dashboard() {
  return (
    <Box sx={{ maxWidth: 1200, margin: '40px auto', padding: 3 }}>
      <Typography variant="h4" component="h1" color="primary" sx={{ mb: 3 }}>
        Client Dashboard
      </Typography>
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
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <ChartsDashboard />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
