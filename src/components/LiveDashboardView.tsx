import React, { useState, useEffect } from 'react';

export const LiveDashboardView: React.FC = () => {
  const [liveCount, setLiveCount] = useState(38940);
  const [recentVehicles, setRecentVehicles] = useState([
    { id: 1, plate: '1กข 4528 กทม.', type: 'รถยนต์ส่วนบุคคล', gate: 'ประตู 1 พหลโยธิน', time: 'เมื่อสักครู่', status: 'RFID ผ่าน' },
    { id: 2, plate: '3กง 9912 นนทบุรี', type: 'รถจักรยานยนต์', gate: 'ประตู 3 วิภาวดี', time: '12 วินาทีที่แล้ว', status: 'ALPR ตรวจจับ' },
    { id: 3, plate: 'ขข 7140 ปทุมธานี', type: 'รถขนส่งพัสดุ', gate: 'ประตู 4 ประเสริฐมนูกิจ', time: '35 วินาทีที่แล้ว', status: 'แลกบัตร รปภ.' },
    { id: 4, plate: '5กศ 1109 กทม.', type: 'รถยนต์บุคลากร', gate: 'ประตู 2 งามวงศ์วาน', time: '1 นาทีที่แล้ว', status: 'Smart Pass' },
  ]);

  // Simulate subtle real-time count increments
  useEffect(() => {
    const timer = setInterval(() => {
      setLiveCount((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-3.5 pb-6">
      {/* Live Stream Status Card */}
      <div className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#006c49] animate-ping"></span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">สถานะการตรวจนับแบบเรียลไทม์</h3>
          </div>
          <span className="text-[11px] font-mono text-[#006c49] bg-[#006c49]/10 px-2 py-0.5 rounded font-semibold">
            กล้อง ALPR 12 จุด ออนไลน์
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="p-3 bg-[#eff4ff] rounded-xl flex flex-col">
            <span className="text-xs text-[#444651]">ยอดผ่านสะสมวันนี้</span>
            <span className="font-mono text-2xl font-bold text-[#00236f] mt-1">
              {liveCount.toLocaleString()} <span className="text-xs font-normal">คัน</span>
            </span>
          </div>
          <div className="p-3 bg-[#eff4ff] rounded-xl flex flex-col">
            <span className="text-xs text-[#444651]">อัตราการไหลเข้าปัจจุบัน</span>
            <span className="font-mono text-2xl font-bold text-[#006c49] mt-1">
              42 <span className="text-xs font-normal">คัน/นาที</span>
            </span>
          </div>
        </div>
      </div>

      {/* Live Camera Gate Feeds Simulation */}
      <div className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00236f] text-[20px]">videocam</span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">ภาพสแกนกล้อง ALPR หน้าด่าน</h3>
          </div>
          <span className="text-[11px] font-mono text-[#757682]">มุมกล้อง HD</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="relative aspect-video bg-[#0b1c30] rounded-lg overflow-hidden flex items-center justify-center border border-[#dce9ff]">
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]"></span> ประตู 1 พหลโยธิน (Lane 1)
            </div>
            <span className="material-symbols-outlined text-white/30 text-3xl">directions_car</span>
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.2 rounded bg-[#00236f]/80 text-[9px] font-mono text-white">
              ป้าย: 1กข 4528
            </div>
          </div>
          <div className="relative aspect-video bg-[#0b1c30] rounded-lg overflow-hidden flex items-center justify-center border border-[#dce9ff]">
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-black/60 text-white text-[9px] font-mono flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006c49]"></span> ประตู 3 วิภาวดี (Lane 2)
            </div>
            <span className="material-symbols-outlined text-white/30 text-3xl">two_wheeler</span>
            <div className="absolute bottom-1.5 right-1.5 px-1.5 py-0.2 rounded bg-[#00236f]/80 text-[9px] font-mono text-white">
              ป้าย: 3กง 9912
            </div>
          </div>
        </div>
      </div>

      {/* Live Vehicle Log Table */}
      <div className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00236f] text-[20px]">history</span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">บันทึกการผ่านเข้า-ออกล่าสุด</h3>
          </div>
          <span className="text-[11px] font-mono text-[#006c49] animate-pulse font-medium">Real-time Stream</span>
        </div>

        <div className="space-y-1.5">
          {recentVehicles.map((v) => (
            <div
              key={v.id}
              className="p-2.5 rounded-lg bg-[#eff4ff] flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#00236f] bg-white px-2 py-0.5 rounded border border-[#dce9ff]">
                  {v.plate}
                </span>
                <div className="flex flex-col">
                  <span className="font-medium text-[#0b1c30]">{v.gate}</span>
                  <span className="text-[10px] text-[#757682]">{v.type} • {v.time}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#006c49]/10 text-[#006c49] font-mono text-[10px] font-semibold">
                {v.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
