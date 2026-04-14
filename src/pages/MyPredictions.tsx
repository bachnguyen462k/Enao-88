import React from 'react';

export default function MyPredictions() {
  const predictions = [
    {
      match: 'Arsenal vs Chelsea',
      league: 'Premier League • Mar 12, 2024',
      prediction: '2 - 1',
      actual: '2 - 1',
      points: '+10',
      status: 'Correct',
      teams: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBvgMm941Qq8JYHByDAH6SvdUyGLH-m9mEgB0YMUrPClgAFM2IyMftxo6rGel4QbQmMx22gAdNttBO1FnZyKvt76s25o4YdIeYaPcwx9jhUm26ItyKO-_CdBWkgsE6cTSEw1A1MU2eTYkK-5KYakJCGavMFi1j9Me2uClPdNT-TINoEnxrTOOgrUkPWE_8-4ip9GQkam6CCgQFgGTiatYI7xVhZ45zYF_OgDt0Pq8Txc2LDOAq0IQ_zjiVUQzBJ2dLmQtbCQ-DubpE',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBdytVwJwSwHaIN72lHqEuDBU0DXXxNlWhj1H0F3218r6L9VpuQHvrMGDVRFoYJP2aAWaZEe7nBqgDLqB8vTjzrsMUaNH-Yy86qjD3exvMLjJk6F7HaC2Zl-SURz-7_RxwCPFEgORrPnGdVVVB2BZVSdsPwd9Fs_of9alQBXYI5npmQyn3BahPEl3xblS-EMlDZrKdaNuLa_RUDQuDVfLTAECEgCsisQR6yluTarSCNJo_2J5hLg4cx3Jyss_saF9FNUPbHbAcqeDY'
      ]
    },
    {
      match: 'Wolves vs West Ham',
      league: 'Premier League • Mar 10, 2024',
      prediction: '1 - 0',
      actual: '2 - 0',
      points: '+5',
      status: 'Result Only',
      teams: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAGh7UC0w_0vXfoB9WYMpPazfyzCs9YSM3wLHUR5pq6qMAj5Uak1A6IEW60Qv_8t8w6ezThjhe2iF4tQHgYJNaIm1KgWGPpzNnFbx3a3I-MlX9dU8NEUNeLuwlBXAuw6OV6jpsvGbCG1ribSS0LP8IyJuOCpfT-kuqqkR2jdvDmNxths3S_i9zxAmlS6O8ouzdvf_-t-ksAWQLiap5DBQTtnLHIjWi5Wti0oQlmQ2ApFkwj9sIbeQCQ6qXOynNbmjuKn-6WDycDBb4',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCsz4x5cI2Rul987PgiDI54Yy6iwhVnfSgbdMhNoZVmVLi7GfDZguIeUGLaslqAqCokct5S2xtY75m3IZ-oyafibZgie3XTHrnEGGDx1AAg15HcTk9Az5nM1vupS_XgupocL75t_uiGuKnFbcDDhFxaMiAzzTwnG-B-ixMA6rOA_39IH255C7cUMpF8R7b1nNVK0wDaIjnOpmHFBoeUMVvTeHzbC7n2YGo9SNWbAQf1bAJLDxbBPtHMZH8NPIUeClz38gHlcUHkjYI'
      ]
    },
    {
      match: 'Man Utd vs Man City',
      league: 'Upcoming • Tonight 20:00',
      prediction: '1 - 3',
      actual: '—',
      points: 'TBD',
      status: 'Pending',
      teams: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBxtfHZIKAHbcYMdRe8Hu3Wi54HU5kNzjjfACY3-4ifhf7OsNYQoeXlGZyaXedq6nQWPLSW69ONP5wJgVLiUabcYMmD-GBFzM3fI6ErxLvm0Wt5RPM9Z0OBwcmsgvddKRNb4sxtTm1ozhcqUt5PaInzCvGIjpV0zH7_YGm_rC8XW3qv7rmDsR_WSYiVO94jZBONEtflpDGEhKRf1bPK_EITU2_B_2NwgYQB7hlOW0jfWMF-79BNNmGheemDkhoEFWyp2ZoM9115Grg',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBBge_V0jhPyfA92EBav3hD1r2beyp1yqlNYG6tN8Obz-gz8xGjZ9Zhmu7hoJIAKfJQLdEJVpbiRO8GCU31FJPcgjbcVY_hFhFP4NLdgOIFsEMju6dNa_iqXGJJJdb2x_R6EEJujmJI9Ul6Z1SElQihPkCzHL-IlAshBhlXuoz87WN5XFVXyUNZrr6e13rdvz6C9DAb8zB-4Ab1fk84hRSiqNuOrG8b3bFxK0rSnC4J9krLe6KSx9L4ltn2O4FpTTP21jSbba4-3RM'
      ]
    },
    {
      match: 'Spurs vs Liverpool',
      league: 'Premier League • Mar 05, 2024',
      prediction: '0 - 2',
      actual: '1 - 1',
      points: '0',
      status: 'Wrong',
      teams: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAw_lCXlG-a4CqpSoXTDQFroxIK-MJ30CdrPyadcwrUN-xni3kkaPrU5D1ldmiGTdprX4ILPu8tVljdoxkwIihdSWvc34GlWqwyQ7UgKL_4nS0EBs0hwM8ltyNlEfdeGb-SjYKf-xTiorR3nj67LEWiehjCdyfUxyNf3dNr22sbFALpDfedFUvs1FQXTvVCYD2w1bL6LjWqylZ2xEDG_knOq8W06mnTbz7fvra1Xu3bKV4qrTod2o0QbIcKLyVkht55zn6XtLYoAsc',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD24tGx6qflCdAf7sOQ5QcSVdfuP5KKE_cJOp5GU_qbFW9cEXLtrLE547fav4WWYFzE7NgE-0lBPpNHek-RxBbNAjsJRkGHCAVDHuSVBYEde20-zmJkNr_UErI6ASZZO-gKKIQhVJCUS1BVs9iHLw0SJdKoOW1L2CqbUQDEUd9Gv-uPPAJWYTyDG7vkdNxbQ-kjeoGgQClYv-PWXCErwy-LpXJYAs_7kccRWqi7vOVu2gukVDcm7A2ClE4QchNaKoMlp-gxHN9O5b8'
      ]
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface">My Predictions</h1>
          <p className="text-slate-400 mt-2 font-medium">Historical performance and upcoming match forecasts.</p>
        </div>
        <div className="flex gap-4">
          <div className="flex bg-surface-container-low rounded-lg p-1">
            <button className="px-4 py-2 bg-surface-container text-primary font-bold rounded-md text-xs tracking-wider uppercase">Overview</button>
            <button className="px-4 py-2 text-slate-400 font-bold rounded-md text-xs tracking-wider uppercase hover:text-on-surface">Reports</button>
          </div>
        </div>
      </div>

      {/* Bento Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Total Points Card */}
        <div className="bg-surface-container p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          </div>
          <div className="relative z-10">
            <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">Total Points</p>
            <h2 className="text-5xl font-extrabold text-on-surface">1,240</h2>
            <div className="mt-4 flex items-center text-primary text-sm font-bold">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
              +12% from last week
            </div>
          </div>
        </div>
        {/* Accuracy Card */}
        <div className="bg-surface-container p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mb-10 -mr-10"></div>
          <div className="relative z-10">
            <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">Overall Accuracy</p>
            <h2 className="text-5xl font-extrabold text-on-surface">68<span className="text-2xl text-slate-500 font-normal">%</span></h2>
            <div className="mt-6 h-1 w-full bg-outline-variant rounded-full overflow-hidden">
              <div className="h-full bg-primary shadow-[0_0_8px_rgba(117,255,158,0.5)]" style={{ width: '68%' }}></div>
            </div>
          </div>
        </div>
        {/* Correct Scores */}
        <div className="bg-surface-container p-6 rounded-xl flex flex-col justify-between">
          <div>
            <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-2">Correct Scores</p>
            <h2 className="text-5xl font-extrabold text-on-surface">14</h2>
          </div>
          <p className="text-slate-500 text-xs mt-2 italic">Ranked #242 globally</p>
        </div>
        {/* Performance Chart Component */}
        <div className="bg-surface-container-high p-6 rounded-xl md:col-span-1 lg:col-span-1 border border-white/5">
          <p className="text-slate-400 text-xs font-bold tracking-widest uppercase mb-4">Pulse Chart</p>
          <div className="flex items-end justify-between h-24 gap-1">
            <div className="w-2 bg-primary/20 rounded-t h-[40%]"></div>
            <div className="w-2 bg-primary/40 rounded-t h-[60%]"></div>
            <div className="w-2 bg-primary/60 rounded-t h-[30%]"></div>
            <div className="w-2 bg-primary/20 rounded-t h-[80%]"></div>
            <div className="w-2 bg-primary/80 rounded-t h-[50%]"></div>
            <div className="w-2 bg-primary rounded-t h-[100%] shadow-[0_0_10px_rgba(117,255,158,0.3)]"></div>
            <div className="w-2 bg-primary/40 rounded-t h-[70%]"></div>
          </div>
        </div>
      </div>

      {/* Filters & Lists */}
      <div className="space-y-6">
        {/* Filter Row */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-semibold rounded-lg">All Status</button>
            <button className="px-4 py-2 hover:bg-surface-container-low text-slate-400 text-sm font-semibold rounded-lg transition-colors">Pending</button>
            <button className="px-4 py-2 hover:bg-surface-container-low text-slate-400 text-sm font-semibold rounded-lg transition-colors">Completed</button>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center bg-surface-container-low px-3 py-2 rounded-lg border border-white/5 text-sm text-slate-300">
              <span className="material-symbols-outlined text-sm mr-2">calendar_month</span>
              Last 30 Days
            </div>
          </div>
        </div>

        {/* Predictions List */}
        <div className="bg-surface-container rounded-xl overflow-hidden shadow-2xl shadow-black/20">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-surface-container-high text-left">
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-500">Match Detail</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-center">Prediction</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-center">Actual Result</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-center">Points</th>
                <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-slate-500 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {predictions.map((pred, idx) => (
                <tr key={idx} className="hover:bg-surface-bright transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {pred.teams.map((logo, lIdx) => (
                          <div key={lIdx} className="h-8 w-8 rounded-full border-2 border-surface-container overflow-hidden bg-white/10">
                            <img className="w-full h-full object-contain p-1" src={logo} alt="Team Badge" />
                          </div>
                        ))}
                      </div>
                      <div>
                        <p className="font-bold text-on-surface">{pred.match}</p>
                        <p className={`text-xs ${pred.status === 'Pending' ? 'text-[#00E676] font-bold' : 'text-slate-500'}`}>{pred.league}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className="font-mono text-lg font-bold text-on-surface">{pred.prediction}</span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <span className={`font-mono text-lg font-bold ${
                      pred.status === 'Correct' ? 'text-primary' : 
                      pred.status === 'Result Only' ? 'text-secondary-container' : 
                      pred.status === 'Wrong' ? 'text-error' : 'text-slate-600'
                    }`}>{pred.actual}</span>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <div className="flex items-center justify-center gap-1">
                      <span className={`${
                        pred.status === 'Correct' ? 'text-primary' : 
                        pred.status === 'Result Only' ? 'text-secondary-container' : 
                        pred.status === 'Wrong' ? 'text-error' : 'text-slate-500'
                      } font-black text-xl`}>{pred.points}</span>
                      {pred.status === 'Correct' && <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>}
                    </div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <span className={`px-3 py-1 border text-[10px] font-black uppercase tracking-widest rounded-sm ${
                      pred.status === 'Correct' ? 'bg-primary/10 text-primary border-primary/20' : 
                      pred.status === 'Result Only' ? 'bg-secondary-container/10 text-secondary-container border-secondary-container/20' : 
                      pred.status === 'Wrong' ? 'bg-error-container/20 text-error border-error/20' : 
                      'bg-slate-800 text-slate-400 border-slate-700'
                    }`}>{pred.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination/Load More */}
        <div className="flex justify-center pt-4">
          <button className="px-8 py-3 bg-surface-container-high hover:bg-surface-bright text-slate-300 font-bold text-sm rounded-xl transition-all border border-white/5">
            Load Previous Predictions
          </button>
        </div>
      </div>

      {/* Floating Action Component: Quick Predict */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="flex items-center gap-3 bg-primary text-on-primary px-6 py-4 rounded-full font-black shadow-2xl shadow-primary/40 transition-transform hover:scale-105 active:scale-95 group">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add_circle</span>
          <span>NEW PREDICTION</span>
        </button>
      </div>
    </div>
  );
}
