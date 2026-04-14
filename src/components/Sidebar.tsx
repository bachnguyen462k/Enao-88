import React from 'react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'matches', label: 'Matches', icon: 'sports_soccer' },
    { id: 'live', label: 'Live', icon: 'sensors' },
    { id: 'ai-predictions', label: 'AI Predictions', icon: 'psychology' },
    { id: 'my-predictions', label: 'My Predictions', icon: 'history_edu' },
    { id: 'leaderboard', label: 'Leaderboard', icon: 'leaderboard' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-50 flex flex-col py-8 px-4 bg-[#131b2e] border-none shadow-r shadow-black/20">
      <div className="mb-10 px-4">
        <span className="text-xl font-black text-[#00E676] tracking-widest font-headline">PADDOCK AI</span>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">Precision Telemetry</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-headline font-bold tracking-tight text-sm ${
              activePage === item.id
                ? 'text-[#00E676] bg-[#171f33] border-r-4 border-[#00E676]'
                : 'text-slate-400 hover:text-[#00E676] hover:bg-[#171f33]'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto px-2">
        <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] active:scale-[0.95] transition-transform">
          Upgrade to Pro
        </button>
      </div>
    </aside>
  );
}
