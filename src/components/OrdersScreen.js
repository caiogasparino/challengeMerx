import React from "react";

import DataTable from "./DataTables/Orders";

//Material-UI Imports
import { Typography } from "@mui/material";

const OrdersScreen = () => {
    return (
        <>
            <Typography variant="h3" sx={{ color: "#777", textAlign: "left" }}>
                Orders
            </Typography>
            <DataTable />
        </>
    );
};

export default OrdersScreen;
