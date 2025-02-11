import { GatewayStatus } from "../utils/enum";

export const menuStatus = [
  {
    title: "Active",
    value: GatewayStatus.ACTIVE,
  },
  {
    title: "Inactive",
    value: GatewayStatus.INACTIVE,
  },
  {
    title: "Unstable",
    value: GatewayStatus.UNSTABLE,
  },
  {
    title: "Offline",
    value: GatewayStatus.OFFLINE,
  },
];
