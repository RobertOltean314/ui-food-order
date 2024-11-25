import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from '@mui/material';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';
import { ThemeProvider as CustomThemeProvider, useThemeMode } from './contexts/ThemeContext';

// Theme configuration
const createAppTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'dark' ? '#90caf9' : '#1976d2',
    },
    secondary: {
      main: mode === 'dark' ? '#f48fb1' : '#dc004e',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#ffffff',
      paper: mode === 'dark' ? '#1e1e1e' : '#ffffff',
    },
  },
});

function AppContent() {
  const { isDarkMode } = useThemeMode();
  const theme = createAppTheme(isDarkMode ? 'dark' : 'light');

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          {/* Customer Routes */}
          <Route path="/" element={<CustomerLayout><div>Customer Home</div></CustomerLayout>} />
          <Route path="/menu" element={<CustomerLayout><div>Menu</div></CustomerLayout>} />
          <Route path="/cart" element={<CustomerLayout><div>Cart</div></CustomerLayout>} />
          <Route path="/profile" element={<CustomerLayout><div>Profile</div></CustomerLayout>} />
          <Route path="/orders" element={<CustomerLayout><div>Orders</div></CustomerLayout>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><div>Admin Dashboard</div></AdminLayout>} />
          <Route path="/admin/orders" element={<AdminLayout><div>Manage Orders</div></AdminLayout>} />
          <Route path="/admin/menu" element={<AdminLayout><div>Manage Menu</div></AdminLayout>} />
          <Route path="/admin/inventory" element={<AdminLayout><div>Manage Inventory</div></AdminLayout>} />
          <Route path="/admin/users" element={<AdminLayout><div>Manage Users</div></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><div>Settings</div></AdminLayout>} />
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
}

export default App;
