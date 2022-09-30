import React from "react";

import DataTableOrders from "./DataTables/Orders";

//Material-UI Imports
import { Container, Typography } from "@mui/material";

const styles = {
    mainTitle: { paddingBottom: "1%", color: "#777", textAlign: "left" },
    containerTitle: { padding: "8%" }
};

const OrdersScreen = () => {
    return (
        <Container sx={styles.containerTitle}>
            <Typography variant="h4" sx={styles.mainTitle}>
                Orders
            </Typography>
            <DataTableOrders />
        </Container>
    );
};

export default OrdersScreen;
