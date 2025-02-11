import { useState, useEffect, useCallback } from "react";
import { Select, MenuItem, TextField, Button, Box } from "@mui/material";
import { menuStatus } from "../../constant/constantMenuStatus";

type FilteredGatewayProps = {
  onFilterChange: (filters: {
    status: string;
    model: string;
    version: string;
  }) => void;
};

function FilteredGateway({ onFilterChange }: FilteredGatewayProps) {
  const [statusFilter, setStatusFilter] = useState("");
  const [modelFilter, setModelFilter] = useState("");
  const [versionFilter, setVersionFilter] = useState("");

  const handleFilterUpdate = useCallback(() => {
    onFilterChange({
      status: statusFilter,
      model: modelFilter,
      version: versionFilter,
    });
  }, [statusFilter, modelFilter, versionFilter, onFilterChange]);

  useEffect(() => {
    handleFilterUpdate();
  }, [statusFilter, modelFilter, versionFilter]);

  const resetFilters = () => {
    setStatusFilter("");
    setModelFilter("");
    setVersionFilter("");
  };

  return (
    <Box>
      <Select
        sx={{ mr: 2 }}
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        displayEmpty
        renderValue={(selected) => (selected ? selected : "All Status")}
      >
        <MenuItem value="">All Status</MenuItem>
        {menuStatus.map((menu) => (
          <MenuItem value={menu.value}>{menu.title} </MenuItem>
        ))}
      </Select>
      <TextField
        label="Model"
        value={modelFilter}
        onChange={(e) => setModelFilter(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Version"
        value={versionFilter}
        onChange={(e) => setVersionFilter(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button onClick={resetFilters}>Reset</Button>
    </Box>
  );
}

export default FilteredGateway;
