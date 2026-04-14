import React from 'react';

export default function MatchDetail() {
  return (
    <div className="space-y-8">
      {/* Scoreboard Hero Area */}
      <section className="relative rounded-xl overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA9YJv_Tt6b488NKFYXeyl66JhnrWV_pq5dvD872ZZZyjYH59drvBZzPFwoaTIF1n7cWgDrclg0_MNOCA1OmaUhHmD52uX2ZkoJh80KHqc5D1XsOXqlV6y4n75wrAPaJk9D90Dir5C8asMyPOt7-0bYZNYOeq7I2xPFa3aayyQIwcc1rxdqWD857IuLcOUAUpO22_GCR2SvTChaXdyR87tXWZ3sapmZI1oaAx6EIz5w2qkh4WOPXO1aZ4vtQBBsVy7_hWXgm7luz4"
          />
        </div>
        <div className="relative z-10 p-12 flex flex-col items-center">
          <div className="text-secondary font-bold text-sm tracking-widest mb-6 uppercase">Premier League — Matchday 24</div>
          <div className="flex items-center justify-center gap-16 w-full max-w-4xl">
            {/* Home Team */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-24 h-24 mb-4 drop-shadow-[0_0_15px_rgba(0,230,118,0.3)]">
                <img
                  alt="Arsenal FC"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv6l0PchehK2Nm6bSUppZ7E8KeuGkxzrvMFtFLFo7zeESpua8ohZIMOeyDR31rBHwRm88-vnlgEAdmHWa1Nuh6vP5dgt2ev26z0uWbiybASZrMY5ZH4VdnJ3BhS-_bEtITyvsi9zQ_EtjODW4IbidT1-NGoZ99JM6lxufKTMj2jDtSe-HDoQuUTtKWKBEAF2iB0JjJjIdYHb2rn_a76wRl7joVuNcBp9LwomFLptGNbSNeXShOROUg84g6EucafKyom2NSIJKsYe4"
                />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-headline">ARSENAL</h2>
              <span className="text-slate-400 text-sm mt-1">Form: W-W-L-W</span>
            </div>
            {/* Score/Time */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-6">
                <span className="text-7xl font-black text-white tracking-tighter">2</span>
                <span className="text-4xl font-bold text-slate-600">:</span>
                <span className="text-7xl font-black text-white tracking-tighter">1</span>
              </div>
              <div className="mt-4 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-sm text-xs font-bold tracking-widest animate-pulse">
                LIVE 74'
              </div>
            </div>
            {/* Away Team */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-24 h-24 mb-4">
                <img
                  alt="Chelsea FC"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDgwYwQjneSlD_fUh2KJ8MNILfxOL5cN4-KqyEf52y027nw-TyWL8vhw5ibDZOYH3aXl3rCPv1L3kEyX_HOVDsc9cNKY89ucy5OuJHi1Hgu0rqEwB8PWqfZwPA0iR33HUgmJH-uXJh0qwXkvHYsLhnsqGtFb41IsVFK8TN8QISvXL2pDfCpN5qxD3YkkDf6yYpAFEXVbQm0z22aDBzgKBy0nRXYfETyYoZoNhnE93zA3Zf3an38zhthO3pAECJTRUtjD8ug4jbSOc"
                />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-headline">CHELSEA</h2>
              <span className="text-slate-400 text-sm mt-1">Form: L-D-W-L</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: AI & Stats */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* AI Insights Section */}
          <div className="bg-surface-container rounded-xl p-8 border-none relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <div className="bg-secondary text-on-secondary px-3 py-1 rounded-sm text-[10px] font-black tracking-tighter flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span> VALUE BET IDENTIFIED
              </div>
            </div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">psychology</span>
              AI Analytics Engine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Probabilities */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-400 uppercase">
                    <span>Home Win Probability</span>
                    <span className="text-primary">64.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary shadow-[0_0_8px_rgba(117,255,158,0.5)]" style={{ width: '64.2%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-400 uppercase">
                    <span>Draw Probability</span>
                    <span>21.5%</span>
                  </div>
                  <div className="h-1.5 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400" style={{ width: '21.5%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-400 uppercase">
                    <span>Away Win Probability</span>
                    <span>14.3%</span>
                  </div>
                  <div className="h-1.5 w-full bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary-container" style={{ width: '14.3%' }}></div>
                  </div>
                </div>
              </div>
              {/* Confidence Score */}
              <div className="flex flex-col items-center justify-center bg-surface-container-high rounded-xl p-6 border border-white/5">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Confidence Score</span>
                <div className="text-5xl font-black text-primary">9.2</div>
                <div className="text-xs text-primary/80 font-bold mt-1">High Accuracy Flow</div>
                <div className="mt-4 text-[10px] text-slate-500 text-center leading-relaxed">
                  Neural model processed 1.2M historical match data points for this fixture.
                </div>
              </div>
            </div>
          </div>
          {/* Match Stats Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container p-6 rounded-xl flex flex-col items-center justify-center border border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Possession</span>
              <span className="text-2xl font-bold text-white">58% - 42%</span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl flex flex-col items-center justify-center border border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">xG (Expected)</span>
              <span className="text-2xl font-bold text-white">2.41 - 1.08</span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl flex flex-col items-center justify-center border border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Shots on Target</span>
              <span className="text-2xl font-bold text-white">7 - 3</span>
            </div>
            <div className="bg-surface-container p-6 rounded-xl flex flex-col items-center justify-center border border-white/5">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Corners</span>
              <span className="text-2xl font-bold text-white">5 - 2</span>
            </div>
          </div>
          {/* H2H Section */}
          <div className="bg-surface-container rounded-xl p-8">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-tight">
              <span className="material-symbols-outlined text-secondary">history</span>
              Head-to-Head History
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <span className="text-xs font-bold text-slate-500">22 OCT 2023</span>
                <div className="flex items-center gap-8 font-bold">
                  <span>Chelsea</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">2 - 2</span>
                  <span>Arsenal</span>
                </div>
                <span className="text-xs font-bold text-slate-500">PREMIER LEAGUE</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <span className="text-xs font-bold text-slate-500">02 MAY 2023</span>
                <div className="flex items-center gap-8 font-bold">
                  <span>Arsenal</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">3 - 1</span>
                  <span>Chelsea</span>
                </div>
                <span className="text-xs font-bold text-slate-500">PREMIER LEAGUE</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg">
                <span className="text-xs font-bold text-slate-500">06 NOV 2022</span>
                <div className="flex items-center gap-8 font-bold">
                  <span>Chelsea</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">0 - 1</span>
                  <span>Arsenal</span>
                </div>
                <span className="text-xs font-bold text-slate-500">PREMIER LEAGUE</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Prediction Game */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Core Prediction Game */}
          <div className="bg-surface-container rounded-xl p-8 border border-primary/20 sticky top-28 shadow-2xl shadow-primary/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">edit_square</span>
              Your Prediction
            </h3>
            <div className="space-y-8">
              {/* Score Inputs */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex-1 flex flex-col items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-2">Home</label>
                  <input className="w-20 h-24 bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary text-center text-4xl font-black transition-all outline-none rounded-xl" placeholder="0" type="number" />
                </div>
                <div className="text-3xl font-bold text-slate-700 mt-6">-</div>
                <div className="flex-1 flex flex-col items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-2">Away</label>
                  <input className="w-20 h-24 bg-surface-container-highest border-b-2 border-outline-variant focus:border-primary text-center text-4xl font-black transition-all outline-none rounded-xl" placeholder="0" type="number" />
                </div>
              </div>
              {/* Result Selectors */}
              <div className="grid grid-cols-3 gap-2">
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container-low border border-white/5 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Home</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container-low border border-white/5 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Draw</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container-low border border-white/5 peer-checked:bg-primary/20 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Away</span>
                  </div>
                </label>
              </div>
              {/* Prediction Stats */}
              <div className="p-4 bg-surface-container-low rounded-xl border border-white/5 space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Estimated Points</span>
                  <span className="text-primary font-bold">+150 XP</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Success Probability</span>
                  <span className="text-white font-bold">12.4%</span>
                </div>
              </div>
              <button className="w-full py-4 bg-gradient-to-tr from-[#00e676] to-[#75ff9e] text-[#003918] font-black rounded-xl text-lg hover:shadow-[0_0_20px_rgba(0,230,118,0.3)] transition-all transform active:scale-95">
                Submit Prediction
              </button>
              <p className="text-[10px] text-center text-slate-500">
                Predict correctly to climb the <a className="text-primary underline" href="#">Leaderboard</a> and win Paddock tokens.
              </p>
            </div>
          </div>
          {/* Featured Market Promo */}
          <div className="rounded-xl overflow-hidden relative p-8 group">
            <div className="absolute inset-0 bg-secondary shadow-lg"></div>
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH2P6Ftu__L8uQrPAqArZey5qVU2VhmWNSsEguk_TEeeq-mmlRoxuAGM0BHMDsItk8SFwxfFkCGO4eo5LHSqpM_mMd-2R9mIuzf0Sc2_8oKgpUVS-1do34Gz7fzdiHZvN0XtSaXrjYC8mFayRF0JgTNFogNiU6fIClcqSOA30P38cEMPE47BATbnewzG4fuEMI-zrDoD9FDP1ypyXqLouIjq4cc9CE-Fc7cAaIIRPNQC_H90cm7XCI2WbDQWIPHORpot21b_Z8sns"
              />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black text-on-secondary/60 uppercase tracking-widest">Premium Insight</span>
              <h4 className="text-2xl font-black text-on-secondary leading-tight mt-2">Unlock Pro Multi-Odds?</h4>
              <p className="text-sm text-on-secondary/80 mt-4 leading-relaxed font-medium">
                Our AI detected a 12% discrepancy in player performance metrics for the second half.
              </p>
              <button className="mt-6 px-6 py-2 bg-on-secondary text-secondary font-bold rounded-sm text-xs tracking-widest uppercase">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
