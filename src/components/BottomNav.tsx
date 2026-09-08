import React from 'react';
import { ActiveTab } from '../types';

interface BottomNavProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'dashboard' as ActiveTab,
      label: 'แดชบอร์ดสด',
      icon: 'dashboard',
    },
    {
      id: 'gates' as ActiveTab,
      label: 'ประตูตรวจ',
      icon: 'sensor_door',
    },
    {
      id: 'analytics' as ActiveTab,
      label: 'สถิติย้อนหลัง',
      icon: 'monitoring',
    },
    {
      id: 'alerts' as ActiveTab,
      label: 'แจ้งเตือนฉุกเฉิน',
      icon: 'warning',
      hasBadge: true,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 w-full z-50 pb-[env(safe-area-inset-bottom,0px)] bg-[#f8f9ff]/85 backdrop-blur-xl shadow-[0_-2px_10px_rgba(0,0,0,0.03)] border-t border-[#e5eeff]"
      data-active-classes="text-[#00236f] font-semibold"
    >
      <div className="max-w-md mx-auto flex justify-around items-center h-16 px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[44px] min-h-[44px] py-1 px-1 transition-all flex-1 cursor-pointer relative ${
                isActive
                  ? 'text-[#00236f] font-semibold scale-105'
                  : 'text-[#444651] hover:text-[#0b1c30] font-normal'
              }`}
            >
              <div className="relative">
                <span className="material-symbols-outlined text-[22px]">
                  {tab.icon}
                </span>
                {tab.hasBadge && (
                  <span className="absolute -top-0.5 -right-1 w-2 h-2 bg-[#ba1a1a] rounded-full"></span>
                )}
              </div>
              <span className="text-[10px] font-mono mt-0.5 text-center truncate tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
