export type TimeRange = 'today' | 'yesterday' | '7days' | 'month';

export interface HourlyTraffic {
  hour: string;
  label: string;
  count: number;
  inflow: number;
  outflow: number;
  isPeak?: boolean;
  isMorning?: boolean;
  isEvening?: boolean;
  heightPercent: number; // For styling the bar
}

export interface GateStat {
  id: number;
  name: string;
  subName?: string;
  tag?: string;
  lanesDescription: string;
  totalVolume: number;
  percentage: number;
  inflow: number;
  outflow: number;
  statusText: string;
  statusType: 'smooth' | 'slow' | 'congested';
  inflowPercent: number;
  outflowPercent: number;
  lanes?: {
    laneId: number;
    type: 'car' | 'motorcycle' | 'pedestrian';
    name: string;
    flowRate: number;
    isOpen: boolean;
  }[];
}

export interface UserDemographic {
  category: string;
  percentage: number;
  count: number;
  colorClass: string;
  indicatorColor: string;
}

export interface VehicleModal {
  type: string;
  icon: string;
  percentage: number;
  count: number;
  colorClass: string;
  accentClass: string;
}

export interface AnalyticsData {
  timeRange: TimeRange;
  displayPeriodLabel: string;
  liveStatusText: string;
  uptimePercent: string;
  totalVolume: number;
  growthPercent: number;
  growthLabel: string;
  peakHourDescription: string;
  peakHourTime: string;
  hourlyData: HourlyTraffic[];
  peakInflow: {
    timeRange: string;
    rateText: string;
    gateDescription: string;
  };
  peakOutflow: {
    timeRange: string;
    rateText: string;
    gateDescription: string;
  };
  dwellTime: {
    averageHours: number;
    unitLabel: string;
    comparisonText: string;
  };
  gates: GateStat[];
  demographics: UserDemographic[];
  vehicleModals: VehicleModal[];
  aiRecommendation: {
    title: string;
    content: string;
    actionLabel?: string;
  };
}

export type ActiveTab = 'dashboard' | 'gates' | 'analytics' | 'alerts';
