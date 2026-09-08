import { AnalyticsData, TimeRange } from '../types';

export const mockAnalyticsByRange: Record<TimeRange, AnalyticsData> = {
  '7days': {
    timeRange: '7days',
    displayPeriodLabel: '7 วันล่าสุด',
    liveStatusText: 'ข้อมูลอัปเดตแบบเรียลไทม์: 18 พ.ย. 2567 (ช่วง 7 วันล่าสุด)',
    uptimePercent: 'ปกติ 99.8%',
    totalVolume: 38940,
    growthPercent: 12,
    growthLabel: 'เทียบกับสัปดาห์ก่อนหน้า',
    peakHourDescription: 'แนวโน้มชั่วโมงเร่งด่วน (06:00 - 20:00 น.)',
    peakHourTime: 'Peak 08:00',
    hourlyData: [
      { hour: '06:00', label: '06:00', count: 1200, inflow: 950, outflow: 250, heightPercent: 20 },
      { hour: '07:00', label: '07:00', count: 2450, inflow: 2050, outflow: 400, heightPercent: 35 },
      { hour: '08:00', label: '08:00', count: 4800, inflow: 3950, outflow: 850, heightPercent: 65, isMorning: true },
      { hour: '09:00', label: '09:00', count: 7200, inflow: 5800, outflow: 1400, heightPercent: 100, isPeak: true, isMorning: true },
      { hour: '11:00', label: '11:00', count: 3600, inflow: 2000, outflow: 1600, heightPercent: 50 },
      { hour: '13:00', label: '13:00', count: 2900, inflow: 1400, outflow: 1500, heightPercent: 40 },
      { hour: '14:00', label: '14:00', count: 2750, inflow: 1300, outflow: 1450, heightPercent: 38 },
      { hour: '15:00', label: '15:00', count: 3200, inflow: 1500, outflow: 1700, heightPercent: 45 },
      { hour: '16:00', label: '16:00', count: 3950, inflow: 1250, outflow: 2700, heightPercent: 55, isEvening: true },
      { hour: '17:00', label: '17:00', count: 6400, inflow: 1400, outflow: 5000, heightPercent: 88, isEvening: true },
      { hour: '18:00', label: '18:00', count: 3250, inflow: 850, outflow: 2400, heightPercent: 45 },
      { hour: '20:00', label: '20:00', count: 1800, inflow: 450, outflow: 1350, heightPercent: 25 },
    ],
    peakInflow: {
      timeRange: '07:45-08:30',
      rateText: '3,820 คน/ชม.',
      gateDescription: 'ประตู 1 พหลโยธิน หนาแน่น',
    },
    peakOutflow: {
      timeRange: '16:30-17:30',
      rateText: '3,150 คน/ชม.',
      gateDescription: 'ประตู 3 วิภาวดี ติดขัดปานกลาง',
    },
    dwellTime: {
      averageHours: 5.4,
      unitLabel: 'ชั่วโมง / คัน-คน',
      comparisonText: '+18 นาที vs ปกติ',
    },
    gates: [
      {
        id: 1,
        name: 'ประตู 1 พหลโยธิน',
        tag: 'หลัก',
        lanesDescription: 'ช่องทางรถยนต์ 3 เลน • ช่องคนเดิน 4 บาน',
        totalVolume: 14280,
        percentage: 36.7,
        inflow: 8854,
        outflow: 5426,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 62,
        outflowPercent: 38,
        lanes: [
          { laneId: 1, type: 'car', name: 'Lane 1 (RFID นักศึกษา/บุคลากร)', flowRate: 85, isOpen: true },
          { laneId: 2, type: 'car', name: 'Lane 2 (บุคคลภายนอก/แลกบัตร)', flowRate: 60, isOpen: true },
          { laneId: 3, type: 'motorcycle', name: 'Lane 3 (ช่องรถจักรยานยนต์ด่วน)', flowRate: 92, isOpen: true },
          { laneId: 4, type: 'car', name: 'Lane 4 (เลนสำรองเร่งด่วน)', flowRate: 0, isOpen: false },
        ]
      },
      {
        id: 3,
        name: 'ประตู 3 วิภาวดีรังสิต',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • ช่องคนเดิน 2 บาน',
        totalVolume: 11450,
        percentage: 29.4,
        inflow: 5496,
        outflow: 5954,
        statusText: 'มีชะลอตัวช่วงเย็น',
        statusType: 'slow',
        inflowPercent: 48,
        outflowPercent: 52,
        lanes: [
          { laneId: 1, type: 'car', name: 'Lane 1 (เข้า-ออกหลัก)', flowRate: 68, isOpen: true },
          { laneId: 2, type: 'motorcycle', name: 'Lane 2 (สองล้อ/รถบริการ)', flowRate: 74, isOpen: true },
        ]
      },
      {
        id: 2,
        name: 'ประตู 2 งามวงศ์วาน',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • รถจักรยานยนต์แยก',
        totalVolume: 8620,
        percentage: 22.1,
        inflow: 4654,
        outflow: 3966,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 54,
        outflowPercent: 46,
        lanes: [
          { laneId: 1, type: 'car', name: 'Lane 1 (ผ่านตลอด RFID)', flowRate: 88, isOpen: true },
          { laneId: 2, type: 'car', name: 'Lane 2 (รถส่งของ/ทั่วไป)', flowRate: 70, isOpen: true },
        ]
      },
      {
        id: 4,
        name: 'ประตู 4 ประเสริฐมนูกิจ',
        lanesDescription: 'เน้นรถส่งของ / บุคลากรหอพัก',
        totalVolume: 4590,
        percentage: 11.8,
        inflow: 2341,
        outflow: 2249,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 51,
        outflowPercent: 49,
        lanes: [
          { laneId: 1, type: 'car', name: 'Lane 1 (รถบรรทุกและขนส่ง)', flowRate: 75, isOpen: true },
          { laneId: 2, type: 'motorcycle', name: 'Lane 2 (ทางเข้าหอพัก)', flowRate: 80, isOpen: true },
        ]
      }
    ],
    demographics: [
      {
        category: 'นักศึกษา',
        percentage: 68,
        count: 26479,
        colorClass: 'bg-[#00236f] text-[#00236f]',
        indicatorColor: '#00236f'
      },
      {
        category: 'บุคลากร',
        percentage: 18,
        count: 7009,
        colorClass: 'bg-[#4059aa] text-[#0b1c30]',
        indicatorColor: '#4059aa'
      },
      {
        category: 'บุคคลภายนอก',
        percentage: 14,
        count: 5452,
        colorClass: 'bg-[#006c49] text-[#006c49]',
        indicatorColor: '#006c49'
      }
    ],
    vehicleModals: [
      {
        type: 'รถจักรยานยนต์',
        icon: 'two_wheeler',
        percentage: 48,
        count: 18690,
        colorClass: 'text-[#00236f]',
        accentClass: 'bg-[#00236f]'
      },
      {
        type: 'รถยนต์ส่วนบุคคล',
        icon: 'directions_car',
        percentage: 34,
        count: 13240,
        colorClass: 'text-[#006c49]',
        accentClass: 'bg-[#006c49]'
      },
      {
        type: 'เดินเท้า / รถราง',
        icon: 'directions_walk',
        percentage: 18,
        count: 7010,
        colorClass: 'text-[#0b1c30]',
        accentClass: 'bg-[#4059aa]'
      }
    ],
    aiRecommendation: {
      title: 'ข้อเสนอแนะระบบจัดระเบียบจราจร',
      content: 'พบการกระจุกตัวของรถจักรยานยนต์บริเวณประตู 1 ช่วงเวลา 08:00 - 08:20 น. แนะนำเปิดเลนสำรองพิเศษ (Lane 4) ชั่วคราวเพื่อลดคิวยาวสะสมบนถนนสายหลัก',
      actionLabel: 'เปิดเลน Lane 4 ชั่วคราว'
    }
  },
  'today': {
    timeRange: 'today',
    displayPeriodLabel: 'วันนี้',
    liveStatusText: 'ข้อมูลอัปเดตแบบเรียลไทม์: วันนี้ (18 พ.ย. 2567)',
    uptimePercent: 'ปกติ 99.9%',
    totalVolume: 12450,
    growthPercent: 8,
    growthLabel: 'เทียบกับช่วงเวลาเดียวกันเมื่อวาน',
    peakHourDescription: 'แนวโน้มการเข้า-ออกรายชั่วโมงวันนี้',
    peakHourTime: 'Peak 08:15',
    hourlyData: [
      { hour: '06:00', label: '06:00', count: 420, inflow: 380, outflow: 40, heightPercent: 25 },
      { hour: '07:00', label: '07:00', count: 980, inflow: 880, outflow: 100, heightPercent: 48 },
      { hour: '08:00', label: '08:00', count: 2150, inflow: 1850, outflow: 300, heightPercent: 95, isPeak: true, isMorning: true },
      { hour: '09:00', label: '09:00', count: 1850, inflow: 1400, outflow: 450, heightPercent: 82, isMorning: true },
      { hour: '11:00', label: '11:00', count: 1100, inflow: 650, outflow: 450, heightPercent: 52 },
      { hour: '13:00', label: '13:00', count: 950, inflow: 450, outflow: 500, heightPercent: 44 },
      { hour: '14:00', label: '14:00', count: 890, inflow: 410, outflow: 480, heightPercent: 42 },
      { hour: '15:00', label: '15:00', count: 1080, inflow: 420, outflow: 660, heightPercent: 50 },
      { hour: '16:00', label: '16:00', count: 1350, inflow: 380, outflow: 970, heightPercent: 62, isEvening: true },
      { hour: '17:00', label: '17:00', count: 1980, inflow: 410, outflow: 1570, heightPercent: 90, isEvening: true },
      { hour: '18:00', label: '18:00', count: 1120, inflow: 250, outflow: 870, heightPercent: 54 },
      { hour: '20:00', label: '20:00', count: 620, inflow: 120, outflow: 500, heightPercent: 30 },
    ],
    peakInflow: {
      timeRange: '08:00-08:45',
      rateText: '1,950 คน/ชม.',
      gateDescription: 'ประตู 1 พหลโยธิน เฝ้าระวัง',
    },
    peakOutflow: {
      timeRange: '17:00-17:45',
      rateText: '1,720 คน/ชม.',
      gateDescription: 'ประตู 3 วิภาวดี คล่องตัวดี',
    },
    dwellTime: {
      averageHours: 4.8,
      unitLabel: 'ชั่วโมง / คัน-คน',
      comparisonText: '-12 นาที vs สัปดาห์ก่อน',
    },
    gates: [
      {
        id: 1,
        name: 'ประตู 1 พหลโยธิน',
        tag: 'หลัก',
        lanesDescription: 'ช่องทางรถยนต์ 3 เลน • ช่องคนเดิน 4 บาน',
        totalVolume: 4620,
        percentage: 37.1,
        inflow: 2980,
        outflow: 1640,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 65,
        outflowPercent: 35
      },
      {
        id: 3,
        name: 'ประตู 3 วิภาวดีรังสิต',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • ช่องคนเดิน 2 บาน',
        totalVolume: 3580,
        percentage: 28.8,
        inflow: 1720,
        outflow: 1860,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 48,
        outflowPercent: 52
      },
      {
        id: 2,
        name: 'ประตู 2 งามวงศ์วาน',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • รถจักรยานยนต์แยก',
        totalVolume: 2790,
        percentage: 22.4,
        inflow: 1540,
        outflow: 1250,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 55,
        outflowPercent: 45
      },
      {
        id: 4,
        name: 'ประตู 4 ประเสริฐมนูกิจ',
        lanesDescription: 'เน้นรถส่งของ / บุคลากรหอพัก',
        totalVolume: 1460,
        percentage: 11.7,
        inflow: 740,
        outflow: 720,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 51,
        outflowPercent: 49
      }
    ],
    demographics: [
      { category: 'นักศึกษา', percentage: 70, count: 8715, colorClass: 'bg-[#00236f] text-[#00236f]', indicatorColor: '#00236f' },
      { category: 'บุคลากร', percentage: 17, count: 2116, colorClass: 'bg-[#4059aa] text-[#0b1c30]', indicatorColor: '#4059aa' },
      { category: 'บุคคลภายนอก', percentage: 13, count: 1619, colorClass: 'bg-[#006c49] text-[#006c49]', indicatorColor: '#006c49' }
    ],
    vehicleModals: [
      { type: 'รถจักรยานยนต์', icon: 'two_wheeler', percentage: 50, count: 6225, colorClass: 'text-[#00236f]', accentClass: 'bg-[#00236f]' },
      { type: 'รถยนต์ส่วนบุคคล', icon: 'directions_car', percentage: 33, count: 4108, colorClass: 'text-[#006c49]', accentClass: 'bg-[#006c49]' },
      { type: 'เดินเท้า / รถราง', icon: 'directions_walk', percentage: 17, count: 2117, colorClass: 'text-[#0b1c30]', accentClass: 'bg-[#4059aa]' }
    ],
    aiRecommendation: {
      title: 'ข้อเสนอแนะระบบจัดระเบียบจราจร',
      content: 'การจราจรโดยรวมในวันนี้มีความคล่องตัวสูง แนะนำเปิดระบบช่องทางด่วน Smart Pass ที่ประตู 1 และ 2 ตลอดช่วงบ่าย',
      actionLabel: 'ตรวจเช็กสถานะเลน'
    }
  },
  'yesterday': {
    timeRange: 'yesterday',
    displayPeriodLabel: 'เมื่อวาน',
    liveStatusText: 'ข้อมูลสรุปปิดยอด: เมื่อวาน (17 พ.ย. 2567)',
    uptimePercent: 'ปกติ 99.7%',
    totalVolume: 11980,
    growthPercent: 5,
    growthLabel: 'เทียบกับวันเดียวกันสัปดาห์ก่อน',
    peakHourDescription: 'แนวโน้มชั่วโมงเร่งด่วนเมื่อวาน',
    peakHourTime: 'Peak 08:30',
    hourlyData: [
      { hour: '06:00', label: '06:00', count: 390, inflow: 340, outflow: 50, heightPercent: 22 },
      { hour: '07:00', label: '07:00', count: 910, inflow: 790, outflow: 120, heightPercent: 44 },
      { hour: '08:00', label: '08:00', count: 2080, inflow: 1760, outflow: 320, heightPercent: 92, isPeak: true, isMorning: true },
      { hour: '09:00', label: '09:00', count: 1720, inflow: 1300, outflow: 420, heightPercent: 78, isMorning: true },
      { hour: '11:00', label: '11:00', count: 1050, inflow: 600, outflow: 450, heightPercent: 50 },
      { hour: '13:00', label: '13:00', count: 910, inflow: 420, outflow: 490, heightPercent: 42 },
      { hour: '14:00', label: '14:00', count: 870, inflow: 400, outflow: 470, heightPercent: 40 },
      { hour: '15:00', label: '15:00', count: 1040, inflow: 410, outflow: 630, heightPercent: 48 },
      { hour: '16:00', label: '16:00', count: 1420, inflow: 410, outflow: 1010, heightPercent: 65, isEvening: true },
      { hour: '17:00', label: '17:00', count: 1890, inflow: 390, outflow: 1500, heightPercent: 86, isEvening: true },
      { hour: '18:00', label: '18:00', count: 1080, inflow: 240, outflow: 840, heightPercent: 52 },
      { hour: '20:00', label: '20:00', count: 590, inflow: 110, outflow: 480, heightPercent: 28 },
    ],
    peakInflow: {
      timeRange: '08:00-08:45',
      rateText: '1,840 คน/ชม.',
      gateDescription: 'ประตู 1 พหลโยธิน หนาแน่นปานกลาง',
    },
    peakOutflow: {
      timeRange: '16:45-17:30',
      rateText: '1,650 คน/ชม.',
      gateDescription: 'ประตู 3 วิภาวดี เคลื่อนตัวช้า',
    },
    dwellTime: {
      averageHours: 5.1,
      unitLabel: 'ชั่วโมง / คัน-คน',
      comparisonText: '+6 นาที vs ปกติ',
    },
    gates: [
      {
        id: 1,
        name: 'ประตู 1 พหลโยธิน',
        tag: 'หลัก',
        lanesDescription: 'ช่องทางรถยนต์ 3 เลน • ช่องคนเดิน 4 บาน',
        totalVolume: 4410,
        percentage: 36.8,
        inflow: 2810,
        outflow: 1600,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 64,
        outflowPercent: 36
      },
      {
        id: 3,
        name: 'ประตู 3 วิภาวดีรังสิต',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • ช่องคนเดิน 2 บาน',
        totalVolume: 3490,
        percentage: 29.1,
        inflow: 1680,
        outflow: 1810,
        statusText: 'มีชะลอตัวช่วงเย็น',
        statusType: 'slow',
        inflowPercent: 48,
        outflowPercent: 52
      },
      {
        id: 2,
        name: 'ประตู 2 งามวงศ์วาน',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • รถจักรยานยนต์แยก',
        totalVolume: 2660,
        percentage: 22.2,
        inflow: 1450,
        outflow: 1210,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 55,
        outflowPercent: 45
      },
      {
        id: 4,
        name: 'ประตู 4 ประเสริฐมนูกิจ',
        lanesDescription: 'เน้นรถส่งของ / บุคลากรหอพัก',
        totalVolume: 1420,
        percentage: 11.9,
        inflow: 710,
        outflow: 710,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 50,
        outflowPercent: 50
      }
    ],
    demographics: [
      { category: 'นักศึกษา', percentage: 67, count: 8026, colorClass: 'bg-[#00236f] text-[#00236f]', indicatorColor: '#00236f' },
      { category: 'บุคลากร', percentage: 19, count: 2276, colorClass: 'bg-[#4059aa] text-[#0b1c30]', indicatorColor: '#4059aa' },
      { category: 'บุคคลภายนอก', percentage: 14, count: 1678, colorClass: 'bg-[#006c49] text-[#006c49]', indicatorColor: '#006c49' }
    ],
    vehicleModals: [
      { type: 'รถจักรยานยนต์', icon: 'two_wheeler', percentage: 49, count: 5870, colorClass: 'text-[#00236f]', accentClass: 'bg-[#00236f]' },
      { type: 'รถยนต์ส่วนบุคคล', icon: 'directions_car', percentage: 33, count: 3953, colorClass: 'text-[#006c49]', accentClass: 'bg-[#006c49]' },
      { type: 'เดินเท้า / รถราง', icon: 'directions_walk', percentage: 18, count: 2157, colorClass: 'text-[#0b1c30]', accentClass: 'bg-[#4059aa]' }
    ],
    aiRecommendation: {
      title: 'ข้อเสนอแนะระบบจัดระเบียบจราจร',
      content: 'ช่วงเย็นมีฝนตกปรอยๆ ส่งผลให้เวลาพำนักในพื้นที่เฉลี่ยนานขึ้น 6 นาทีและมีการกระจุกตัวที่ประตู 3',
      actionLabel: 'ดูประวัติจราจร'
    }
  },
  'month': {
    timeRange: 'month',
    displayPeriodLabel: 'เดือนนี้',
    liveStatusText: 'ข้อมูลสะสมประจำเดือน: พฤศจิกายน 2567',
    uptimePercent: 'ปกติ 99.8%',
    totalVolume: 154200,
    growthPercent: 14,
    growthLabel: 'เทียบกับเดือนก่อนหน้า',
    peakHourDescription: 'แนวโน้มเฉลี่ยชั่วโมงเร่งด่วนประจำเดือน',
    peakHourTime: 'Peak 08:00',
    hourlyData: [
      { hour: '06:00', label: '06:00', count: 5100, inflow: 4200, outflow: 900, heightPercent: 22 },
      { hour: '07:00', label: '07:00', count: 11200, inflow: 9500, outflow: 1700, heightPercent: 42 },
      { hour: '08:00', label: '08:00', count: 24500, inflow: 20800, outflow: 3700, heightPercent: 88, isMorning: true },
      { hour: '09:00', label: '09:00', count: 28900, inflow: 23500, outflow: 5400, heightPercent: 100, isPeak: true, isMorning: true },
      { hour: '11:00', label: '11:00', count: 14200, inflow: 8100, outflow: 6100, heightPercent: 52 },
      { hour: '13:00', label: '13:00', count: 11800, inflow: 5800, outflow: 6000, heightPercent: 44 },
      { hour: '14:00', label: '14:00', count: 11200, inflow: 5300, outflow: 5900, heightPercent: 41 },
      { hour: '15:00', label: '15:00', count: 13500, inflow: 6100, outflow: 7400, heightPercent: 48 },
      { hour: '16:00', label: '16:00', count: 16900, inflow: 5300, outflow: 11600, heightPercent: 60, isEvening: true },
      { hour: '17:00', label: '17:00', count: 25400, inflow: 5600, outflow: 19800, heightPercent: 92, isEvening: true },
      { hour: '18:00', label: '18:00', count: 13800, inflow: 3500, outflow: 10300, heightPercent: 50 },
      { hour: '20:00', label: '20:00', count: 7400, inflow: 1800, outflow: 5600, heightPercent: 28 },
    ],
    peakInflow: {
      timeRange: '07:30-08:30',
      rateText: '4,100 คน/ชม.',
      gateDescription: 'ประตู 1 พหลโยธิน หนาแน่นสูง',
    },
    peakOutflow: {
      timeRange: '16:30-17:30',
      rateText: '3,450 คน/ชม.',
      gateDescription: 'ประตู 3 วิภาวดี ชะลอตัวบ่อยครั้ง',
    },
    dwellTime: {
      averageHours: 5.6,
      unitLabel: 'ชั่วโมง / คัน-คน',
      comparisonText: '+24 นาที vs เดือนก่อน',
    },
    gates: [
      {
        id: 1,
        name: 'ประตู 1 พหลโยธิน',
        tag: 'หลัก',
        lanesDescription: 'ช่องทางรถยนต์ 3 เลน • ช่องคนเดิน 4 บาน',
        totalVolume: 56750,
        percentage: 36.8,
        inflow: 35185,
        outflow: 21565,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 62,
        outflowPercent: 38
      },
      {
        id: 3,
        name: 'ประตู 3 วิภาวดีรังสิต',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • ช่องคนเดิน 2 บาน',
        totalVolume: 45180,
        percentage: 29.3,
        inflow: 21686,
        outflow: 23494,
        statusText: 'มีชะลอตัวช่วงเย็น',
        statusType: 'slow',
        inflowPercent: 48,
        outflowPercent: 52
      },
      {
        id: 2,
        name: 'ประตู 2 งามวงศ์วาน',
        lanesDescription: 'ช่องทางรถยนต์ 2 เลน • รถจักรยานยนต์แยก',
        totalVolume: 34230,
        percentage: 22.2,
        inflow: 18484,
        outflow: 15746,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 54,
        outflowPercent: 46
      },
      {
        id: 4,
        name: 'ประตู 4 ประเสริฐมนูกิจ',
        lanesDescription: 'เน้นรถส่งของ / บุคลากรหอพัก',
        totalVolume: 18040,
        percentage: 11.7,
        inflow: 9200,
        outflow: 8840,
        statusText: 'โฟลว์คล่องตัว',
        statusType: 'smooth',
        inflowPercent: 51,
        outflowPercent: 49
      }
    ],
    demographics: [
      { category: 'นักศึกษา', percentage: 69, count: 106398, colorClass: 'bg-[#00236f] text-[#00236f]', indicatorColor: '#00236f' },
      { category: 'บุคลากร', percentage: 18, count: 27756, colorClass: 'bg-[#4059aa] text-[#0b1c30]', indicatorColor: '#4059aa' },
      { category: 'บุคคลภายนอก', percentage: 13, count: 20046, colorClass: 'bg-[#006c49] text-[#006c49]', indicatorColor: '#006c49' }
    ],
    vehicleModals: [
      { type: 'รถจักรยานยนต์', icon: 'two_wheeler', percentage: 48, count: 74016, colorClass: 'text-[#00236f]', accentClass: 'bg-[#00236f]' },
      { type: 'รถยนต์ส่วนบุคคล', icon: 'directions_car', percentage: 34, count: 52428, colorClass: 'text-[#006c49]', accentClass: 'bg-[#006c49]' },
      { type: 'เดินเท้า / รถราง', icon: 'directions_walk', percentage: 18, count: 27756, colorClass: 'text-[#0b1c30]', accentClass: 'bg-[#4059aa]' }
    ],
    aiRecommendation: {
      title: 'ข้อเสนอแนะระบบจัดระเบียบจราจร',
      content: 'สถิติสะสมรอบเดือนชี้ให้เห็นว่า วันจันทร์และวันพฤหัสบดีมีปริมาณรถสูงสุด แนะนำเพิ่มเจ้าหน้าที่โบกจราจรช่วยเปิดเลนเร่งด่วนช่วง 07:45 - 08:30 น.',
      actionLabel: 'บันทึกแผนจราจร'
    }
  }
};

export const HOTLINK_LOGO_URL = "https://lh3.googleusercontent.com/aida/AEtjO1WALQHRVXQpXgSkfQD-20QkFCXIi76QotOt1096ZOD2mGRl8N3Vtzd-V0M0LO9Iv9gkEtZjg5AIzQxT8Wqo3owYfN1ueX3FhJuvZ7p7Mrc6ANFdy7sGeHcwfYdvwE6LoGlkOcZEZj3dHV27L69RmrhM9EL_ZcUZgHuurZpmMD2utaov8yn4lSlUtkogwYR0oFDbr4IgCNZwxu_RisbKuSZtMPI-sgcHOQGdaZX1NcSrcsXHQWBOX4fbHdsZ";
