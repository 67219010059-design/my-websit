/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ActiveTab, TimeRange } from './types';
import { mockAnalyticsByRange } from './data/mockData';
import { Header } from './components/Header';
import { DateFilterBar } from './components/DateFilterBar';
import { TrafficOverviewCard } from './components/TrafficOverviewCard';
import { PeakCards } from './components/PeakCards';
import { GateRankingSection } from './components/GateRankingSection';
import { DemographicsSection } from './components/DemographicsSection';
import { VehicleModalSection } from './components/VehicleModalSection';
import { AIRecommendationCard } from './components/AIRecommendationCard';
import { ExportReportsSection } from './components/ExportReportsSection';
import { BottomNav } from './components/BottomNav';
import { DatePickerModal } from './components/DatePickerModal';
import { LiveDashboardView } from './components/LiveDashboardView';
import { GateControlView } from './components/GateControlView';
import { AlertsView } from './components/AlertsView';

export default function App() {
  // Default range is '7days' as shown in the mockup: "18 พ.ย. 2567 (ช่วง 7 วันล่าสุด)"
  const [selectedRange, setSelectedRange] = useState<TimeRange>('7days');
  const [activeTab, setActiveTab] = useState<ActiveTab>('analytics');
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [customDateLabel, setCustomDateLabel] = useState<string | null>(null);

  // Retrieve current analytics data
  const currentData = mockAnalyticsByRange[selectedRange];

  const handleApplyCustomDate = (dateLabel: string) => {
    setCustomDateLabel(dateLabel);
    setSelectedRange('today'); // default to today's template for specific day
  };

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col antialiased selection:bg-[#dce1ff] selection:text-[#00236f]">
      {/* Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-[#f8f9ff]">
        <div className="max-w-md w-full mx-auto px-4 pt-2">
          {activeTab === 'analytics' && (
            <div className="flex flex-col w-full pb-6 space-y-4">
              {/* Interactive Date Filter Bar */}
              <DateFilterBar
                selectedRange={selectedRange}
                onSelectRange={(range) => {
                  setSelectedRange(range);
                  setCustomDateLabel(null);
                }}
                onOpenDatePicker={() => setIsDatePickerOpen(true)}
                liveStatusText={
                  customDateLabel
                    ? `ข้อมูลสรุปวันที่: ${customDateLabel}`
                    : currentData.liveStatusText
                }
                uptimePercent={currentData.uptimePercent}
              />

              {/* High-Level Summary Metrics (Bento KPI Grid) */}
              <section className="grid grid-cols-2 gap-2.5">
                {/* Total Turnstile Volume (Full Width Accent) */}
                <TrafficOverviewCard
                  totalVolume={currentData.totalVolume}
                  growthPercent={currentData.growthPercent}
                  growthLabel={currentData.growthLabel}
                  peakHourDescription={currentData.peakHourDescription}
                  peakHourTime={currentData.peakHourTime}
                  hourlyData={currentData.hourlyData}
                />

                {/* Peak Inflow, Peak Outflow, and Dwell Time */}
                <PeakCards
                  peakInflow={currentData.peakInflow}
                  peakOutflow={currentData.peakOutflow}
                  dwellTime={currentData.dwellTime}
                />
              </section>

              {/* Detailed Gate Ranking Table / List */}
              <GateRankingSection gates={currentData.gates} />

              {/* Demographics & Vehicle Split Section */}
              <section className="grid grid-cols-1 gap-3">
                <DemographicsSection demographics={currentData.demographics} />
                <VehicleModalSection vehicleModals={currentData.vehicleModals} />
              </section>

              {/* Automated AI Insight / Micro delight pill */}
              <AIRecommendationCard recommendation={currentData.aiRecommendation} />

              {/* Download & Export Section */}
              <ExportReportsSection data={currentData} />
            </div>
          )}

          {activeTab === 'dashboard' && (
            <div className="pt-2">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h2 className="font-semibold text-lg text-[#0b1c30]">แดชบอร์ดสดหน้าด่าน</h2>
                  <p className="text-xs text-[#757682]">ติดตามยานพาหนะผ่านเข้า-ออกตามเวลาจริง</p>
                </div>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className="text-xs font-mono text-[#00236f] bg-[#eff4ff] px-2.5 py-1 rounded-full font-medium"
                >
                  ← กลับสถิติ
                </button>
              </div>
              <LiveDashboardView />
            </div>
          )}

          {activeTab === 'gates' && (
            <div className="pt-2">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h2 className="font-semibold text-lg text-[#0b1c30]">ระบบควบคุมประตูตรวจ</h2>
                  <p className="text-xs text-[#757682]">สถานะไม้กั้นและเลนจราจร 4 ประตูหลัก</p>
                </div>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className="text-xs font-mono text-[#00236f] bg-[#eff4ff] px-2.5 py-1 rounded-full font-medium"
                >
                  ← กลับสถิติ
                </button>
              </div>
              <GateControlView />
            </div>
          )}

          {activeTab === 'alerts' && (
            <div className="pt-2">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h2 className="font-semibold text-lg text-[#0b1c30]">การแจ้งเตือนฉุกเฉิน</h2>
                  <p className="text-xs text-[#757682]">ระบบตรวจจับความผิดปกติและความปลอดภัย</p>
                </div>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className="text-xs font-mono text-[#00236f] bg-[#eff4ff] px-2.5 py-1 rounded-full font-medium"
                >
                  ← กลับสถิติ
                </button>
              </div>
              <AlertsView />
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNav activeTab={activeTab} onTabChange={(tab) => setActiveTab(tab)} />

      {/* Custom Date Picker Modal */}
      <DatePickerModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        onApplyDate={handleApplyCustomDate}
      />
    </div>
  );
}
