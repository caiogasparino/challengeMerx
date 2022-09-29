import * as React from "react";
import DataTableDetails from "./DataTables/Details";
import Timeline from "./Timeline";

//Material-UI Imports
import { Box, Typography } from "@mui/material";

const styles = {
    mainTitle: { color: "#777", textAlign: "left" }
};

const OrdersDetails = () => {
    let selectedOrder = [];
    let status = [];

    selectedOrder[0] = JSON.parse(localStorage.getItem("selectedOrder"));
    status = selectedOrder[0].status;

    return (
        <>
            <Typography variant="h3" sx={styles.mainTitle}>
                Order Details
            </Typography>
            <DataTableDetails selectedOrder={selectedOrder} />
            <Box sx={styles.timelineBox}>
                <Timeline status={status} />
            </Box>
        </>
    );
};

export default OrdersDetails;
