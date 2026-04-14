import React from 'react';

export default function AIPredictions() {
  const models = [
    { name: 'Neural Paddock V4', status: 'Tối ưu', accuracy: '84.2%', latency: '12ms', type: 'Động cơ cốt lõi' },
    { name: 'Momentum Scout', status: 'Hoạt động', accuracy: '72.1%', latency: '45ms', type: 'Đo lường trực tiếp' },
    { name: 'Tactical Analyst', status: 'Chờ', accuracy: '78.5%', latency: '120ms', type: 'Chiến lược chuyên sâu' }
  ];

  const insights = [
    {
      match: 'Man City vs Real Madrid',
      confidence: 'Cao (88%)',
      insight: 'Man City cho thấy hiệu quả pressing cao tăng 12% trong 15 phút đầu của hiệp hai.',
      recommendation: 'Trên 0.5 bàn thắng trong khoảng thời gian 45\'-60\'.'
    },
    {
      match: 'Arsenal vs Liverpool',
      confidence: 'Trung bình (64%)',
      insight: 'Cấu trúc phòng ngự của Liverpool yếu đi 18% khi phải chịu hơn 5 quả phạt góc.',
      recommendation: 'Arsenal trên 5.5 quả phạt góc.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* AI Dashboard Header */}
      <div className="bg-surface-container-low p-8 rounded-2xl border border-outline-variant relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              <h1 className="text-3xl font-black font-headline tracking-tight text-on-surface">Công cụ Neural Paddock</h1>
            </div>
            <p className="text-slate-500 font-medium">Giao diện đo lường thể thao tiên tiến và mô hình dự đoán.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container p-4 rounded-xl border border-outline-variant flex items-center gap-4 shadow-sm">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Độ chính xác Toàn cầu</p>
                <p className="text-xl font-black text-primary">74.2%</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary">verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Model Status (Col-4) */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <h3 className="text-lg font-bold font-headline flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-secondary">memory</span>
            Mô hình đang hoạt động
          </h3>
          <div className="space-y-4">
            {models.map((model, idx) => (
              <div key={idx} className="bg-surface-container-low p-5 rounded-xl border border-outline-variant hover:border-primary/40 transition-all shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-on-surface">{model.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{model.type}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-sm uppercase">{model.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Độ chính xác</p>
                    <p className="text-sm font-black text-on-surface">{model.accuracy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Độ trễ</p>
                    <p className="text-sm font-black text-on-surface">{model.latency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 bg-surface-container text-on-surface-variant font-bold text-xs uppercase tracking-widest rounded-xl border border-outline-variant hover:bg-surface-container-highest transition-colors shadow-sm">
            Cấu hình động cơ
          </button>
        </div>

        {/* AI Insights (Col-8) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <h3 className="text-lg font-bold font-headline flex items-center gap-2 text-on-surface">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
            Thông tin chi tiết Neural
          </h3>
          <div className="space-y-4">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-surface-container-low p-8 rounded-xl border border-outline-variant relative overflow-hidden group shadow-sm">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">Độ tin cậy: {insight.confidence}</span>
                </div>
                <div className="max-w-xl">
                  <h4 className="text-xl font-black font-headline text-on-surface mb-4">{insight.match}</h4>
                  <div className="flex gap-4 mb-6">
                    <div className="w-1 bg-primary rounded-full"></div>
                    <p className="text-slate-600 leading-relaxed font-medium italic">
                      "{insight.insight}"
                    </p>
                  </div>
                  <div className="bg-surface-container p-4 rounded-lg border border-primary/10">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Khuyến nghị</p>
                    <p className="text-sm font-bold text-on-surface">{insight.recommendation}</p>
                  </div>
                </div>
                <button className="absolute bottom-8 right-8 p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-on-primary transition-all shadow-sm">
                  <span className="material-symbols-outlined">trending_up</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
