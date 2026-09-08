import React, { useState } from 'react';
import { HourlyTraffic } from '../types';

interface TrafficOverviewCardProps {
  totalVolume: number;
  growthPercent: number;
  growthLabel: string;
  peakHourDescription: string;
  peakHourTime: string;
  hourlyData: HourlyTraffic[];
}

export const TrafficOverviewCard: React.FC<TrafficOverviewCardProps> = ({
  totalVolume,
  growthPercent,
  growthLabel,
  peakHourDescription,
  peakHourTime,
  hourlyData,
}) => {
  const [selectedBar, setSelectedBar] = useState<HourlyTraffic | null>(null);

  // Formatter for thai numbers
  const formattedVolume = totalVolume.toLocaleString('th-TH');

  return (
    <div className="col-span-2 p-3.5 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col justify-between relative overflow-hidden">
      {/* Subtle background ambient blur */}
      <div className="absolute right-0 top-0 translate-x-4 -translate-y-4 w-32 h-32 rounded-full bg-[#dce1ff]/40 pointer-events-none blur-2xl"></div>

      {/* Card Header: Icon, Label, Trend Badge */}
      <div className="flex items-center justify-between mb-1.5 z-10">
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-lg bg-[#dce1ff] flex items-center justify-center text-[#00236f]">
            <span className="material-symbols-outlined text-[18px]">group</span>
          </div>
          <span className="text-xs font-medium text-[#444651]">ยอดผ่านเข้า-ออกรวมทั้งหมด</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#006c49]/15 text-[#006c49] text-[11px] font-mono font-semibold flex items-center gap-0.5">
          <span className="material-symbols-outlined text-[14px]">trending_up</span>
          <span>+{growthPercent}%</span>
        </span>
      </div>

      {/* Main KPI Volume */}
      <div className="flex items-baseline justify-between mt-1 z-10">
        <div className="flex items-baseline gap-1.5">
          <span className="font-mono text-[32px] font-bold leading-[38px] text-[#00236f] tracking-tight">
            {formattedVolume}
          </span>
          <span className="text-xs text-[#444651] font-medium">ครั้ง</span>
        </div>
        <span className="text-[11px] font-mono text-[#757682]">{growthLabel}</span>
      </div>

      {/* Sparkline Influx/Outflow Chart */}
      <div className="mt-3 pt-2 border-t border-[#f0f4ff] flex flex-col gap-1 z-10">
        <div className="flex justify-between items-center text-[#444651] text-[11px] font-mono">
          <span>{peakHourDescription}</span>
          <span className="text-[#00236f] font-semibold">{peakHourTime}</span>
        </div>

        {/* Selected bar detail popup if clicked */}
        {selectedBar && (
          <div className="flex items-center justify-between px-2.5 py-1 rounded bg-[#eff4ff] text-[11px] text-[#00236f] animate-fadeIn">
            <span className="font-medium">
              ช่วง {selectedBar.hour} น.: <strong>{selectedBar.count.toLocaleString()} คัน/คน</strong>
            </span>
            <span className="text-[10px] text-[#444651]">
              (เข้า {selectedBar.inflow.toLocaleString()} / ออก {selectedBar.outflow.toLocaleString()})
            </span>
          </div>
        )}

        {/* Bar Graphic */}
        <div className="h-10 w-full flex items-end gap-1 pt-1">
          {hourlyData.map((item, idx) => {
            // Determine color matching screenshot
            let barColor = 'bg-[#dce9ff] hover:bg-[#b6c4ff]';
            if (item.isPeak) {
              barColor = 'bg-[#00236f] hover:bg-[#1e3a8a]';
            } else if (idx === 2) {
              barColor = 'bg-[#00236f]/40 hover:bg-[#00236f]/60';
            } else if (idx === 4) {
              barColor = 'bg-[#00236f]/60 hover:bg-[#00236f]/80';
            } else if (idx === 8) {
              barColor = 'bg-[#4edea3]/70 hover:bg-[#4edea3]';
            } else if (idx === 9) {
              barColor = 'bg-[#006c49] hover:bg-[#005236]';
            } else if (idx === 10) {
              barColor = 'bg-[#006c49]/50 hover:bg-[#006c49]/70';
            }

            const isSelected = selectedBar?.hour === item.hour;

            return (
              <button
                key={item.hour + idx}
                onClick={() => setSelectedBar(selectedBar?.hour === item.hour ? null : item)}
                className={`flex-1 ${barColor} rounded-t-xs transition-all relative group cursor-pointer focus:outline-none ${
                  isSelected ? 'ring-2 ring-[#00236f]' : ''
                }`}
                style={{ height: `${item.heightPercent}%` }}
                title={`${item.hour} น. : ${item.count.toLocaleString()} ราย`}
              >
                {item.isPeak && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 text-[9px] font-mono text-[#00236f] font-bold pointer-events-none whitespace-nowrap">
                    เช้า
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
