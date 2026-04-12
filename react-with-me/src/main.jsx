// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {App1} from './App.jsx'
// import {App2} from './App.jsx'

createRoot(document.getElementById('root')).render(<App />) //JSX WAY OF FUNCTION CALLING

// createRoot(document.getElementById('root')).render(<App1 />) //JSX WAY OF FUNCTION CALLING
// createRoot(document.getElementById('h1')).render(App2()) //NORMAL WAY OF FUNCTION CALLING