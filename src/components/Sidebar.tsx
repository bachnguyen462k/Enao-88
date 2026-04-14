import React from 'react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: 'home' },
    { id: 'matches', label: 'Trận đấu', icon: 'sports_soccer' },
    { id: 'live', label: 'Trực tiếp', icon: 'sensors' },
    { id: 'ai-predictions', label: 'Dự đoán AI', icon: 'psychology' },
    { id: 'my-predictions', label: 'Dự đoán của tôi', icon: 'history_edu' },
    { id: 'leaderboard', label: 'Bảng xếp hạng', icon: 'leaderboard' },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 z-50 flex flex-col py-8 px-4 bg-surface-container-low border-r border-outline-variant shadow-sm">
      <div className="mb-10 px-4">
        <span className="text-xl font-black text-primary tracking-widest font-headline">PADDOCK AI</span>
        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">Viễn thông chính xác</p>
      </div>
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onPageChange(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-headline font-bold tracking-tight text-sm ${
              activePage === item.id
                ? 'text-primary bg-primary/10 border-r-4 border-primary'
                : 'text-slate-500 hover:text-primary hover:bg-primary/5'
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-auto px-2">
        <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[0.98] active:scale-[0.95] transition-transform">
          Nâng cấp Pro
        </button>
      </div>
    </aside>
  );
}
