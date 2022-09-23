import React from 'react'
import './App.css'
import AppBar from './components/AppBar'
import { Route, Routes } from 'react-router-dom'
import DataTable from './components/Table'
import DataTableDetails from './components/Table'

function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<DataTable />} />
        <Route path="/Table/:id" element={<DataTableDetails />} />
      </Routes>
    </div>
  )
}

export default App
