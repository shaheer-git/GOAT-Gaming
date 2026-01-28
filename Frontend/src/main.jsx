import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Import Notific to ensure it's available globally
import './common/notific.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
