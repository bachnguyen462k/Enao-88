import React from 'react';

export default function AIPredictions() {
  const models = [
    { name: 'Neural Paddock V4', status: 'Optimal', accuracy: '84.2%', latency: '12ms', type: 'Core Engine' },
    { name: 'Momentum Scout', status: 'Active', accuracy: '72.1%', latency: '45ms', type: 'Live Telemetry' },
    { name: 'Tactical Analyst', status: 'Standby', accuracy: '78.5%', latency: '120ms', type: 'Deep Strategy' }
  ];

  const insights = [
    {
      match: 'Man City vs Real Madrid',
      confidence: 'High (88%)',
      insight: 'Man City shows a 12% increase in high-press efficiency during the first 15 minutes of the second half.',
      recommendation: 'Over 0.5 Goals in 45\'-60\' minute bracket.'
    },
    {
      match: 'Arsenal vs Liverpool',
      confidence: 'Medium (64%)',
      insight: 'Liverpool\'s defensive structure weakens by 18% when conceding more than 5 corners.',
      recommendation: 'Arsenal Over 5.5 Corners.'
    }
  ];

  return (
    <div className="space-y-8">
      {/* AI Dashboard Header */}
      <div className="bg-surface-container-low p-8 rounded-2xl border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -mr-48 -mt-48"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="material-symbols-outlined text-primary text-3xl">psychology</span>
              <h1 className="text-3xl font-black font-headline tracking-tight text-white">Neural Paddock Engine</h1>
            </div>
            <p className="text-slate-400 font-medium">Advanced sports telemetry and predictive modeling interface.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-surface-container p-4 rounded-xl border border-white/5 flex items-center gap-4">
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Global Accuracy</p>
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
          <h3 className="text-lg font-bold font-headline flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">memory</span>
            Active Models
          </h3>
          <div className="space-y-4">
            {models.map((model, idx) => (
              <div key={idx} className="bg-surface-container p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-white">{model.name}</h4>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{model.type}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-black rounded-sm uppercase">{model.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Accuracy</p>
                    <p className="text-sm font-black text-white">{model.accuracy}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-bold mb-1 uppercase">Latency</p>
                    <p className="text-sm font-black text-white">{model.latency}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full py-4 bg-surface-container-highest/50 text-on-surface font-bold text-xs uppercase tracking-widest rounded-xl border border-white/10 hover:bg-surface-container-highest transition-colors">
            Configure Engine
          </button>
        </div>

        {/* AI Insights (Col-8) */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <h3 className="text-lg font-bold font-headline flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">lightbulb</span>
            Neural Insights
          </h3>
          <div className="space-y-4">
            {insights.map((insight, idx) => (
              <div key={idx} className="bg-surface-container p-8 rounded-xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest">Confidence: {insight.confidence}</span>
                </div>
                <div className="max-w-xl">
                  <h4 className="text-xl font-black font-headline text-white mb-4">{insight.match}</h4>
                  <div className="flex gap-4 mb-6">
                    <div className="w-1 bg-primary rounded-full"></div>
                    <p className="text-slate-300 leading-relaxed font-medium italic">
                      "{insight.insight}"
                    </p>
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-lg border border-primary/10">
                    <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Recommendation</p>
                    <p className="text-sm font-bold text-white">{insight.recommendation}</p>
                  </div>
                </div>
                <button className="absolute bottom-8 right-8 p-3 bg-primary/10 text-primary rounded-full hover:bg-primary hover:text-on-primary transition-all">
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
