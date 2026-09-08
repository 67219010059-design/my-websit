import React from 'react';

interface PeakCardsProps {
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
}

export const PeakCards: React.FC<PeakCardsProps> = ({
  peakInflow,
  peakOutflow,
  dwellTime,
}) => {
  return (
    <>
      {/* Peak Influx Hour */}
      <div className="p-3 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col justify-between relative overflow-hidden">
        <div className="w-1.5 h-full absolute left-0 top-0 bg-[#006c49]"></div>
        <div className="flex items-center gap-1.5 mb-1 pl-1">
          <span className="material-symbols-outlined text-[#006c49] text-[18px]">login</span>
          <span className="text-xs text-[#444651]">คนเข้าสูงสุด</span>
        </div>
        <div className="pl-1 my-1">
          <span className="font-mono text-xl font-bold text-[#0b1c30] block leading-tight">
            {peakInflow.timeRange}
          </span>
          <span className="text-xs font-mono text-[#006c49] font-semibold">
            {peakInflow.rateText}
          </span>
        </div>
        <span className="text-[#757682] pl-1 mt-1 text-[11px] truncate font-sans">
          {peakInflow.gateDescription}
        </span>
      </div>

      {/* Peak Outflow Hour */}
      <div className="p-3 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col justify-between relative overflow-hidden">
        <div className="w-1.5 h-full absolute left-0 top-0 bg-[#00714d]"></div>
        <div className="flex items-center gap-1.5 mb-1 pl-1">
          <span className="material-symbols-outlined text-[#00714d] text-[18px]">logout</span>
          <span className="text-xs text-[#444651]">คนออกสูงสุด</span>
        </div>
        <div className="pl-1 my-1">
          <span className="font-mono text-xl font-bold text-[#0b1c30] block leading-tight">
            {peakOutflow.timeRange}
          </span>
          <span className="text-xs font-mono text-[#00714d] font-semibold">
            {peakOutflow.rateText}
          </span>
        </div>
        <span className="text-[#757682] pl-1 mt-1 text-[11px] truncate font-sans">
          {peakOutflow.gateDescription}
        </span>
      </div>

      {/* Average Dwell Time Card */}
      <div className="col-span-2 p-3 rounded-xl bg-[#eff4ff] flex items-center justify-between shadow-xs border border-[#e5eeff]">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-[#d3e4fe] flex items-center justify-center text-[#00236f]">
            <span className="material-symbols-outlined text-[22px]">timer</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-[#444651]">ระยะเวลาพำนักเฉลี่ยในพื้นที่</span>
            <span className="text-base text-[#0b1c30] font-semibold">
              {dwellTime.averageHours} {dwellTime.unitLabel}
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="px-2 py-1 rounded bg-[#d3e4fe] text-[#00236f] text-xs font-mono font-semibold whitespace-nowrap">
            {dwellTime.comparisonText}
          </span>
        </div>
      </div>
    </>
  );
};
