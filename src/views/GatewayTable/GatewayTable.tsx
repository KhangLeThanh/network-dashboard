import React, { useState, useEffect, useMemo } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  IconButton,
  TableSortLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { Gateway } from "../../utils/types";
import gatewayData from "../../data/gateway_listing_response.json";
import { changeColourOfflineStatus } from "../../functions/function";
import FilteredGateway from "./FilteredGateway";
import EditGatewayDialog from "./EditGatewayDialog";
import GatewayTableMenuAction from "./GatewayTableMenuAction";
import { PALATTE_ERROR_MAIN_COLOR } from "../../constant/constantColor";
import { GatewayStatus, SortingDirectionEnum } from "../../utils/enum";

const GatewayTable: React.FC = () => {
  const [gateways, setGateways] = useState<Gateway[]>([]);
  const [status, setStatus] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [version, setVersion] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDirection, setSortDirection] = useState<SortingDirectionEnum>(
    SortingDirectionEnum.DESCENDING
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedGateway, setSelectedGateway] = useState<Gateway | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  useEffect(() => {
    setGateways(gatewayData.results);
  }, []);

  const handleFilterChange = ({
    status,
    model,
    version,
  }: {
    status: string;
    model: string;
    version: string;
  }) => {
    setStatus(status);
    setModel(model);
    setVersion(version);
    setPage(0); // Reset pagination when filters change
  };

  // Filtering the gateways based on filter criteria (status, model, version)
  const filteredGateways = useMemo(() => {
    let filtered = gateways;
    if (status)
      filtered = filtered.filter((gateway) => gateway.status === status);
    if (model)
      filtered = filtered.filter((gateway) => gateway.model.includes(model));
    if (version)
      filtered = filtered.filter((gateway) =>
        gateway.version.includes(version)
      );
    return filtered;
  }, [gateways, status, model, version]);

  // Sorting logic before pagination
  const sortedGateways = useMemo(() => {
    return [...filteredGateways].sort((a, b) => {
      const timeA = a.gatewayStatistics.lastMessageRxTime;
      const timeB = b.gatewayStatistics.lastMessageRxTime;

      return sortDirection === SortingDirectionEnum.ASCENDING
        ? timeA - timeB
        : timeB - timeA;
    });
  }, [filteredGateways, sortDirection]);

  // Pagination logic (applied after sorting)
  const paginatedGateways = useMemo(() => {
    const startIndex = page * rowsPerPage;
    return sortedGateways.slice(startIndex, startIndex + rowsPerPage);
  }, [sortedGateways, page, rowsPerPage]);

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSortClick = () => {
    setSortDirection((prevDirection) =>
      prevDirection === SortingDirectionEnum.ASCENDING
        ? SortingDirectionEnum.DESCENDING
        : SortingDirectionEnum.ASCENDING
    );
    setPage(0);
  };

  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    gateway: Gateway
  ) => {
    setAnchorEl(event.currentTarget);
    setSelectedGateway(gateway);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEditMenuItemClick = () => {
    if (selectedGateway) {
      setEditDialogOpen(true);
      handleClose();
    }
  };

  const handleEditConfirm = (updatedGateway: Gateway) => {
    setGateways((prevGateways) =>
      prevGateways.map((gateway) =>
        gateway.gatewayId === updatedGateway.gatewayId
          ? updatedGateway
          : gateway
      )
    );
    setEditDialogOpen(false);
  };

  // Columns configuration
  const tableColumns = [
    { columnDisplayName: "Gateway ID", columKey: "gatewayId" },
    { columnDisplayName: "Status", columKey: "status" },
    { columnDisplayName: "Model", columKey: "model" },
    { columnDisplayName: "Version", columKey: "version" },
    {
      columnDisplayName: "Last Message Time",
      columKey: "lastMessageTime",
      sortable: true,
    },
    { columnDisplayName: "Actions", columKey: "action" },
  ];

  return (
    <Grid container spacing={2} padding={2} sx={{ width: "100%" }}>
      <Grid size={12}>
        <Grid container sx={{ pt: 2, pb: 2 }}>
          <Grid size={2}>
            <Typography variant="h4" gutterBottom>
              Gateways Table
            </Typography>
          </Grid>
          <Grid size={10}>
            <FilteredGateway onFilterChange={handleFilterChange} />
          </Grid>
        </Grid>

        <TableContainer>
          <Table sx={{ width: "100%" }}>
            <TableHead>
              <TableRow>
                {tableColumns.map((col) => (
                  <TableCell key={col.columKey}>
                    {col.sortable ? (
                      <TableSortLabel
                        active
                        direction={sortDirection}
                        onClick={handleSortClick}
                      >
                        <Typography variant="h6">
                          {col.columnDisplayName}
                        </Typography>
                      </TableSortLabel>
                    ) : (
                      <Typography variant="h6">
                        {col.columnDisplayName}
                      </Typography>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedGateways.map((gateway) => (
                <TableRow
                  key={gateway.uuid}
                  sx={{
                    backgroundColor:
                      gateway.status === GatewayStatus.OFFLINE
                        ? PALATTE_ERROR_MAIN_COLOR
                        : "transparent",
                  }}
                >
                  <TableCell
                    sx={{ color: changeColourOfflineStatus(gateway.status) }}
                  >
                    {gateway.gatewayId}
                  </TableCell>
                  <TableCell
                    sx={{ color: changeColourOfflineStatus(gateway.status) }}
                  >
                    {gateway.status}
                  </TableCell>
                  <TableCell
                    sx={{ color: changeColourOfflineStatus(gateway.status) }}
                  >
                    {gateway.model}
                  </TableCell>
                  <TableCell
                    sx={{ color: changeColourOfflineStatus(gateway.status) }}
                  >
                    {gateway.version}
                  </TableCell>
                  <TableCell
                    sx={{ color: changeColourOfflineStatus(gateway.status) }}
                  >
                    {new Date(
                      gateway.gatewayStatistics.lastMessageRxTime * 1000
                    ).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(event) => handleMenuClick(event, gateway)}
                      sx={{ color: changeColourOfflineStatus(gateway.status) }}
                    >
                      <MoreHorizOutlinedIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={filteredGateways.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        <GatewayTableMenuAction
          anchorEl={anchorEl}
          selectedGateway={selectedGateway}
          handleClose={handleClose}
          handleEditMenuItemClick={handleEditMenuItemClick}
        />

        <EditGatewayDialog
          isOpen={editDialogOpen}
          onClose={() => setEditDialogOpen(false)}
          onConfirm={handleEditConfirm}
          gateway={selectedGateway}
        />
      </Grid>
    </Grid>
  );
};

export default GatewayTable;
