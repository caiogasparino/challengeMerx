import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import TableProvider from './providers/context/TableContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TableProvider>
        <App />
      </TableProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
