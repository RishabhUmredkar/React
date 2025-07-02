import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Day7 from './App.jsx'
import Count from './Day7/Count.jsx'
import Day8 from './App.jsx'
import './index.css'; // This file contains the tailwind directives
import StoreContext from './Day20/StoreContext.jsx'


createRoot(document.getElementById('root')).render(
    // <StoreContext>
      <App/>
    // </StoreContext>
    

  )
