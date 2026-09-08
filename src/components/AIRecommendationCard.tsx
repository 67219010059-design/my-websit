import React, { useState } from 'react';

interface AIRecommendationCardProps {
  recommendation: {
    title: string;
    content: string;
    actionLabel?: string;
  };
}

export const AIRecommendationCard: React.FC<AIRecommendationCardProps> = ({
  recommendation,
}) => {
  const [isActionApplied, setIsActionApplied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleApply = () => {
    setIsActionApplied(true);
    setToastMessage('สั่งการระบบจราจรอัตโนมัติ: ได้ส่งสัญญาณเปิดเลนพิเศษเรียบร้อยแล้ว');
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <section className="p-3 rounded-xl bg-[#dce9ff] flex flex-col gap-2 relative overflow-hidden border border-[#b6c4ff]/60">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-lg bg-[#00236f] text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-2xs">
          <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
        </div>
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <span className="text-[15px] font-semibold text-[#00236f] leading-snug">
              {recommendation.title}
            </span>
            <span className="px-1.5 py-0.2 rounded text-[10px] font-mono font-medium bg-[#00236f]/10 text-[#00236f]">
              AI Insight
            </span>
          </div>
          <p className="text-xs text-[#444651] mt-1 leading-relaxed">
            {recommendation.content}
          </p>

          {recommendation.actionLabel && (
            <div className="mt-2.5 flex items-center gap-2">
              <button
                onClick={handleApply}
                disabled={isActionApplied}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all active:scale-95 cursor-pointer ${
                  isActionApplied
                    ? 'bg-[#006c49] text-white cursor-default'
                    : 'bg-[#00236f] hover:bg-[#1e3a8a] text-white shadow-xs'
                }`}
              >
                {isActionApplied ? '✓ ดำเนินการแล้ว' : recommendation.actionLabel}
              </button>
              {isActionApplied && (
                <span className="text-[11px] text-[#006c49] font-medium animate-fadeIn">
                  ระบบส่งคำสั่งไปยังป้อม รปภ. ประตู 1 แล้ว
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {toastMessage && (
        <div className="p-2 rounded-lg bg-[#006c49]/10 text-[#006c49] text-xs font-medium flex items-center gap-1.5 animate-fadeIn">
          <span className="material-symbols-outlined text-[16px]">check_circle</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};
