import * as React from "react";
import DataTableDetails from "./DataTables/Details";
import Timeline from "./Timeline";
import { useNavigate } from "react-router-dom";

//Material-UI Imports
import { Container, Box, Typography, Button } from "@mui/material";

const styles = {
    constainer: { padding: "5%" },
    mainTitle: { paddingBottom: "1%", color: "#777", textAlign: "left" },
    status: { justifyContent: "flex-start" },
    boxButton: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    button: { fontWeight: 700, border: "1.5px solid" }
};

const OrdersDetails = () => {
    const navigation = useNavigate();
    let selectedOrder = [];
    let status = [];

    const handleClickDataTableOrders = async (order) => {
        navigation("/");
    };

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
            <Box sx={styles.boxButton}>
                <Button
                    variant="outlined"
                    size="medium"
                    onClick={handleClickDataTableOrders}
                    sx={styles.button}
                >
                    VOLTAR
                </Button>
            </Box>
        </Container>
    );
};

export default OrdersDetails;
