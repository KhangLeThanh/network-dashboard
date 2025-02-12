import React from "react";
import { useState, useEffect } from "react";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  TextField,
} from "@mui/material";
import FormDialog from "../../components/FormDialog/FormDialog";
import Label from "../../components/Label/Label";
import { Gateway } from "../../utils/types";
import { menuStatus } from "../../constant/constantMenuStatus";

type EditGatewayDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (updatedGateway: Gateway) => void;
  gateway: Gateway | null;
};

const EditGatewayDialog: React.FC<EditGatewayDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  gateway,
}) => {
  const [status, setStatus] = useState("");
  const [getwayId, setGetwayId] = useState("");
  const [version, setVersion] = useState("");
  const [model, setModel] = useState("");

  useEffect(() => {
    if (gateway) {
      setStatus(gateway.status);
      setGetwayId(gateway.gatewayId);
      setVersion(gateway.version);
      setModel(gateway.model);
    }
  }, [gateway]);

  const handleConfirm = () => {
    if (gateway) {
      // Pass the updated gateway back to the parent and close the dialog
      onConfirm({ ...gateway, status, version, model });
      onClose(); // Close the dialog after confirmation
    }
  };

  return (
    <FormDialog
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Gateway"
      onConfirm={handleConfirm}
    >
      <Label text="Gateway Id:" />
      <Typography variant="body1">{getwayId}</Typography>
      <FormControl fullWidth margin="normal">
        <Label text="Status:" />
        <Select value={status} onChange={(e) => setStatus(e.target.value)}>
          {menuStatus.map((menu) => (
            <MenuItem key={menu.value} value={menu.value}>
              {menu.title}{" "}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Label text="Model:" />
      <TextField value={model} onChange={(e) => setModel(e.target.value)} />
      <Label text="Version:" />
      <TextField value={version} onChange={(e) => setVersion(e.target.value)} />
    </FormDialog>
  );
};

export default EditGatewayDialog;
