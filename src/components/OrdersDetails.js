import * as React from "react";
import DataTableDetails from "./DataTables/Details";
import Timeline from "./Timeline";

//Material-UI Imports
import { Container, Box, Typography } from "@mui/material";

const styles = {
    constainer: { padding: "5%" },
    mainTitle: { paddingBottom: "1%", color: "#777", textAlign: "left" },
    status: { justifyContent: "flex-start" }
};

const OrdersDetails = () => {
    let selectedOrder = [];
    let status = [];

    selectedOrder[0] = JSON.parse(localStorage.getItem("selectedOrder"));
    status = selectedOrder[0].status;

    return (
        <Container sx={styles.constainer}>
            <Typography variant="h4" sx={styles.mainTitle}>
                Order Details
            </Typography>
            <DataTableDetails selectedOrder={selectedOrder} />
            <Box sx={{ marginLeft: -120 }}>
                <Timeline status={status} />
            </Box>
        </Container>
    );
};

export default OrdersDetails;
