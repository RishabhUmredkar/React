import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Day7 from './App.jsx'
import Count from './Day7/Count.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day7/>
  </StrictMode>,
)
