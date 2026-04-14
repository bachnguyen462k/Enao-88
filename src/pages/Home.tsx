import React from 'react';

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Section: Featured Match */}
      <section className="relative h-[400px] rounded-xl overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent z-10"></div>
        <img
          alt="Champions League Final Stadium"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dNED9sbCYRmXWYu87T7Ij2ri_Z6yR-cUa65UdqLIErDWdv2D3LlGIIgqoVAS-1nGz85r7Um2HX4e7CAYMvAuak4QFePP4sqjLRIhYn7xRPrI2ExttBNPHrO4iZEtEjhwJuCEmKqmghHlqidDiGa3LIjWH6BzZgZb-KbkJZ5WG_9JJog6jL81jJBTlL9euEIXnOJd1GBq-adkrtTnrCrURBOmqJU_OmocCV1j5sGXaN0PIIs6DIRNufPs8e9rhNsOHUKh9LgQH5c"
        />
        <div className="relative z-20 h-full flex flex-col justify-center px-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-black rounded-sm uppercase tracking-widest">Featured Match</span>
            <span className="text-slate-400 text-sm font-medium tracking-tight">UEFA Champions League • Final</span>
          </div>
          <h1 className="text-6xl font-black font-headline tracking-tighter mb-4 text-white">
            MAN CITY <span className="text-primary-container">VS</span> REAL MADRID
          </h1>
          <p className="text-slate-300 text-lg mb-8 leading-relaxed max-w-md font-medium">
            The ultimate tactical showdown. Our AI models predict a <span className="text-primary font-bold underline decoration-primary/30">68% probability</span> of a high-scoring encounter.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-primary text-on-primary font-black rounded-xl hover:scale-105 transition-transform font-headline flex items-center gap-2">
              Predict Now
              <span className="material-symbols-outlined text-xl">trending_up</span>
            </button>
            <button className="px-8 py-4 bg-surface-variant/40 backdrop-blur-md text-white font-bold rounded-xl border border-white/10 hover:bg-surface-variant transition-colors">
              View Analysis
            </button>
          </div>
        </div>
        {/* Odds Overlay */}
        <div className="absolute right-12 bottom-12 z-20 glass-panel p-6 rounded-xl border border-white/5 min-w-[240px]">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Paddock AI Odds</span>
              <span className="material-symbols-outlined text-primary text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-3 bg-surface-container rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold mb-1">HOME</p>
                <p className="text-lg font-black text-white">2.10</p>
              </div>
              <div className="text-center p-3 bg-surface-container rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold mb-1">DRAW</p>
                <p className="text-lg font-black text-white">3.45</p>
              </div>
              <div className="text-center p-3 bg-surface-container rounded-lg border border-white/5">
                <p className="text-[10px] text-slate-500 font-bold mb-1">AWAY</p>
                <p className="text-lg font-black text-white">2.90</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* Live Now Section (Col-8) */}
        <div className="col-span-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-error pulse-live"></div>
              <h2 className="text-xl font-bold font-headline tracking-tight">Live Telemetry</h2>
            </div>
            <a className="text-primary text-xs font-bold uppercase tracking-widest hover:underline" href="#">View All Live</a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Live Match Card */}
            <div className="bg-surface-container-low p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Premier League • 72'</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-error/10 text-error rounded-sm text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]">sensors</span>
                  LIVE
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <p className="text-sm font-bold truncate">Arsenal</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-3xl font-black font-headline text-white">2 - 1</p>
                </div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <p className="text-sm font-bold truncate">Liverpool</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1 uppercase">
                  <span>Momentum Shift</span>
                  <span className="text-primary">+12% Paddock Score</span>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[65%] rounded-full shadow-[0_0_8px_rgba(117,255,158,0.5)]"></div>
                </div>
              </div>
            </div>
            {/* Live Match Card 2 */}
            <div className="bg-surface-container-low p-5 rounded-xl border border-white/5 hover:border-primary/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">La Liga • 18'</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 bg-error/10 text-error rounded-sm text-[10px] font-bold">
                  <span className="material-symbols-outlined text-[12px]">sensors</span>
                  LIVE
                </div>
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <p className="text-sm font-bold truncate">Barcelona</p>
                </div>
                <div className="text-center px-4">
                  <p className="text-3xl font-black font-headline text-white">0 - 0</p>
                </div>
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-white/5 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">shield</span>
                  </div>
                  <p className="text-sm font-bold truncate">Girona</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/5 space-y-3">
                <div className="flex justify-between text-[10px] font-bold text-slate-500 mb-1 uppercase">
                  <span>Momentum Shift</span>
                  <span className="text-white">Neutral</span>
                </div>
                <div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 w-[50%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Top AI Picks Section */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">psychology</span>
              <h2 className="text-xl font-bold font-headline tracking-tight">Top AI High-Confidence Picks</h2>
            </div>
            <div className="bg-surface-container p-1 rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="text-[10px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                    <th className="px-6 py-4">Match</th>
                    <th className="px-6 py-4">Prediction</th>
                    <th className="px-6 py-4 text-center">Confidence</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-bold">Inter vs Milan</div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-tighter">Inter Win</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-black font-headline text-white">88%</span>
                        <div className="w-24 h-1 bg-surface-container-highest rounded-full">
                          <div className="h-full bg-primary w-[88%] rounded-full shadow-[0_0_8px_rgba(117,255,158,0.3)]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-bold">Bayern vs Dortmund</div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-tighter">Over 2.5 Goals</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-black font-headline text-white">82%</span>
                        <div className="w-24 h-1 bg-surface-container-highest rounded-full">
                          <div className="h-full bg-primary w-[82%] rounded-full shadow-[0_0_8px_rgba(117,255,158,0.3)]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="text-xs font-bold">Leverkusen vs Stuttgart</div>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-3 py-1 bg-tertiary-container/10 text-tertiary-container border border-tertiary-container/20 rounded-full text-xs font-bold uppercase tracking-tighter">BTTS: Yes</span>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-sm font-black font-headline text-white">75%</span>
                        <div className="w-24 h-1 bg-surface-container-highest rounded-full">
                          <div className="h-full bg-primary-fixed-dim w-[75%] rounded-full shadow-[0_0_8px_rgba(0,228,117,0.2)]"></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">add_circle</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Sidebar Content (Col-4) */}
        <div className="col-span-4 space-y-8">
          {/* Community Trends Section */}
          <div className="bg-surface-container-low rounded-xl border border-white/5 overflow-hidden">
            <div className="p-6 border-b border-white/5 bg-white/[0.02]">
              <h3 className="font-bold font-headline tracking-tight flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">groups</span>
                Community Trends
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">Most Backed Team</span>
                  <span className="text-xs text-secondary font-black">7.2k votes</span>
                </div>
                <div className="flex items-center gap-4 bg-surface-container p-3 rounded-lg border border-white/5">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">sports_soccer</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-black font-headline">REAL MADRID</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">To Win vs Man City</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-black text-white">62%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Popular Markets</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs p-2 hover:bg-white/5 rounded transition-colors group">
                    <span className="text-slate-300">Over 2.5 Goals (UCL)</span>
                    <span className="font-black text-primary group-hover:scale-110 transition-transform">↑ 24%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2 hover:bg-white/5 rounded transition-colors group">
                    <span className="text-slate-300">Mbappé to Score</span>
                    <span className="font-black text-primary group-hover:scale-110 transition-transform">↑ 18%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs p-2 hover:bg-white/5 rounded transition-colors group">
                    <span className="text-slate-300">Bayer Leverkusen No Loss</span>
                    <span className="font-black text-primary group-hover:scale-110 transition-transform">↑ 12%</span>
                  </div>
                </div>
              </div>
              <button className="w-full py-3 bg-surface-container-highest/50 text-on-surface font-bold text-xs uppercase tracking-widest rounded-lg border border-white/10 hover:bg-surface-container-highest transition-colors">
                Join Discussion
              </button>
            </div>
          </div>

          {/* Prediction Accuracy Card */}
          <div className="p-1 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-transparent">
            <div className="bg-[#171f33] p-6 rounded-lg border border-white/5">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-black font-headline">AI Performance</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Last 30 Days</p>
                </div>
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                </div>
              </div>
              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black font-headline text-white">74.2%</span>
                <span className="text-primary font-bold text-xs mb-1.5 flex items-center">
                  <span className="material-symbols-outlined text-sm">arrow_drop_up</span>
                  +2.4%
                </span>
              </div>
              <div className="flex gap-1 h-12 items-end">
                <div className="flex-1 bg-primary/20 h-[60%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[45%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[70%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[55%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary/20 h-[85%] rounded-t-sm"></div>
                <div className="flex-1 bg-primary h-full rounded-t-sm"></div>
                <div className="flex-1 bg-primary/40 h-[65%] rounded-t-sm"></div>
              </div>
              <p className="text-[10px] text-slate-500 mt-4 leading-relaxed">
                Our proprietary <b>Neural Paddock Engine</b> has correctly predicted 148 out of 200 top-tier matches this month.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
