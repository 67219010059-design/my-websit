import React from 'react';

export const AlertsView: React.FC = () => {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'คิวยาวสะสมบริเวณหน้าด่าน ประตู 1 พหลโยธิน',
      description: 'รถจักรยานยนต์หนาแน่นช่วงเวลา 08:00 - 08:30 น. ท้ายแถวยาวกระทบทางแยกสายหลัก แนะนำเปิดเลนสำรอง',
      time: '10 นาทีที่แล้ว',
      severity: 'high',
      icon: 'traffic',
    },
    {
      id: 2,
      type: 'speed',
      title: 'ตรวจจับยานพาหนะขับเร็วเกินกำหนด (42 กม./ชม.)',
      description: 'กล้องจับความเร็วถนนสาย 2 ตรวจพบรถเก๋งสีดำขับเกิน 30 กม./ชม. ในเขตสถานศึกษา บันทึกทะเบียนแล้ว',
      time: '25 นาทีที่แล้ว',
      severity: 'medium',
      icon: 'speed',
    },
    {
      id: 3,
      type: 'security',
      title: 'รถยนต์ไม่ลงทะเบียนผ่านประตู 3 วิภาวดี',
      description: 'รถยนต์ภายนอกเข้าโดยไม่ได้แลกบัตร รปภ. ได้ประสานงานให้ตรวจสอบบริเวณลานจอดรถส่วนกลาง 2',
      time: '42 นาทีที่แล้ว',
      severity: 'medium',
      icon: 'security',
    },
    {
      id: 4,
      type: 'system',
      title: 'ระบบไม้กั้นประตู 2 งามวงศ์วาน พร้อมทำงานปกติ',
      description: 'การทดสอบเซ็นเซอร์แม่เหล็กลูป (Loop Detector) สำเร็จ ค่าความแม่นยำ 99.9%',
      time: '1 ชั่วโมงที่แล้ว',
      severity: 'low',
      icon: 'check_circle',
    },
  ];

  return (
    <div className="flex flex-col gap-3 pb-6">
      {/* Alert Header Box */}
      <div className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ba1a1a] text-xl">
              notification_important
            </span>
            <h3 className="font-semibold text-sm text-[#0b1c30]">
              ระบบแจ้งเตือนความปลอดภัยและการจราจร
            </h3>
          </div>
          <span className="px-2 py-0.5 rounded-full bg-[#ba1a1a]/10 text-[#ba1a1a] text-[11px] font-mono font-bold">
            3 รายการเฝ้าระวัง
          </span>
        </div>
        <p className="text-xs text-[#444651]">
          แจ้งเตือนอัตโนมัติจากเซ็นเซอร์ตรวจจับการเคลื่อนไหว กล้องอ่านป้ายทะเบียน และเรดาร์ตรวจวัดความเร็ว
        </p>
      </div>

      {/* Alert Cards */}
      <div className="flex flex-col gap-2.5">
        {alerts.map((item) => {
          let badgeColor = 'bg-[#ba1a1a]/10 text-[#ba1a1a] border-[#ba1a1a]/20';
          let iconColor = 'text-[#ba1a1a]';

          if (item.severity === 'medium') {
            badgeColor = 'bg-amber-50 text-amber-800 border-amber-200';
            iconColor = 'text-amber-700';
          } else if (item.severity === 'low') {
            badgeColor = 'bg-[#006c49]/10 text-[#006c49] border-[#006c49]/20';
            iconColor = 'text-[#006c49]';
          }

          return (
            <div
              key={item.id}
              className="p-3.5 rounded-xl bg-white shadow-xs border border-[#e5eeff] flex flex-col gap-1.5"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className={`material-symbols-outlined ${iconColor} text-lg flex-shrink-0`}>
                    {item.icon}
                  </span>
                  <h4 className="font-semibold text-xs text-[#0b1c30] truncate">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-[#757682] flex-shrink-0 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <p className="text-xs text-[#444651] pl-6 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Emergency Hotline Contact Card */}
      <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dce9ff] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00236f] text-lg">
            call
          </span>
          <div>
            <p className="font-semibold text-[#00236f]">ศูนย์วิทยุ รปภ. มหาวิทยาลัย</p>
            <p className="text-[11px] text-[#757682]">โทรด่วนฉุกเฉิน 24 ชม. กด 02-942-8888</p>
          </div>
        </div>
        <a
          href="tel:029428888"
          className="px-3 py-1.5 rounded-lg bg-[#00236f] text-white font-mono text-xs font-semibold"
        >
          โทรออก
        </a>
      </div>
    </div>
  );
};
