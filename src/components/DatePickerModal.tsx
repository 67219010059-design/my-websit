import React, { useState } from 'react';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyDate: (dateLabel: string) => void;
}

export const DatePickerModal: React.FC<DatePickerModalProps> = ({
  isOpen,
  onClose,
  onApplyDate,
}) => {
  const [selectedDay, setSelectedDay] = useState<number>(18);
  const [selectedMonth, setSelectedMonth] = useState<string>('พฤศจิกายน');
  const [selectedYear, setSelectedYear] = useState<number>(2567);

  if (!isOpen) return null;

  const daysInMonth = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleApply = () => {
    onApplyDate(`${selectedDay} ${selectedMonth} ${selectedYear}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-sm w-full p-4 shadow-xl border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-[#eff4ff]">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00236f] text-xl">
              calendar_month
            </span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">
              กำหนดช่วงวันที่ต้องการวิเคราะห์
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#444651] hover:bg-[#dce9ff]"
          >
            ✕
          </button>
        </div>

        {/* Month and Year Selector */}
        <div className="flex justify-between items-center bg-[#eff4ff] p-2 rounded-xl text-xs font-medium text-[#00236f]">
          <span>เดือน {selectedMonth} พ.ศ. {selectedYear}</span>
          <span className="text-[11px] text-[#757682]">เลือกวันเพื่อสรุปผล</span>
        </div>

        {/* Calendar Day Grid */}
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {['อา', 'จ', 'อ', 'พ', 'พฤ', 'ศ', 'ส'].map((day) => (
            <div key={day} className="font-medium text-[#757682] py-1 text-[11px]">
              {day}
            </div>
          ))}
          {/* Offset for beginning of month */}
          <div className="py-2"></div>
          <div className="py-2"></div>
          <div className="py-2"></div>

          {daysInMonth.map((day) => {
            const isSelected = selectedDay === day;
            const isAvailable = day <= 18; // historical data up to 18th

            return (
              <button
                key={day}
                disabled={!isAvailable}
                onClick={() => setSelectedDay(day)}
                className={`py-1.5 rounded-lg text-xs font-mono transition-all ${
                  isSelected
                    ? 'bg-[#00236f] text-white font-bold shadow-xs'
                    : isAvailable
                    ? 'hover:bg-[#dce9ff] text-[#0b1c30]'
                    : 'text-gray-300 cursor-not-allowed'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>

        {/* Quick presets */}
        <div className="flex gap-1.5 pt-1">
          <button
            onClick={() => setSelectedDay(18)}
            className="flex-1 py-1 text-[11px] rounded bg-[#eff4ff] text-[#00236f] hover:bg-[#dce9ff]"
          >
            18 พ.ย. (ปัจจุบัน)
          </button>
          <button
            onClick={() => setSelectedDay(17)}
            className="flex-1 py-1 text-[11px] rounded bg-[#eff4ff] text-[#00236f] hover:bg-[#dce9ff]"
          >
            17 พ.ย. (เมื่อวาน)
          </button>
        </div>

        {/* Footer Buttons */}
        <div className="flex gap-2 pt-2 border-t border-[#eff4ff]">
          <button
            onClick={onClose}
            className="flex-1 py-2 rounded-lg bg-[#eff4ff] text-[#444651] text-xs font-medium hover:bg-[#dce9ff]"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleApply}
            className="flex-1 py-2 rounded-lg bg-[#00236f] text-white text-xs font-medium hover:bg-[#1e3a8a] shadow-xs"
          >
            นำไปใช้ ({selectedDay} {selectedMonth})
          </button>
        </div>
      </div>
    </div>
  );
};
