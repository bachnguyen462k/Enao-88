import React from 'react';

export default function Matches() {
  const matches = [
    {
      league: 'Ngoại hạng Anh • Vòng 9',
      status: 'Trực tiếp • 64\'',
      isLive: true,
      tv: 'TV: SKY SPORTS',
      homeTeam: { name: 'Arsenal', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZWgDtvwvTYBMECf_cgHypYQhdoU8GliXomq7BCgt4FByxyVah1Klkl63-grz1Y41JJ_FJ_PYujrrBk-bkoXloYv5IRfUBvhzHk-W0MTd2t8B4ju-UKabXBkMBZCeuMoMgXvXMhQPNf7fO2ZkzKT2v3roN74-f6lm6p4cVtoLC_o0bUJwcKwnLVx4_vrCP2LwNcPbnkh-uucwpQPaJGdvfunWLDUnCZbGlrbCe89RG21FnDiy1AjvqC_NPl0BY4A6P9GS-yui0y0I' },
      awayTeam: { name: 'Liverpool', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQvcIjJHBf0Ce1AepFQPJz4zD4mYwHHKXLI9pRmWS1N-adCcFdpB3XF7C-2_0zRcYy246j2go-ErZ2EVeU_bamS4Zw3PDkXyimXlCPCi6v1IUL-jEpGF7NBmDH2GdNXbuHUUeqorY1-ySn8Nk8sz8DMeclfOsaMtbCToVV49khRlU90onluVMd8Lc8r-9nwEU7uMm6YlgcJdxnzvdpWssPMkK0f_refyG7hqR0_zMDp-qHvS18DTTWRtSte3UjnR2XEdi7ugvc23s' },
      score: '2 - 1',
      stadium: 'Sân vận động Emirates',
      odds: { home: '2.10', draw: '3.40', away: '3.25' },
      accuracy: '88%',
      probabilities: { home: 55, draw: 25, away: 20 }
    },
    {
      league: 'La Liga • Vòng 11',
      status: '28 Th10 • 20:00',
      isLive: false,
      tv: 'TRƯỚC TRẬN',
      homeTeam: { name: 'Real Madrid', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeHa7unfRbtELnYrHx_7iNhvjYJHR3mSmevbT-2sDd0qNj4UH-M8yzEnWpnX_8a5tHr5PmbztLfd2jCSZWY7XtTBVLAWvm_xDx4LksCw11Okea9C0isJuGNTvVAN6gcz-5InhiR4kFpsWxZUQpX5HWMx_eXWJThvOyf_mm73S1HjvqkQYc_0mg24_c81nKN43biWu7Kzox0MVKQuorEE2GpNf15F-ai5dRvO8d_kw7lPGjypkCO7F5RPV61JTPkNNaUTypcyHoX_k' },
      awayTeam: { name: 'Barcelona', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgkZCOFoqUe-UTSiIiX_zumyes8eTvEA9T6UaKD-sXbX8zhd2ThVhxN_8LC9RX-boxRyq8sUjs9njis4qYuYH1yOrJm1muyrdLi6CX9tdRXxLYd1jHxGwoRIwHFhW6NOQOWmiMsiGmvMhsln4kOacwRQNG-6S4-qoYrPQY-uWykk4t9Y79UvL9q4h9Y-u6yZfGhTiJ9iRhF_z8-oJnusTipS-zCQuz17S1PcbZuImGuWpySIHG6xl-PsFYxBQYtI8SpXwBQNTHP-k' },
      score: 'VS',
      stadium: 'Santiago Bernabéu',
      odds: { home: '1.85', draw: '3.80', away: '4.20' },
      accuracy: '92%',
      probabilities: { home: 48, draw: 22, away: 30 }
    },
    {
      league: 'Serie A • Vòng 10',
      status: '28 Th10 • 18:30',
      isLive: false,
      tv: 'TRƯỚC TRẬN',
      homeTeam: { name: 'AC Milan', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYVklDMklQE5JgLyyPZnjyUu8EPgZ3aqJgcRbkQ_75mDcOVU5ern5B-QAJJZXYfvbKgfESaa0BaDq4Mpr8WFWvzANwl_GsQhwzSZWRipeLlvpsBFLovXGyPnU4S299As1kKs1BWOAbaT_UdEHBrfp7J1-V6dK6TLbqAISk-PydCiPYnSC8uu_ezspwiFLQrEs8-7QB5c_GumnqdvM6A0wLDY6G8v2qCGWJNY4KwI9EAAtL3jYhssvXlLmxHgaqanuhvCBk21uzrd0' },
      awayTeam: { name: 'Juventus', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3FnTaVHWga-QMykG_bdn_8qvftvJaFBtu6N5Da81LEXK6ECGWicqvPqS1-LgXMEzUHU5vj3-XpMpHYlEHsSjH6UITttJgLZtfwJoHlf46TBfjZmcWf9n3EdHBY3g5uVq3HmpihfFezOirU378G9JNiFF--82P2FKdpxjUVfOSDVV3MJNxlEpi0xI7DoW0dbtGFiazN-kdgAcLhVI3In06fR1Jrw6044kValxjeOwNXa_ENgb1Xb6gwX_rkk5jcobvhzgGnGXTO1Q' },
      score: 'VS',
      stadium: 'San Siro',
      odds: { home: '2.45', draw: '3.10', away: '2.95' },
      accuracy: '85%',
      probabilities: { home: 38, draw: 32, away: 30 }
    },
    {
      league: 'Bundesliga • Vòng 9',
      status: '29 Th10 • 15:30',
      isLive: false,
      tv: 'TRƯỚC TRẬN',
      homeTeam: { name: 'Bayern Munich', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDD-0xVhsnpoFER_PCAzd74ruhXh7NGpcKZ08qQubyMWu2cKdtviDXHWbJMk1UytGXiHw76pJwym7e4PjYXXz6RYxlZVjhO2m-SvgyI1iWxm2Yg9M_S0XEGC1vvjfmKgvKjfsXU7oenPlR9eteIczlpAyu55fqaVZJucSwGq0juPl50__01ouRpArCPxNeGf6cSK5dlOKHa2j5b8ghnvGjXV7hHYzXfRgpssEj4fba_Z3lRSWOiUMk44xcyepz4n7WZ9tVcqle3HBA' },
      awayTeam: { name: 'B. Dortmund', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPy-ZD-NswaHhVxhDEFfPVFrFJ_lQ53CItn1yyV3B_3vJ8NEEJxOpQfNH-Ki4DRZzz1tfCwGX9o4GrJ0x09_kamzr0e2oTEEN34QOEfs-fAz2iz8u1a4zl3oTFmA4iNMZ42L4-mL9DA_Gb8d3eDBp7FzJPG1OUnqtzurdRUhgFTqLHHi929G5p-xT9Ui1GJ1s7usyqPS3af3658eVfr4cB5xieggKDS9YpPXofI9cRgKuPcZE4T7SG2mCWcAiVeznkFFEvKW_oszU' },
      score: 'VS',
      stadium: 'Allianz Arena',
      odds: { home: '1.45', draw: '4.50', away: '6.00' },
      accuracy: '95%',
      probabilities: { home: 68, draw: 17, away: 15 }
    }
  ];

  return (
    <div>
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-surface-container text-on-surface rounded-lg border border-outline-variant hover:bg-surface-container-highest transition-all shadow-sm">
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span className="text-sm font-medium">24 Th10, 2023</span>
          </button>
          <div className="h-8 w-[1px] bg-outline-variant mx-2"></div>
          <div className="flex bg-surface-container-low p-1 rounded-xl gap-1 border border-outline-variant">
            <button className="px-4 py-1.5 text-xs font-bold bg-primary text-on-primary rounded-lg shadow-sm">Tất cả</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-on-surface transition-colors">Trực tiếp</button>
            <button className="px-4 py-1.5 text-xs font-bold text-slate-500 hover:text-on-surface transition-colors">Sắp tới</button>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-surface-container text-on-surface border border-outline-variant text-xs font-bold rounded-lg py-2 px-4 focus:ring-1 focus:ring-primary/30 cursor-pointer appearance-none pr-10 relative shadow-sm">
            <option>Ngoại hạng Anh</option>
            <option>La Liga</option>
            <option>Bundesliga</option>
            <option>Serie A</option>
          </select>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {matches.map((match, idx) => (
          <div key={idx} className="bg-surface-container-low rounded-xl p-6 relative overflow-hidden group border border-outline-variant hover:border-primary/40 transition-all duration-300 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold tracking-widest text-primary uppercase">{match.league}</span>
                <div className="flex items-center gap-2">
                  {match.isLive && <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>}
                  <span className={`text-xs font-bold uppercase tracking-tighter ${match.isLive ? 'text-on-surface' : 'text-slate-500'}`}>{match.status}</span>
                </div>
              </div>
              <div className="bg-surface-container-highest px-3 py-1 rounded-sm text-[10px] font-bold text-on-surface-variant">{match.tv}</div>
            </div>
            <div className="flex items-center justify-between mb-8">
              {/* Home Team */}
              <div className="flex flex-col items-center gap-3 flex-1">
                <img alt={match.homeTeam.name} className="w-16 h-16 object-contain" src={match.homeTeam.logo} />
                <span className="text-sm font-headline font-extrabold text-on-surface">{match.homeTeam.name}</span>
              </div>
              {/* Score/Time */}
              <div className="flex flex-col items-center justify-center px-4">
                <div className={`font-headline font-black tracking-tighter ${match.score === 'VS' ? 'text-xl text-slate-400 uppercase' : 'text-4xl text-on-surface'}`}>{match.score}</div>
                <div className="text-[10px] font-bold text-slate-500 mt-2">{match.stadium}</div>
              </div>
              {/* Away Team */}
              <div className="flex flex-col items-center gap-3 flex-1">
                <img alt={match.awayTeam.name} className="w-16 h-16 object-contain" src={match.awayTeam.logo} />
                <span className="text-sm font-headline font-extrabold text-on-surface">{match.awayTeam.name}</span>
              </div>
            </div>
            {/* Odds & Probability Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-surface-container p-3 rounded-xl border border-outline-variant flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-500 mb-1">CHỦ</span>
                  <span className={`text-sm font-headline font-black ${idx === 0 ? 'text-primary' : 'text-on-surface'}`}>{match.odds.home}</span>
                </div>
                <div className="bg-surface-container p-3 rounded-xl border border-outline-variant flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-500 mb-1">HÒA</span>
                  <span className="text-sm font-headline font-black text-on-surface">{match.odds.draw}</span>
                </div>
                <div className="bg-surface-container p-3 rounded-xl border border-outline-variant flex flex-col items-center">
                  <span className="text-[10px] font-bold text-slate-500 mb-1">KHÁCH</span>
                  <span className="text-sm font-headline font-black text-on-surface">{match.odds.away}</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-[10px] font-bold text-slate-500">
                  <span>XÁC SUẤT AI THẮNG</span>
                  <span className="text-primary">{match.accuracy} ĐỘ CHÍNH XÁC</span>
                </div>
                <div className="h-1.5 w-full bg-surface-container-highest rounded-full flex overflow-hidden">
                  <div className="h-full bg-primary shadow-[0_0_8px_rgba(0,109,53,0.2)]" style={{ width: `${match.probabilities.home}%` }}></div>
                  <div className="h-full bg-slate-300" style={{ width: `${match.probabilities.draw}%` }}></div>
                  <div className="h-full bg-slate-400" style={{ width: `${match.probabilities.away}%` }}></div>
                </div>
                <div className="flex justify-between text-[9px] font-bold text-slate-500 mt-1">
                  <span>{match.probabilities.home}% Chủ</span>
                  <span>{match.probabilities.draw}% Hòa</span>
                  <span>{match.probabilities.away}% Khách</span>
                </div>
              </div>
              <button className="w-full py-3.5 bg-surface-container-highest hover:bg-surface-bright text-on-surface font-headline font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 group/btn border border-outline-variant shadow-sm">
                Dự đoán tỷ số
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">trending_flat</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination / Load More */}
      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-surface-container border border-outline-variant text-on-surface font-headline font-bold text-sm rounded-full hover:bg-surface-container-highest transition-all shadow-sm">
          Tải thêm trận đấu
        </button>
      </div>
    </div>
  );
}
