export type Gateway = {
  uuid: string;
  gatewayId: string;
  model: string;
  version: string;
  status: string;
  modificationTime: number;
  gatewayStatistics: {
    lastMessageRxTime: number;
  };
};

export type GatewayStats = {
  snapshotTime: number;
  summary: {
    startTime: number;
    endTime: number;
    timeInStatusesS: {
      active: number;
      inactive: number;
      unstable: number;
      offline: number;
    };
    statusTransitionCounts: Record<string, number>;
  };
};
