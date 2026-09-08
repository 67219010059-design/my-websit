import React from 'react';
import { TimeRange } from '../types';

interface DateFilterBarProps {
  selectedRange: TimeRange;
  onSelectRange: (range: TimeRange) => void;
  onOpenDatePicker: () => void;
  liveStatusText: string;
  uptimePercent: string;
}

export const DateFilterBar: React.FC<DateFilterBarProps> = ({
  selectedRange,
  onSelectRange,
  onOpenDatePicker,
  liveStatusText,
  uptimePercent,
}) => {
  const filterOptions: { id: TimeRange; label: string }[] = [
    { id: 'today', label: 'วันนี้' },
    { id: 'yesterday', label: 'เมื่อวาน' },
    { id: '7days', label: '7 วันล่าสุด' },
    { id: 'month', label: 'เดือนนี้' },
  ];

  return (
    <section className="flex flex-col gap-2 pt-1">
      {/* Title & Date Custom Picker Button */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#00236f] text-[20px]">
            calendar_month
          </span>
          <h2 className="font-semibold text-lg text-[#0b1c30] tracking-tight">
            สถิติและแนวโน้มการสัญจร
          </h2>
        </div>
        <button
          id="calendarPickerBtn"
          onClick={onOpenDatePicker}
          className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#e5eeff] text-[#00236f] hover:bg-[#dce9ff] active:scale-95 transition-all text-xs font-mono font-medium shadow-2xs cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">tune</span>
          <span>ระบุวัน</span>
        </button>
      </div>

      {/* Quick Range Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5" id="dateFilterGroup">
        {filterOptions.map((opt) => {
          const isActive = selectedRange === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => onSelectRange(opt.id)}
              className={`filter-pill px-3 py-1.5 rounded-full text-xs transition-all flex-shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-[#00236f] text-white font-semibold shadow-sm scale-[1.02]'
                  : 'bg-[#eff4ff] text-[#444651] hover:bg-[#e5eeff] font-medium'
              }`}
            >
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* Active Range Banner with Micro-Delight */}
      <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-[#eff4ff] text-[#444651] text-xs border border-[#e5eeff]/70">
        <div className="flex items-center gap-2 min-w-0">
          <span className="flex h-2 w-2 rounded-full bg-[#006c49] animate-pulse"></span>
          <span className="truncate">{liveStatusText}</span>
        </div>
        <span className="text-[11px] font-mono text-[#006c49] font-semibold whitespace-nowrap bg-[#006c49]/10 px-2 py-0.5 rounded ml-2">
          {uptimePercent}
        </span>
      </div>
    </section>
  );
};
