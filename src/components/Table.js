/* eslint-disable react-hooks/exhaustive-deps */
import * as React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid } from "@mui/x-data-grid";
import { TableContext } from "../providers/context/TableContext";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Api from "../services/Api";
import dataTable from "../dataTable";

const useStyles = makeStyles({
    root: {
        padding: 10,
        display: "flex"
    },
    connected: {
        marginRight: 2,
        color: "#4caf50"
    },
    disconnected: {
        marginRight: 2,
        color: "#d9182e"
    }
});

function CustomFooterStatusComponent(props) {
    const classes = useStyles();
    const { state: tableState, dispatch: tableDispatch } =
        React.useContext(TableContext);

    console.log("TABLE CONTEXT", tableState.table);

    console.log("TABLE DATA MOCK", dataTable);

    React.useEffect(async () => {
        let response = await Api.getOrders();
        setTimeout(() => {
            console.log("response", response);
        }, 10000);

        tableDispatch({
            type: "getOrdersTable",
            orders: {
                status: ["Wrong Amount"],
                invoice: 100,
                balance: 250,
                dueDate: 20220923,
                bayondTerms: 100
            }
        });
    }, [tableDispatch]);

    return (
        <div className={classes.root}>
            <FiberManualRecordIcon
                fontSize="small"
                className={classes[props.status]}
            />
            Status {props.status}
        </div>
    );
}

CustomFooterStatusComponent.propTypes = {
    status: PropTypes.oneOf(["connected", "disconnected"]).isRequired
};

export { CustomFooterStatusComponent };

export default function CustomFooter() {
    const [status, setStatus] = React.useState("connected");
    const { data } = useDemoData({
        dataSet: "Employee",
        rowLength: 4,
        maxColumns: 6
    });

    console.log("DEMODATA", data);

    return (
        <div
            style={{
                width: "100%"
            }}
        >
            <div style={{ height: 350, width: "100%", marginBottom: 16 }}>
                <DataGrid
                    {...data}
                    components={{
                        Footer: CustomFooterStatusComponent
                    }}
                    componentsProps={{
                        footer: { status }
                    }}
                />
            </div>
            <Button
                color="primary"
                variant="contained"
                onClick={() =>
                    setStatus((current) =>
                        current === "connected" ? "disconnected" : "connected"
                    )
                }
            >
                {status === "connected" ? "Disconnect" : "Connect"}
            </Button>
        </div>
    );
}
