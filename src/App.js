import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import DataTable from './components/Table'
import OrdersScreen from "./components/OrdersScreen";
import OrdersDetails from "./components/OrdersDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<DataTable />} /> */}
        <Route path="/" element={<OrdersScreen />} />
        <Route path="/details" element={<OrdersDetails />} />
      </Routes>
    </div>
  );
}

export default App;
