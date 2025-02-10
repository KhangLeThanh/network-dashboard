import React, { useState, useEffect, useCallback } from "react";
import { Select, MenuItem, TextField, Button } from "@mui/material";

type FilteredGatewayProps = {
  onFilterChange: (filters: {
    status: string;
    model: string;
    version: string;
  }) => void;
};

const FilteredGateway: React.FC<FilteredGatewayProps> = ({
  onFilterChange,
}) => {
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
    <div>
      <Select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        displayEmpty
        renderValue={(selected) => (selected ? selected : "All Status")}
      >
        <MenuItem value="">All Status</MenuItem>
        <MenuItem value="ACTIVE">Active</MenuItem>
        <MenuItem value="INACTIVE">Inactive</MenuItem>
        <MenuItem value="UNSTABLE">Unstable</MenuItem>
        <MenuItem value="OFFLINE">Offline</MenuItem>
      </Select>
      <TextField
        label="Model"
        value={modelFilter}
        onChange={(e) => setModelFilter(e.target.value)}
      />
      <TextField
        label="Version"
        value={versionFilter}
        onChange={(e) => setVersionFilter(e.target.value)}
      />
      <Button onClick={resetFilters}>Reset</Button>
    </div>
  );
};

export default FilteredGateway;
