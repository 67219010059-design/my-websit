import React, { useState } from 'react';
import { GateStat } from '../types';

interface GateRankingSectionProps {
  gates: GateStat[];
}

export const GateRankingSection: React.FC<GateRankingSectionProps> = ({ gates }) => {
  const [selectedGate, setSelectedGate] = useState<number | null>(null);

  return (
    <section className="flex flex-col gap-2.5">
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#00236f] text-[20px]">
            sensor_door
          </span>
          <h3 className="font-semibold text-base text-[#0b1c30]">
            อันดับประตูที่มีการสัญจรสูงสุด
          </h3>
        </div>
        <span className="text-xs font-mono text-[#757682]">
          รวม {gates.length} ประตูหลัก
        </span>
      </div>

      {/* Gate Cards List */}
      <div className="flex flex-col gap-2">
        {gates.map((gate, index) => {
          const rank = index + 1;
          const isRankOne = rank === 1;
          const isSelected = selectedGate === gate.id;

          return (
            <div
              key={gate.id}
              onClick={() => setSelectedGate(isSelected ? null : gate.id)}
              className={`p-3 rounded-xl bg-white shadow-xs border transition-all cursor-pointer ${
                isSelected ? 'border-[#00236f] ring-1 ring-[#00236f]' : 'border-[#e5eeff]/80 hover:border-[#b6c4ff]'
              }`}
            >
              {/* Top Row: Rank, Name, Badges, Total Count */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center font-bold ${
                      isRankOne
                        ? 'bg-[#00236f] text-white'
                        : 'bg-[#dce9ff] text-[#0b1c30]'
                    }`}
                  >
                    {rank}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-[15px] text-[#0b1c30] truncate">
                        {gate.name}
                      </span>
                      {gate.tag && (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-mono bg-[#006c49]/15 text-[#006c49] font-bold">
                          {gate.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[#444651] truncate">
                      {gate.lanesDescription}
                    </span>
                  </div>
                </div>

                <div className="text-right flex-shrink-0">
                  <span
                    className={`font-mono text-xl font-bold block leading-none ${
                      isRankOne ? 'text-[#00236f]' : 'text-[#0b1c30]'
                    }`}
                  >
                    {gate.totalVolume.toLocaleString('th-TH')}
                  </span>
                  <span className="text-[11px] font-mono text-[#757682]">
                    {gate.percentage}% ของทั้งหมด
                  </span>
                </div>
              </div>

              {/* Progress Volume Bar (Inflow vs Outflow) */}
              <div className="w-full bg-[#dce9ff] h-2 rounded-full overflow-hidden flex mt-2.5">
                <div
                  className="bg-[#00236f] h-full rounded-l-full transition-all duration-500"
                  style={{ width: `${gate.inflowPercent}%` }}
                  title={`ขาเข้า ${gate.inflowPercent}%`}
                ></div>
                <div
                  className="bg-[#006c49] h-full rounded-r-full transition-all duration-500"
                  style={{ width: `${gate.outflowPercent}%` }}
                  title={`ขาออก ${gate.outflowPercent}%`}
                ></div>
              </div>

              {/* Bottom Row: Inflow, Outflow, Status */}
              <div className="flex justify-between items-center text-[#444651] text-xs font-mono pt-1">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00236f]"></span>
                  <span>ขาเข้า: {gate.inflow.toLocaleString('th-TH')}</span>
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#006c49]"></span>
                  <span>ขาออก: {gate.outflow.toLocaleString('th-TH')}</span>
                </span>
                <span
                  className={`font-semibold font-sans ${
                    gate.statusType === 'slow'
                      ? 'text-[#ba1a1a]'
                      : 'text-[#006c49]'
                  }`}
                >
                  {gate.statusText}
                </span>
              </div>

              {/* Expanded Lane Info if clicked */}
              {isSelected && gate.lanes && (
                <div className="mt-2.5 pt-2 border-t border-[#eff4ff] flex flex-col gap-1.5 animate-fadeIn">
                  <span className="text-[11px] font-medium text-[#00236f]">
                    รายละเอียดช่องจราจร (Smart Barrier & Sensor):
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {gate.lanes.map((lane) => (
                      <div
                        key={lane.laneId}
                        className="p-1.5 rounded bg-[#eff4ff] flex items-center justify-between text-[11px]"
                      >
                        <span className="truncate text-[#0b1c30]">{lane.name}</span>
                        <span
                          className={`px-1.5 py-0.5 rounded text-[10px] font-mono font-medium ${
                            lane.isOpen
                              ? 'bg-[#006c49]/10 text-[#006c49]'
                              : 'bg-[#ba1a1a]/10 text-[#ba1a1a]'
                          }`}
                        >
                          {lane.isOpen ? 'เปิดบริการ' : 'ปิดเลน'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
