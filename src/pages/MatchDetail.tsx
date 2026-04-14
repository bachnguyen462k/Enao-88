import React from 'react';

export default function MatchDetail() {
  return (
    <div className="space-y-8">
      {/* Scoreboard Hero Area */}
      <section className="relative rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant shadow-sm">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA9YJv_Tt6b488NKFYXeyl66JhnrWV_pq5dvD872ZZZyjYH59drvBZzPFwoaTIF1n7cWgDrclg0_MNOCA1OmaUhHmD52uX2ZkoJh80KHqc5D1XsOXqlV6y4n75wrAPaJk9D90Dir5C8asMyPOt7-0bYZNYOeq7I2xPFa3aayyQIwcc1rxdqWD857IuLcOUAUpO22_GCR2SvTChaXdyR87tXWZ3sapmZI1oaAx6EIz5w2qkh4WOPXO1aZ4vtQBBsVy7_hWXgm7luz4"
          />
        </div>
        <div className="relative z-10 p-12 flex flex-col items-center">
          <div className="text-secondary font-bold text-sm tracking-widest mb-6 uppercase">Ngoại hạng Anh — Vòng 24</div>
          <div className="flex items-center justify-center gap-16 w-full max-w-4xl">
            {/* Home Team */}
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-24 h-24 mb-4 drop-shadow-[0_0_15px_rgba(0,109,53,0.2)]">
                <img
                  alt="Arsenal FC"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv6l0PchehK2Nm6bSUppZ7E8KeuGkxzrvMFtFLFo7zeESpua8ohZIMOeyDR31rBHwRm88-vnlgEAdmHWa1Nuh6vP5dgt2ev26z0uWbiybASZrMY5ZH4VdnJ3BhS-_bEtITyvsi9zQ_EtjODW4IbidT1-NGoZ99JM6lxufKTMj2jDtSe-HDoQuUTtKWKBEAF2iB0JjJjIdYHb2rn_a76wRl7joVuNcBp9LwomFLptGNbSNeXShOROUg84g6EucafKyom2NSIJKsYe4"
                />
              </div>
              <h2 className="text-3xl font-black tracking-tight font-headline text-on-surface">ARSENAL</h2>
              <span className="text-slate-500 text-sm mt-1">Phong độ: T-T-B-T</span>
            </div>
            {/* Score/Time */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-6">
                <span className="text-7xl font-black text-on-surface tracking-tighter">2</span>
                <span className="text-4xl font-bold text-slate-400">:</span>
                <span className="text-7xl font-black text-on-surface tracking-tighter">1</span>
              </div>
              <div className="mt-4 px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary rounded-sm text-xs font-bold tracking-widest animate-pulse">
                TRỰC TIẾP 74'
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
              <h2 className="text-3xl font-black tracking-tight font-headline text-on-surface">CHELSEA</h2>
              <span className="text-slate-500 text-sm mt-1">Phong độ: B-H-T-B</span>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Column: AI & Stats */}
        <div className="col-span-12 lg:col-span-8 space-y-8">
          {/* AI Insights Section */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 p-6">
              <div className="bg-secondary text-on-secondary px-3 py-1 rounded-sm text-[10px] font-black tracking-tighter flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">verified</span> ĐÃ XÁC ĐỊNH KÈO GIÁ TRỊ
              </div>
            </div>
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-primary">psychology</span>
              Công cụ Phân tích AI
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Probabilities */}
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-500 uppercase">
                    <span>Xác suất Chủ thắng</span>
                    <span className="text-primary">64.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-primary shadow-[0_0_8px_rgba(0,109,53,0.2)]" style={{ width: '64.2%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-500 uppercase">
                    <span>Xác suất Hòa</span>
                    <span className="text-on-surface">21.5%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400" style={{ width: '21.5%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold tracking-tight text-slate-500 uppercase">
                    <span>Xác suất Khách thắng</span>
                    <span className="text-on-surface">14.3%</span>
                  </div>
                  <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary" style={{ width: '14.3%' }}></div>
                  </div>
                </div>
              </div>
              {/* Confidence Score */}
              <div className="flex flex-col items-center justify-center bg-surface-container rounded-xl p-6 border border-outline-variant">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">Điểm tin cậy</span>
                <div className="text-5xl font-black text-primary">9.2</div>
                <div className="text-xs text-primary/80 font-bold mt-1">Luồng độ chính xác cao</div>
                <div className="mt-4 text-[10px] text-slate-500 text-center leading-relaxed">
                  Mô hình Neural đã xử lý 1.2 triệu điểm dữ liệu lịch sử cho trận đấu này.
                </div>
              </div>
            </div>
          </div>
          {/* Match Stats Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center border border-outline-variant shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Kiểm soát bóng</span>
              <span className="text-2xl font-bold text-on-surface">58% - 42%</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center border border-outline-variant shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">xG (Kỳ vọng)</span>
              <span className="text-2xl font-bold text-on-surface">2.41 - 1.08</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center border border-outline-variant shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Sút trúng đích</span>
              <span className="text-2xl font-bold text-on-surface">7 - 3</span>
            </div>
            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col items-center justify-center border border-outline-variant shadow-sm">
              <span className="text-[10px] font-bold text-slate-500 uppercase mb-2">Phạt góc</span>
              <span className="text-2xl font-bold text-on-surface">5 - 2</span>
            </div>
          </div>
          {/* H2H Section */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant shadow-sm">
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2 uppercase tracking-tight text-on-surface">
              <span className="material-symbols-outlined text-secondary">history</span>
              Lịch sử đối đầu
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant">
                <span className="text-xs font-bold text-slate-500">22 TH10 2023</span>
                <div className="flex items-center gap-8 font-bold text-on-surface">
                  <span>Chelsea</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">2 - 2</span>
                  <span>Arsenal</span>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">NGOẠI HẠNG ANH</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant">
                <span className="text-xs font-bold text-slate-500">02 TH5 2023</span>
                <div className="flex items-center gap-8 font-bold text-on-surface">
                  <span>Arsenal</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">3 - 1</span>
                  <span>Chelsea</span>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">NGOẠI HẠNG ANH</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface-container rounded-lg border border-outline-variant">
                <span className="text-xs font-bold text-slate-500">06 TH11 2022</span>
                <div className="flex items-center gap-8 font-bold text-on-surface">
                  <span>Chelsea</span>
                  <span className="bg-surface-container-highest px-3 py-1 rounded text-primary">0 - 1</span>
                  <span>Arsenal</span>
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase">NGOẠI HẠNG ANH</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column: Prediction Game */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Core Prediction Game */}
          <div className="bg-surface-container-low rounded-xl p-8 border border-primary/20 sticky top-28 shadow-xl shadow-primary/5">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-primary">edit_square</span>
              Dự đoán của bạn
            </h3>
            <div className="space-y-8">
              {/* Score Inputs */}
              <div className="flex items-center justify-center gap-6">
                <div className="flex-1 flex flex-col items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-2">Chủ nhà</label>
                  <input className="w-20 h-24 bg-surface-container border-b-2 border-outline-variant focus:border-primary text-center text-4xl font-black transition-all outline-none rounded-xl text-on-surface" placeholder="0" type="number" />
                </div>
                <div className="text-3xl font-bold text-slate-300 mt-6">-</div>
                <div className="flex-1 flex flex-col items-center">
                  <label className="text-[10px] font-bold text-slate-500 uppercase mb-2">Khách</label>
                  <input className="w-20 h-24 bg-surface-container border-b-2 border-outline-variant focus:border-primary text-center text-4xl font-black transition-all outline-none rounded-xl text-on-surface" placeholder="0" type="number" />
                </div>
              </div>
              {/* Result Selectors */}
              <div className="grid grid-cols-3 gap-2">
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Chủ</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Hòa</span>
                  </div>
                </label>
                <label className="cursor-pointer group">
                  <input className="hidden peer" name="result" type="radio" />
                  <div className="p-3 text-center rounded-xl bg-surface-container border border-outline-variant peer-checked:bg-primary/10 peer-checked:border-primary peer-checked:text-primary transition-all">
                    <span className="text-[10px] font-bold uppercase tracking-tight">Khách</span>
                  </div>
                </label>
              </div>
              {/* Prediction Stats */}
              <div className="p-4 bg-surface-container rounded-xl border border-outline-variant space-y-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Điểm ước tính</span>
                  <span className="text-primary font-bold">+150 XP</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">Xác suất thành công</span>
                  <span className="text-on-surface font-bold">12.4%</span>
                </div>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-black rounded-xl text-lg hover:shadow-lg hover:shadow-primary/20 transition-all transform active:scale-95 shadow-md">
                Gửi dự đoán
              </button>
              <p className="text-[10px] text-center text-slate-500">
                Dự đoán chính xác để leo lên <a className="text-primary underline" href="#">Bảng xếp hạng</a> và nhận mã thông báo Paddock.
              </p>
            </div>
          </div>
          {/* Featured Market Promo */}
          <div className="rounded-xl overflow-hidden relative p-8 group shadow-lg">
            <div className="absolute inset-0 bg-secondary"></div>
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <img
                className="w-full h-full object-cover grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH2P6Ftu__L8uQrPAqArZey5qVU2VhmWNSsEguk_TEeeq-mmlRoxuAGM0BHMDsItk8SFwxfFkCGO4eo5LHSqpM_mMd-2R9mIuzf0Sc2_8oKgpUVS-1do34Gz7fzdiHZvN0XtSaXrjYC8mFayRF0JgTNFogNiU6fIClcqSOA30P38cEMPE47BATbnewzG4fuEMI-zrDoD9FDP1ypyXqLouIjq4cc9CE-Fc7cAaIIRPNQC_H90cm7XCI2WbDQWIPHORpot21b_Z8sns"
              />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-black text-on-secondary/60 uppercase tracking-widest">Thông tin cao cấp</span>
              <h4 className="text-2xl font-black text-on-secondary leading-tight mt-2">Mở khóa Tỷ lệ Pro?</h4>
              <p className="text-sm text-on-secondary/80 mt-4 leading-relaxed font-medium">
                AI của chúng tôi đã phát hiện sự chênh lệch 12% trong các chỉ số hiệu suất của cầu thủ trong hiệp hai.
              </p>
              <button className="mt-6 px-6 py-2 bg-on-secondary text-secondary font-bold rounded-sm text-xs tracking-widest uppercase">Tìm hiểu thêm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
