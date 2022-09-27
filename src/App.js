import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DataTable from './components/Table'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DataTable />} />
      </Routes>
    </div>
  )
}

export default App
