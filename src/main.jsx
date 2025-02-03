import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { init } from '@vercel/speed-insights';

init({
    projectName: 'poke-info', // Replace with your actual project name
});


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>

)
