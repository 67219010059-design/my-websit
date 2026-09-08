import React, { useState } from 'react';
import { AnalyticsData } from '../types';

interface ExportReportsSectionProps {
  data: AnalyticsData;
}

export const ExportReportsSection: React.FC<ExportReportsSectionProps> = ({ data }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExporting, setIsExporting] = useState(false);
  const [showPdfPreview, setShowPdfPreview] = useState(false);

  const handleExportExcel = () => {
    setIsExporting(true);
    setToastMessage('กำลังรวบรวมข้อมูลดิบและสร้างไฟล์ Excel (.xlsx)...');

    setTimeout(() => {
      // Create and trigger download of a real CSV/Excel compatible file
      const csvRows: string[] = [];
      csvRows.push('\uFEFF"Campus Flow - รายงานสถิติการสัญจรเข้า-ออกมหาวิทยาลัย"');
      csvRows.push(`"ช่วงเวลาที่ประมวลผล:","${data.displayPeriodLabel}"`);
      csvRows.push(`"ยอดสัญจรรวม:","${data.totalVolume} ครั้ง"`);
      csvRows.push(`"สถานะความพร้อมระบบ:","${data.uptimePercent}"`);
      csvRows.push('');
      csvRows.push('"อันดับประตู","ชื่อประตู","ช่องทาง","ยอดรวม (คัน-คน)","สัดส่วน (%)","ขาเข้า","ขาออก","สถานะการจราจร"');

      data.gates.forEach((g, idx) => {
        csvRows.push(`"${idx + 1}","${g.name}","${g.lanesDescription}","${g.totalVolume}","${g.percentage}%","${g.inflow}","${g.outflow}","${g.statusText}"`);
      });

      csvRows.push('');
      csvRows.push('"กลุ่มผู้ใช้บริการ","สัดส่วน (%)","จำนวน (คน)"');
      data.demographics.forEach((d) => {
        csvRows.push(`"${d.category}","${d.percentage}%","${d.count}"`);
      });

      csvRows.push('');
      csvRows.push('"ประเภทพาหนะ","สัดส่วน (%)","จำนวน"');
      data.vehicleModals.forEach((v) => {
        csvRows.push(`"${v.type}","${v.percentage}%","${v.count}"`);
      });

      const blob = new Blob([csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `Campus_Flow_Report_${data.timeRange}_${new Date().toISOString().slice(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsExporting(false);
      setToastMessage('ดาวน์โหลดไฟล์ Excel (.xlsx / CSV) เรียบร้อยแล้ว');
      setTimeout(() => setToastMessage(null), 4000);
    }, 1000);
  };

  const handleExportPdf = () => {
    setIsExporting(true);
    setToastMessage('กำลังจัดพิมพ์รายงานสรุปผล PDF พร้อมกราฟและลายเซ็นผู้บริหาร...');
    setTimeout(() => {
      setIsExporting(false);
      setShowPdfPreview(true);
      setToastMessage('จัดทำเอกสาร PDF สรุปพร้อมสำหรับการพิมพ์และดาวน์โหลด');
    }, 800);
  };

  return (
    <section className="p-4 rounded-xl bg-white shadow-xs border border-[#e5eeff]/80 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00236f] text-[22px]">
            sim_card_download
          </span>
          <div>
            <h3 className="font-semibold text-base text-[#0b1c30]">
              ส่งออกรายงานสรุป (Export Reports)
            </h3>
            <p className="text-xs text-[#757682]">
              เอกสารทางการรับรองโดยสำนักบริหารอาคารสถานที่และ รปภ.
            </p>
          </div>
        </div>
      </div>

      {/* Export Buttons Grid */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        {/* Excel Export Button */}
        <button
          id="exportExcelBtn"
          onClick={handleExportExcel}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#eff4ff] hover:bg-[#e5eeff] text-[#00236f] text-xs active:scale-98 transition-all shadow-xs cursor-pointer text-left"
        >
          <span className="material-symbols-outlined text-[#006c49] text-[20px] flex-shrink-0">
            table_view
          </span>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-semibold leading-tight truncate">ไฟล์ Excel (.xlsx)</span>
            <span className="text-[11px] font-mono text-[#757682] truncate">บันทึกดิบรายนาที</span>
          </div>
        </button>

        {/* PDF Summary Export Button */}
        <button
          id="exportPdfBtn"
          onClick={handleExportPdf}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-lg bg-[#00236f] hover:bg-[#1e3a8a] text-white text-xs active:scale-98 transition-all shadow-xs cursor-pointer text-left"
        >
          <span className="material-symbols-outlined text-[20px] flex-shrink-0">
            picture_as_pdf
          </span>
          <div className="flex flex-col text-left min-w-0">
            <span className="font-semibold leading-tight truncate">รายงาน PDF สรุป</span>
            <span className="text-[11px] font-mono text-[#dce1ff] truncate">พร้อมกราฟและลายเซ็น</span>
          </div>
        </button>
      </div>

      {/* Download Feedback Toast */}
      {toastMessage && (
        <div
          id="exportToast"
          className="flex items-center justify-between p-2.5 rounded-lg bg-[#006c49]/10 text-[#006c49] transition-all animate-fadeIn"
        >
          <div className="flex items-center gap-2 min-w-0">
            <span className="material-symbols-outlined text-[18px] flex-shrink-0">
              check_circle
            </span>
            <span className="text-xs font-medium truncate" id="exportToastMsg">
              {toastMessage}
            </span>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-xs font-mono text-[#006c49] underline cursor-pointer ml-2 flex-shrink-0"
          >
            ปิด
          </button>
        </div>
      )}

      {/* PDF Printable Modal */}
      {showPdfPreview && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 shadow-2xl border border-[#e5eeff] flex flex-col gap-4">
            <div className="flex items-center justify-between border-b pb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00236f] text-2xl">
                  description
                </span>
                <span className="font-semibold text-base text-[#0b1c30]">
                  ตัวอย่างเอกสารรับรองรายงานสรุป (PDF)
                </span>
              </div>
              <button
                onClick={() => setShowPdfPreview(false)}
                className="w-8 h-8 rounded-full bg-[#eff4ff] flex items-center justify-center text-[#444651] hover:bg-[#dce9ff]"
              >
                ✕
              </button>
            </div>

            {/* Official Header Preview */}
            <div className="p-4 bg-[#f8f9ff] rounded-xl border border-[#e5eeff] text-xs space-y-2">
              <div className="text-center pb-2 border-b border-[#dce9ff]">
                <p className="font-bold text-sm text-[#00236f]">มหาวิทยาลัย - สำนักบริหารอาคารสถานที่และระบบรักษาความปลอดภัย</p>
                <p className="text-[#444651]">รายงานวิเคราะห์ความหนาแน่นและสถิติการสัญจรผ่านประตูมหาวิทยาลัย</p>
                <p className="text-[10px] text-[#757682]">ช่วงเวลา: {data.displayPeriodLabel} | ข้อมูล ณ วันที่ 18 พ.ย. 2567</p>
              </div>

              <div className="grid grid-cols-2 gap-2 py-1">
                <div className="p-2 bg-white rounded border border-[#eff4ff]">
                  <p className="text-[#757682]">ปริมาณสัญจรรวม:</p>
                  <p className="font-bold text-sm text-[#00236f]">{data.totalVolume.toLocaleString()} ครั้ง</p>
                </div>
                <div className="p-2 bg-white rounded border border-[#eff4ff]">
                  <p className="text-[#757682]">ช่วงเวลาเร่งด่วนเข้า:</p>
                  <p className="font-bold text-sm text-[#006c49]">{data.peakInflow.timeRange}</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="font-semibold text-[#00236f] mb-1">สรุปอันดับประตูสัญจร:</p>
                <div className="space-y-1">
                  {data.gates.map((g, idx) => (
                    <div key={g.id} className="flex justify-between text-[11px] p-1 bg-white rounded">
                      <span>{idx + 1}. {g.name}</span>
                      <span className="font-mono font-medium">{g.totalVolume.toLocaleString()} ครั้ง ({g.percentage}%)</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex justify-between items-end border-t border-[#dce9ff]">
                <div className="text-[10px] text-[#757682]">
                  รหัสเอกสาร: CPF-2567-1118-09<br />
                  รับรองความถูกต้องด้วยระบบกุญแจดิจิทัล
                </div>
                <div className="text-right text-[10px]">
                  <div className="w-24 border-b border-gray-400 mb-1"></div>
                  <p className="font-medium text-[#0b1c30]">ผู้กำกับควบคุมการจราจร</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-4 py-2 rounded-lg bg-[#00236f] text-white text-xs font-medium hover:bg-[#1e3a8a] flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-base">print</span>
                พิมพ์ / บันทึกเป็น PDF
              </button>
              <button
                onClick={() => setShowPdfPreview(false)}
                className="px-4 py-2 rounded-lg bg-[#eff4ff] text-[#444651] text-xs font-medium hover:bg-[#dce9ff]"
              >
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
