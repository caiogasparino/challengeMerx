import React, { useMemo } from "react";

//MRT Imports
import MaterialReactTable from "material-react-table";

//Material-UI Imports
import {
    Box,
    Button,
    ListItemIcon,
    MenuItem,
    Typography,
    TextField
} from "@mui/material";

//Date Picker Imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//Icons Imports
import { AccountCircle, Send } from "@mui/icons-material";

//Mock Data
import data from "../dataTable";

const Example = () => {
    const columns = useMemo(
        () => [
            {
                id: "status", //id used to define `group` column
                header: "Status",
                columns: [
                    {
                        accessorFn: (row) => `${row.status}`, //accessorFn used to join multiple data into a single cell
                        id: "invoice", //id is still required when using accessorFn instead of accessorKey
                        header: "INVOICE",
                        size: 250,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <Typography>
                                    {row.original.status.length > 1
                                        ? row.original.status[1].description
                                        : row.original.status[0].description}
                                </Typography>
                            </Box>
                        )
                    }
                ]
            },
            {
                id: "payment", //id used to define `group` column
                header: "Payment",
                columns: [
                    {
                        accessorFn: (row) => `${row.payment.amount}`,
                        id: "payment", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: "BALANCE",
                        size: 300,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    backgroundColor:
                                        cell.getValue() > 90000
                                            ? "gold"
                                            : "crimson"
                                }}
                            >
                                <Typography>${cell.getValue()}</Typography>
                            </Box>
                        )
                    }
                ]
            },
            {
                id: "id",
                header: "Due Date",
                columns: [
                    {
                        // accessorFn: (row) => new Date(row.payment.amount), //convert to Date for sorting and filtering
                        id: "due-date",
                        header: "DUE DATE",
                        filterFn: "lessThanOrEqualTo",
                        sortingFn: "datetime",
                        Cell: ({ cell }) =>
                            cell.getValue()?.toLocaleDateString(), //render Date as a string
                        Header: ({ column }) => (
                            <em>{column.columnDef.header}</em>
                        ), //custom header markup
                        //Custom Date Picker Filter from @mui/x-date-pickers
                        Filter: ({ column }) => (
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    onChange={(newValue) => {
                                        column.setFilterValue(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            helperText={
                                                "Filter Mode: Lesss Than"
                                            }
                                            sx={{ minWidth: "120px" }}
                                            variant="standard"
                                        />
                                    )}
                                    value={column.getFilterValue()}
                                />
                            </LocalizationProvider>
                        )
                    }
                ]
            }
        ],
        []
    );

    return (
        <MaterialReactTable
            columns={columns}
            data={data}
            enableColumnFilterModes
            enableColumnOrdering
            enableGrouping
            enablePinning
            enableRowActions
            enableRowSelection
            initialState={{ showColumnFilters: true }}
            positionToolbarAlertBanner="bottom"
            renderDetailPanel={({ row }) => (
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}
                >
                    <img
                        alt="avatar"
                        height={200}
                        src={row.original.avatar}
                        loading="lazy"
                        style={{ borderRadius: "50%" }}
                    />
                    <Box sx={{ textAlign: "center" }}>
                        <Typography variant="h4">
                            Signature Catch Phrase:
                        </Typography>
                        <Typography variant="h1">
                            &quot;{row.original.signatureCatchPhrase}&quot;
                        </Typography>
                    </Box>
                </Box>
            )}
            renderRowActionMenuItems={({ closeMenu }) => [
                <MenuItem
                    key={0}
                    onClick={() => {
                        // View profile logic...
                        closeMenu();
                    }}
                    sx={{ m: 0 }}
                >
                    <ListItemIcon>
                        <AccountCircle />
                    </ListItemIcon>
                    View Profile
                </MenuItem>,
                <MenuItem
                    key={1}
                    onClick={() => {
                        // Send email logic...
                        closeMenu();
                    }}
                    sx={{ m: 0 }}
                >
                    <ListItemIcon>
                        <Send />
                    </ListItemIcon>
                    Send Email
                </MenuItem>
            ]}
            renderTopToolbarCustomActions={({ table }) => {
                const handleDeactivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert("deactivating " + row.getValue("name"));
                    });
                };

                const handleActivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert("activating " + row.getValue("name"));
                    });
                };

                const handleContact = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        alert("contact " + row.getValue("name"));
                    });
                };

                return (
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                        <Button
                            color="error"
                            disabled={
                                table.getSelectedRowModel().flatRows.length ===
                                0
                            }
                            onClick={handleDeactivate}
                            variant="contained"
                        >
                            Deactivate
                        </Button>
                        <Button
                            color="success"
                            disabled={
                                table.getSelectedRowModel().flatRows.length ===
                                0
                            }
                            onClick={handleActivate}
                            variant="contained"
                        >
                            Activate
                        </Button>
                        <Button
                            color="info"
                            disabled={
                                table.getSelectedRowModel().flatRows.length ===
                                0
                            }
                            onClick={handleContact}
                            variant="contained"
                        >
                            Contact
                        </Button>
                    </div>
                );
            }}
        />
    );
};

export default Example;
