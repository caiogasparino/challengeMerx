import React, { useMemo } from "react";

//MRT Imports
import MaterialReactTable from "material-react-table";

//Material-UI Imports
import { Box, Typography, TextField } from "@mui/material";

//Import Material React Table Translations
import { MRT_Localization_PT_BR } from "material-react-table/locales/pt-BR";

//Date Picker Imports
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const styles = {
    cell: { display: "flex", alignItems: "center", gap: "1rem" }
};

export const DataTableDetails = ({ selectedOrder }) => {
    const columns = useMemo(
        () => [
            {
                id: "transactions", //id used to define `group` column
                columns: [
                    {
                        accessorFn: (row) => `${row.order}`, //accessorFn used to join multiple data into a single cell
                        id: "invoice", //id is still required when using accessorFn instead of accessorKey
                        header: "INVOICE",
                        size: 100,
                        Cell: ({ cell, row }) => (
                            <Box sx={styles.cell}>
                                <Typography>#{cell.getValue()}</Typography>
                            </Box>
                        )
                    }
                ]
            },
            {
                id: "payment", //id used to define `group` column
                columns: [
                    {
                        accessorFn: (row) => `${row.payment.amount}`,
                        id: "payment", //accessorKey used to define `data` column. `id` gets set to accessorKey automatically
                        enableClickToCopy: true,
                        header: "BALANCE",
                        size: 100,
                        Cell: ({ cell, row }) => (
                            <Box sx={styles.cell}>
                                <Typography sx={{ fontWeight: 600 }}>
                                    ${cell.getValue()}
                                </Typography>
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
                        size: 80,
                        Cell: ({ cell, row }) => (
                            <Box
                                sx={() => ({
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    backgroundColor:
                                        (cell.getValue() === "0" &&
                                            "#e6f9e7") ||
                                        (cell.getValue() === "1" &&
                                            "#fff5e6") ||
                                        (cell.getValue() <= "13" &&
                                            "#fff5e6") ||
                                        (cell.getValue() > "73" &&
                                            cell.getValue() <= "95" &&
                                            "#f4eaf8") ||
                                        (cell.getValue() > "13" &&
                                            cell.getValue() <= "34" &&
                                            "#ffe9e3") ||
                                        (cell.getValue() > "34" &&
                                            cell.getValue() <= "73" &&
                                            "#ffe3e2"),
                                    borderRadius: "1rem",
                                    color:
                                        (cell.getValue() === "0" &&
                                            "#13b43c") ||
                                        (cell.getValue() <= "13" &&
                                            "#de9125") ||
                                        (cell.getValue() > "13" &&
                                            cell.getValue() <= "34" &&
                                            "#ff693e") ||
                                        (cell.getValue() > "73" &&
                                            cell.getValue() <= "95" &&
                                            "#ac71cf") ||
                                        (cell.getValue() > "34" &&
                                            cell.getValue() <= "73" &&
                                            "#f92223"),
                                    maxWidth: "40ch",
                                    width: "100px",
                                    p: ".20rem"
                                })}
                            >
                                <Typography>
                                    {(cell.getValue() === "0" && "Current") ||
                                        (cell.getValue() === "1" &&
                                            cell.getValue() + " day late") ||
                                        (cell.getValue() <= "13" &&
                                            cell.getValue() + " days late") ||
                                        (cell.getValue() >= "13" &&
                                            cell.getValue() + " days late")}
                                </Typography>
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
            data={selectedOrder}
            displayColumnDefOptions={true}
            enableColumnActions={false}
            enableRowActions={true}
            localization={
                (MRT_Localization_PT_BR,
                {
                    actions: ""
                })
            }
            positionActionsColumn="last"
            initialState={{ showColumnFilters: false }}
            positionToolbarAlertBanner="bottom"
        />
    );
};

export default DataTableDetails;
