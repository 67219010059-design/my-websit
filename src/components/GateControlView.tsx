import React, { useState } from 'react';

export const GateControlView: React.FC = () => {
  const [gatesState, setGatesState] = useState([
    { id: 1, name: 'ประตู 1 พหลโยธิน', status: 'เปิดปกติ', barrierOpen: false, lanes: 4, openLanes: 3 },
    { id: 3, name: 'ประตู 3 วิภาวดีรังสิต', status: 'เปิดปกติ', barrierOpen: false, lanes: 2, openLanes: 2 },
    { id: 2, name: 'ประตู 2 งามวงศ์วาน', status: 'เปิดปกติ', barrierOpen: false, lanes: 2, openLanes: 2 },
    { id: 4, name: 'ประตู 4 ประเสริฐมนูกิจ', status: 'เปิดปกติ', barrierOpen: false, lanes: 2, openLanes: 2 },
  ]);

  const [notification, setNotification] = useState<string | null>(null);

  const toggleBarrier = (id: number) => {
    setGatesState((prev) =>
      prev.map((g) => {
        if (g.id === id) {
          const newState = !g.barrierOpen;
          setNotification(`สั่งการ ${g.name}: ${newState ? 'ยกไม้กั้นค้าง' : 'คืนระบบไม้กั้นอัตโนมัติ'}`);
          setTimeout(() => setNotification(null), 3000);
          return { ...g, barrierOpen: newState };
        }
        return g;
      })
    );
  };

  const handleEmergencyOpenAll = () => {
    setGatesState((prev) => prev.map((g) => ({ ...g, barrierOpen: true })));
    setNotification('⚠️ สั่งการฉุกเฉิน: ยกไม้กั้นค้างทุกประตูเพื่อการระบายรถฉุกเฉิน');
    setTimeout(() => setNotification(null), 4000);
  };

  return (
    <div className="flex flex-col gap-3 pb-6">
      {/* Emergency Control Header Card */}
      <div className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00236f] text-xl">
              tune
            </span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">
              ระบบควบคุมไม้กั้นและช่องจราจรหน้าด่าน
            </h3>
          </div>
        </div>

        <p className="text-xs text-[#444651]">
          ผู้ควบคุมสามารถสั่งการยกไม้กั้นอัตโนมัติหรือเปิดเลนสำรองเพื่อระบายแถวคอยช่วงชั่วโมงเร่งด่วน
        </p>

        <button
          onClick={handleEmergencyOpenAll}
          className="w-full py-2.5 px-3 rounded-lg bg-[#ba1a1a] hover:bg-[#93000a] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">emergency</span>
          สั่งการยกไม้กั้นค้างทุกจุดฉุกเฉิน (Emergency Open)
        </button>

        {notification && (
          <div className="p-2.5 rounded-lg bg-[#eff4ff] text-[#00236f] text-xs font-medium flex items-center gap-2 border border-[#dce9ff] animate-fadeIn">
            <span className="material-symbols-outlined text-[16px] text-[#006c49]">info</span>
            <span>{notification}</span>
          </div>
        )}
      </div>

      {/* Gate Controls Grid */}
      <div className="flex flex-col gap-2.5">
        {gatesState.map((gate) => (
          <div
            key={gate.id}
            className="p-3.5 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-2.5"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-sm text-[#0b1c30]">{gate.name}</h4>
                <span className="text-[11px] text-[#757682]">
                  เปิดใช้งาน {gate.openLanes} จาก {gate.lanes} เลนจราจร
                </span>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full font-mono text-[11px] font-semibold ${
                  gate.barrierOpen
                    ? 'bg-[#006c49]/15 text-[#006c49]'
                    : 'bg-[#eff4ff] text-[#00236f]'
                }`}
              >
                {gate.barrierOpen ? 'ไม้กั้นยกค้าง' : 'ระบบอัตโนมัติ'}
              </span>
            </div>

            <div className="flex items-center gap-2 pt-1 border-t border-[#f0f4ff]">
              <button
                onClick={() => toggleBarrier(gate.id)}
                className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  gate.barrierOpen
                    ? 'bg-[#eff4ff] text-[#00236f] hover:bg-[#dce9ff]'
                    : 'bg-[#00236f] text-white hover:bg-[#1e3a8a]'
                }`}
              >
                {gate.barrierOpen ? 'คืนสู่ระบบอัตโนมัติ' : 'ยกไม้กั้นเปิดระบายรถ'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
