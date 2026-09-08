import React from 'react';
import { UserDemographic } from '../types';

interface DemographicsSectionProps {
  demographics: UserDemographic[];
}

export const DemographicsSection: React.FC<DemographicsSectionProps> = ({ demographics }) => {
  return (
    <div className="p-3.5 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#00236f] text-[20px]">
            badge
          </span>
          <h3 className="font-semibold text-base text-[#0b1c30]">
            สัดส่วนประเภทผู้สัญจร
          </h3>
        </div>
        <span className="text-xs font-mono text-[#757682]">
          ระบบ RFID / บัตรประชาชน
        </span>
      </div>

      {/* Segmented Bar Visual */}
      <div className="w-full h-3 rounded-full bg-[#dce9ff] overflow-hidden flex gap-0.5">
        {demographics.map((demo, idx) => {
          let radiusClass = '';
          if (idx === 0) radiusClass = 'rounded-l-full';
          if (idx === demographics.length - 1) radiusClass = 'rounded-r-full';

          let bg = '#00236f';
          if (idx === 1) bg = '#4059aa';
          if (idx === 2) bg = '#006c49';

          return (
            <div
              key={demo.category}
              className={`h-full transition-all duration-500 ${radiusClass}`}
              style={{ width: `${demo.percentage}%`, backgroundColor: bg }}
              title={`${demo.category} ${demo.percentage}% (${demo.count.toLocaleString()} คน)`}
            />
          );
        })}
      </div>

      {/* Segment Details Grid */}
      <div className="grid grid-cols-3 gap-2 pt-1">
        {demographics.map((demo, idx) => {
          let dotBg = 'bg-[#00236f]';
          let textColor = 'text-[#00236f]';
          if (idx === 1) {
            dotBg = 'bg-[#4059aa]';
            textColor = 'text-[#0b1c30]';
          }
          if (idx === 2) {
            dotBg = 'bg-[#006c49]';
            textColor = 'text-[#006c49]';
          }

          return (
            <div
              key={demo.category}
              className="p-2 rounded-lg bg-[#eff4ff] flex flex-col hover:bg-[#e5eeff] transition-colors"
            >
              <div className="flex items-center gap-1 mb-1">
                <span className={`w-2 h-2 rounded-full ${dotBg} flex-shrink-0`}></span>
                <span className="text-xs text-[#444651] truncate">{demo.category}</span>
              </div>
              <span className={`font-mono text-xl font-bold ${textColor}`}>
                {demo.percentage}%
              </span>
              <span className="text-[11px] font-mono text-[#757682]">
                {demo.count.toLocaleString('th-TH')} คน
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
