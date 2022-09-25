/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
// import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid } from "@mui/x-data-grid";
import { TableContext } from "../providers/context/TableContext";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
// import Api from "../services/Api";
import dataTable from "../dataTable";
import { Table } from "antd";

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

    React.useEffect(async () => {
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
    const [tableData, setTableData] = React.useState([])

    const mockApiData = () => {
        setTableData((curr) => curr = dataTable)

        return tableData
    }

    // const { data } = useDemoData({
    //     dataSet: "Employee",
    //     rowLength: 4,
    //     maxColumns: 9,
    //     treeData: dataTable,
    //     // visibleFields: ["order", "payment.amount", "currency"]
    // });

    const columns = [
        { field: 'order', headerName: 'Order', width: 150 },
        { field: 'payment.amount', headerName: 'Amount', width: 150 },
        { field: 'payment.currency', headerName: 'Currency', width: 150 },
        { field: 'terms', headerName: 'Terms', width: 150 },
    ]

    const rows = tableData

    const toggleConnect = () => {
        setStatus((current) =>
            current === "connected" ? "disconnected" : "connected"
        )
    }

    return (
        <div style={{ width: "100%" }}>
            <div style={{ height: 350, width: "100%", marginBottom: 16 }}>
                {/* <DataGrid
                    columns={columns}
                    rows={rows}
                    components={{ Footer: CustomFooterStatusComponent }}
                    componentsProps={{ footer: { status } }}
                /> */}

                <Table dataSource={tableData} columns={columns} />
            </div>
            <Button
                color="primary"
                variant="contained"
                onClick={toggleConnect}
            >
                {status === "connected" ? "Disconnect" : "Connect"}
            </Button>
        </div>
    );
}
