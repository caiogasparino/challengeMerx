import React from "react";

import DataTable from "./DataTables/Details";

//Material-UI Imports
import { Typography } from "@mui/material";

const OrdersDetails = () => {
    return (
        <>
            <Typography variant="h3" sx={{ color: "#777", textAlign: "left" }}>
                Order Details
            </Typography>
            <DataTable />
        </>
    );
};

export default OrdersDetails;
