import { GatewayStatus } from "../utils/enum";
import customTheme from "../theme/customTheme";

export function changeColourOfflineStatus(status: string) {
  const defaultColor = customTheme.palette.text.primary;
  const highlightColor = customTheme.palette.secondary.light;

  if (status === GatewayStatus.OFFLINE) {
    return highlightColor;
  }
  return defaultColor;
}
