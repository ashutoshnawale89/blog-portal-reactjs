import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { BlogProvider } from './context/BlogContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </BlogProvider>
  </React.StrictMode>
)

