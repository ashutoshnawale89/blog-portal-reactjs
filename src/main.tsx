import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BlogProvider } from './context/BlogContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogProvider>
      <BrowserRouter basename="/blog-portal-reactjs">
        <App />
      </BrowserRouter>
    </BlogProvider>
  </React.StrictMode>
)
