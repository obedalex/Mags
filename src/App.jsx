import './App.css'
import { useState } from 'react'
import DashboardLayout from './components/layout/DashboardLayout'
import AnalyticsPage from './pages/AnalyticsPage'
import ProductsPage from './pages/ProductsPage'
import SettingsPage from './pages/SettingsPage'
import { ThemeProvider } from './components/ThemeProvider'


function App() {
  const [currentPage, setCurrentPage] = useState('products')

  let pageContent = null
  let title = ''

  if (currentPage === 'products') {
    title = 'Products'
    pageContent = <ProductsPage />
  } else if (currentPage === 'analytics') {
    title = 'Analytics'
    pageContent = <AnalyticsPage />
  } else if (currentPage === 'settings') {
    title = 'Settings'
    pageContent = <SettingsPage />
  } else {
    title = 'Products'
    pageContent = <ProductsPage />
  }

  return (
    <ThemeProvider defaultTheme="system">
      <DashboardLayout
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        title={title}
      >
        {pageContent}
      </DashboardLayout>
    </ThemeProvider>
  );
}

export default App
