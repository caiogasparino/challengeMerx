import React from "react";

import DataTableOrders from "./DataTables/Orders";

//Material-UI Imports
import { Typography } from "@mui/material";

const OrdersScreen = () => {
    return (
        <>
            <Typography variant="h3" sx={{ color: "#777", textAlign: "left" }}>
                Orders
            </Typography>
            <DataTableOrders />
        </>
    );
};

export default OrdersScreen;
