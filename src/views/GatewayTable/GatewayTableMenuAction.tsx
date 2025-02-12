import { NavLink } from "react-router-dom";
import { Menu, MenuItem } from "@mui/material";
import { Gateway } from "../../utils/types";

type GatewayTableMenuActionProps = {
  anchorEl: HTMLElement | null;
  selectedGateway: Gateway | null;
  handleClose: () => void;
  handleEditMenuItemClick: () => void;
};

function GatewayTableMenuAction({
  anchorEl,
  selectedGateway,
  handleClose,
  handleEditMenuItemClick,
}: GatewayTableMenuActionProps) {
  return (
    <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
      <MenuItem onClick={handleEditMenuItemClick}>Edit</MenuItem>
      <MenuItem>
        <NavLink
          to={`/statistic/${selectedGateway?.gatewayId}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          View History Time in Status of Gateway
        </NavLink>
      </MenuItem>
    </Menu>
  );
}

export default GatewayTableMenuAction;
