import React from 'react';
import { VehicleModal } from '../types';

interface VehicleModalSectionProps {
  vehicleModals: VehicleModal[];
}

export const VehicleModalSection: React.FC<VehicleModalSectionProps> = ({ vehicleModals }) => {
  return (
    <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#00236f] text-[20px]">
            commute
          </span>
          <h3 className="font-semibold text-base text-[#0b1c30]">
            รูปแบบการเดินทาง (Vehicle Modal)
          </h3>
        </div>
        <span className="text-xs font-mono text-[#757682]">
          กล้อง ALPR วิเคราะห์
        </span>
      </div>

      {/* Grid of 3 Modes */}
      <div className="grid grid-cols-3 gap-2">
        {vehicleModals.map((item, idx) => {
          let iconBg = 'bg-[#00236f]/10 text-[#00236f]';
          let textColor = 'text-[#00236f]';
          let barBg = 'bg-[#00236f]';

          if (idx === 1) {
            iconBg = 'bg-[#006c49]/15 text-[#006c49]';
            textColor = 'text-[#006c49]';
            barBg = 'bg-[#006c49]';
          } else if (idx === 2) {
            iconBg = 'bg-[#4059aa]/15 text-[#4059aa]';
            textColor = 'text-[#0b1c30]';
            barBg = 'bg-[#4059aa]';
          }

          const unit = item.type.includes('เดิน') ? 'คน' : 'คัน';

          return (
            <div
              key={item.type}
              className="p-2.5 rounded-xl bg-[#eff4ff] flex flex-col items-center text-center relative overflow-hidden hover:bg-[#e5eeff] transition-colors"
            >
              <div className={`w-8 h-8 rounded-full ${iconBg} flex items-center justify-center mb-1.5`}>
                <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
              </div>
              <span className="text-xs font-medium text-[#0b1c30] truncate max-w-full">
                {item.type}
              </span>
              <span className={`font-mono text-xl font-bold ${textColor} mt-0.5`}>
                {item.percentage}%
              </span>
              <span className="text-[11px] font-mono text-[#757682]">
                {item.count.toLocaleString('th-TH')} {unit}
              </span>
              <div className="w-full bg-[#d3e4fe] h-1 rounded-full mt-2 overflow-hidden">
                <div
                  className={`${barBg} h-full transition-all duration-500`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
