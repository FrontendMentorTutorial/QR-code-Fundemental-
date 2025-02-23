import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './component/App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="center">
      <App />
    </div>
  </React.StrictMode>,
)
