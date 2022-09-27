import React, { useMemo } from "react";

//MRT Imports
import MaterialReactTable from "material-react-table";

//Material-UI Imports
import { Box, MenuItem, Typography, TextField } from "@mui/material";

//Date Picker Imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//Mock Data
import data from "../dataTable";

const DataTable = () => {
    const columns = useMemo(
        () => [
            {
                id: "transactions", //id used to define `group` column
                header: "ORDERS",
                columns: [
                    {
                        accessorFn: (row) => `${row.status[0].description}`,
                        accessorKey: "status",
                        filterVariant: "range",
                        header: "STATUS",
                        size: 150,
                        //custom conditional format and styling
                        Cell: ({ cell }) => (
                            <Box
                                sx={(theme) => ({
                                    backgroundColor:
                                        (cell.getValue() === "Wrong Amount" &&
                                            theme.palette.error.dark) ||
                                        (cell.getValue() ===
                                            "Payment Request" &&
                                            theme.palette.warning.dark) ||
                                        (cell.getValue() ===
                                            "Payment Approved" &&
                                            theme.palette.primary.dark) ||
                                        (cell.getValue() === "Create a order" &&
                                            theme.palette.success.light) ||
                                        (cell.getValue() ===
                                            "Electronic Invoice Sent" &&
                                            theme.palette.secondary.dark),
                                    borderRadius: "0.25rem",
                                    color: "#fff",
                                    maxWidth: "22ch",
                                    p: ".50rem"
                                })}
                            >
                                <Typography>{cell.getValue()}</Typography>
                            </Box>
                        )
                    },
                    {
                        accessorFn: (row) => `${row.order}`, //accessorFn used to join multiple data into a single cell
                        id: "invoice", //id is still required when using accessorFn instead of accessorKey
                        header: "INVOICE",
                        size: 100,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <Typography>#{cell.getValue()}</Typography>
                            </Box>
                        )
                    },
                    {
                        accessorFn: (row) => `${row.payment.amount}`,
                        id: "payment", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: "BALANCE",
                        size: 100,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <Typography>${cell.getValue()}</Typography>
                            </Box>
                        )
                    },
                    {
                        accessorFn: (row) =>
                            new Date(`${row.payment["due-date"]}`), //convert to Date for sorting and filtering
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
                    },
                    {
                        accessorFn: (row) => `${row.terms}`,
                        id: "terms", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: "BEYOND TERMS",
                        size: 50,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <Typography>{cell.getValue()}</Typography>
                            </Box>
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
            displayColumnDefOptions
            enableColumnOrdering
            enableRowActions
            initialState={{ showColumnFilters: false }}
            positionToolbarAlertBanner="bottom"
            renderRowActionMenuItems={({ closeMenu }) => [
                <MenuItem
                    key={0}
                    onClick={() => {
                        // View profile logic...
                        closeMenu();
                    }}
                    sx={{ m: 0 }}
                >
                    RENDER MODAL DETAILS
                </MenuItem>
            ]}
        />
    );
};

export default DataTable;
