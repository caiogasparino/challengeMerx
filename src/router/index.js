import { Route, Routes } from 'react-router-dom'
// import DataTable from '../components/Table'
import DataTableDetails from '../components/Table'
import TablePage from '../views/TablePage'

const MerxRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<TablePage />} />
      <Route path="/Table/:id" element={<DataTableDetails />} />
    </Routes>
  )
}

export default MerxRouting