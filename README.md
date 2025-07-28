# Digital CA Platform - Frontend Intern Project

A comprehensive React.js web application designed for Chartered Accountants (CAs) to manage their practice digitally. This project demonstrates modern frontend development skills including React Hooks, Context API, responsive design, and data visualization.

Live Demo: https://sreemoyee46.github.io/Digital-CA-Platform (copy and paste in your browser and enter)

## 🎯 Project Overview

This project was developed as a technical assessment for a Frontend Intern position, showcasing proficiency in React.js development and modern web technologies. The application digitizes traditional CA workflows with a focus on user experience and technical excellence.

# Requirements Met

1.Core Features Implemented
- ✅ Login/Signup Interface - Complete authentication system with form validation
- ✅ Client Dashboard - Centralized overview with all key metrics
- ✅ Tax Filing Overview - Status tracking and deadline management
- ✅ Compliance Reminder Cards - Interactive reminder system
- ✅ Document Upload Area- Support for PAN, GST, and IT Return documents
- ✅ Data Input Forms- GST, PAN, TDS data entry with validation
- ✅ Invoice Creation Page - Professional invoice generation with itemized billing
- ✅ Charts/Dashboard - Interactive data visualization using Recharts

2.Technical Requirements Fulfilled
- ✅ React.js with Hooks - Functional components throughout the application
- ✅ State Management- Context API for global state management
- ✅ Modular Structure - Clean, organized folder structure
- ✅ Responsive Design- Mobile-first approach with desktop optimization
- ✅ Dummy Data - JSON-based mock data for demonstration

3. Features

Authentication System :
- Secure login and signup with form validation
- Protected routes using React Router
- Context-based authentication state management

Dashboard & Analytics :
- Tax Filing Overview: Track filing status and deadlines
- Compliance Reminders: Interactive cards with priority indicators
- Document Management: Upload and organize client documents
- Data Visualization: Interactive charts showing monthly filings and tax data

Invoice Management :
- Professional invoice creation with itemized billing
- Dynamic form fields for multiple line items
- Automatic total calculation
- Export-ready invoice format

 Data Input & Management
- Structured forms for GST, PAN, and TDS data
- Real-time validation and error handling
- Organized data presentation


# Installation & Setup

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/digital-ca-platform.git
   cd digital-ca-platform
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

4. Access the application
   Navigate to `http://localhost:3000` in your browser

 #Project Architecture

```
src/
├── components/          # Reusable UI components
│   ├── ChartsDashboard.js      # Data visualization
│   ├── ComplianceReminderCards.js  # Reminder system
│   ├── DataInputForm.js        # Form components
│   ├── DocumentUpload.js       # File upload handling
│   ├── Layout.js              # Main layout wrapper
│   └── Sidebar.js             # Navigation sidebar
├── pages/              # Main application pages
│   ├── Dashboard.js           # Main dashboard
│   ├── InvoiceCreation.js     # Invoice generation
│   ├── Login.js              # Authentication
│   └── Signup.js             # User registration
├── context/            # React Context for state management
│   └── AuthContext.js        # Authentication context
├── App.js             # Main application component
├── index.js           # Application entry point
└── index.css          # Global styles and responsive design
```



