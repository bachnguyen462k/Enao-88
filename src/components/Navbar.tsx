import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 right-0 left-64 h-20 z-40 flex items-center justify-between px-8 bg-[#0b1326]/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex items-center flex-1 max-w-xl">
        <div className="relative w-full focus-within:ring-1 focus-within:ring-[#00E676]/30 rounded-full bg-surface-container-low px-4 py-2 flex items-center gap-3 border border-white/5">
          <span className="material-symbols-outlined text-slate-400">search</span>
          <input
            className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-full"
            placeholder="Search matches, teams, or analysts..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          <button className="p-2 text-slate-300 hover:bg-white/5 rounded-full transition-all flex items-center justify-center">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-slate-300 hover:bg-white/5 rounded-full transition-all flex items-center justify-center">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
        <div className="flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="text-right">
            <p className="text-sm font-bold text-on-surface">Analyst Profile</p>
            <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Tier 1 Analyst</p>
          </div>
          <img
            alt="Analyst Profile"
            className="w-10 h-10 rounded-full border-2 border-primary-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxo68izlWSeT8GT0K3ZeFNTsh1e-a8Fa1HkC9byYf-FCfFLoa0WlQHBNYoOGUHFP7bgEbmSCnX5cyeNA3TrswBjtHvAy1kQxUx0QbKGpaZl_U2IdMZd9WcA4SYorFobf_1y1pF2ejiB8Wq3jAziTJJSPV2GOow2wToUJ9qxBInYlx4KPJ4S_RleWwVEz0Jr-WAV9WO60WRNiYmmfTemIbuH1t6QJYWwtZUkRMM951JFYgtAF_7sATaz0dzxA4UL6BSI1dUvEzfOKA"
          />
        </div>
      </div>
    </header>
  );
}
