import React, { useState } from 'react';
import { HOTLINK_LOGO_URL } from '../data/mockData';

interface HeaderProps {
  onProfileClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onProfileClick }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 pt-[env(safe-area-inset-top,0px)] bg-[#f8f9ff]/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#e5eeff]">
      <div className="max-w-md mx-auto h-16 px-4 flex items-center justify-between gap-2">
        {/* Left: Logo and App Title */}
        <div className="flex items-center gap-2.5 min-w-0 flex-1">
          <img
            src={HOTLINK_LOGO_URL}
            alt="Campus Access Logo"
            className="h-8 w-auto object-contain flex-shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-lg text-[#00236f] tracking-tight truncate font-sans">
                Campus Flow
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-[#006c49]/10 text-[#006c49] text-[10px] font-mono font-semibold tracking-wider whitespace-nowrap">
                LIVE
              </span>
            </div>
            <span className="text-xs text-[#444651] truncate font-sans">
              ระบบเข้า-ออกมหาวิทยาลัย • Analytics History
            </span>
          </div>
        </div>

        {/* Right: Live Counter Indicator & Profile */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="hidden xs:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#eff4ff] border border-[#dce9ff]">
            <span className="w-2 h-2 rounded-full bg-[#006c49] animate-pulse"></span>
            <span className="text-[11px] font-mono text-[#006c49] font-medium whitespace-nowrap">
              กำลังตรวจนับ
            </span>
          </div>

          {/* Operator Avatar */}
          <div className="relative">
            <button
              id="profileBtn"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                if (onProfileClick) onProfileClick();
              }}
              className="w-8 h-8 rounded-full bg-[#00236f] flex items-center justify-center min-w-[32px] text-white hover:bg-[#1e3a8a] transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00236f]/30"
              title="ข้อมูลผู้ควบคุมระบบ"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </button>

            {/* Profile Dropdown */}
            {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-64 p-3 bg-white rounded-xl shadow-lg border border-[#e5eeff] text-left z-50">
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-[#eff4ff]">
                  <div className="w-9 h-9 rounded-full bg-[#00236f] text-white flex items-center justify-center font-bold text-sm">
                    ศส
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#0b1c30] truncate">ศูนย์ควบคุมจราจรกลาง</p>
                    <p className="text-[11px] text-[#757682] truncate">รปภ. และบริหารอาคารสถานที่</p>
                  </div>
                </div>
                <div className="pt-2 text-[11px] text-[#444651] space-y-1.5">
                  <div className="flex justify-between">
                    <span>สถานะระบบ:</span>
                    <span className="text-[#006c49] font-medium">ออนไลน์เชื่อมต่อครบ 4 ประตู</span>
                  </div>
                  <div className="flex justify-between">
                    <span>เซิร์ฟเวอร์ ALPR:</span>
                    <span className="text-[#006c49] font-medium">Latency 14ms</span>
                  </div>
                </div>
                <button
                  onClick={() => setShowProfileMenu(false)}
                  className="w-full mt-2.5 py-1 text-center text-xs text-[#00236f] font-medium bg-[#eff4ff] hover:bg-[#dce9ff] rounded-lg transition-colors"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
