import React from 'react';

export default function Leaderboard() {
  const top3 = [
    {
      rank: 2,
      name: 'Sofia Chen',
      accuracy: '89.2%',
      points: '14,200 ĐIỂM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBnMkAvvNATB3u5AE4_HX1Lv5G0Ofiv8niJYMvu7J-RugdshmasbZuBOmNc6RT1sx1Lf_1LCss0OZm3siDHV9k07E2mqc5gs15UJ5Oo3x_Sk0-LCMJqnc6yKpRVKmeUKt-esMLy5KWeJlnduAoG5i5I_03jqEVtO2GIuT0tTcSWRahpBeO0YwWgdpws6OxJm-9k8G4C8mdk1jF0hp6AhM_ycKHNakqOiQeKDdwGqLkbLbF7SJ1Hk4MmeKPr5_XQ5sgrYXQvzVj-Qy4',
      color: 'slate-400'
    },
    {
      rank: 1,
      name: 'Marcus Vane',
      accuracy: '94.5%',
      points: '18,540 ĐIỂM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdNcMqcJHVmI577ByHPk_oVjHSELLsglVvzlEg2OIeGqIpZPf0zn56MHqlXjyq7BLN88lyMUcvIwRu1CK6z3joyZq_eKjQFqIJUI8qO0IL1DvY7rw4gC2j0xc1AzkGYpYsjzGaohsXAlDqiXlXsv4syR_3Ge1ddzUj2iiAngkfm4a7lWnvnGQVVBOHLe6BNkj09GdwiathdnOkUwZr2hCoTFMZUUFRg1yt-0axTlBS64RGNfb_zYH85pGs7QX3dRCrDNE8TdLGmBA',
      color: 'primary'
    },
    {
      rank: 3,
      name: 'Liam O\'Neill',
      accuracy: '87.8%',
      points: '12,980 ĐIỂM',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZeMhG4eW8q-7ZOlKIpkPqVFyG71jZfQR9MyiD-h9FSPK_lzDMCl9Xjo9V99ljxu7LTgAPQRrxvZCNTkwcOhHOpGUSG8wGXySpwUpELMtnjKJEHhvn1Q-U4EPZ9FE3R8zL795LtfmhWMZmIx5Lh_5vckZ2czWq7uTj4RDosZsDiNXPjV3Nj1FsILlyAzaqaRr95fISUQ6rpqywMiH8I-cx0bO0_Ok9xVtdsqT8T1qabCEIt3ftv2-8F0KaRNsvLnfO5s_7OLVt0e4',
      color: 'tertiary'
    }
  ];

  const rankings = [
    { rank: '04', name: 'Sarah Jenkins', predictions: '1,240', accuracy: '86.2%', points: '11,420', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6uagLzRxkYCxkhy5kbQFD1Fn1bSBzC5MqcWGzMJ470FyiBTHnBlL5FcxCLKQnP1DIjxxtxpDrkMKq0yzJgOkT--zN6UNV2QTjcz3V5SVppbcVKtViRXLmGxdOKR-_Npy0JMhaRUrwnfpy0T8bh2NuzVX987K1orauPxZXbGgVSIi-l_X9uQ2JbgVstTdofZCA1KE1dlyCO9dw5ggQTthzdIGjVg6WtQk_YwWTas2OQ_wiOjnpLnR2-2Vxm0uL5gA9JlP0Qzn_f7o' },
    { rank: '05', name: 'David Miller', predictions: '980', accuracy: '82.1%', points: '10,850', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCiKQtjkDu2-42mxwCtSTTu6YpZ-_34n_QQSXDvzL9jglgyjANdE9k2ryCqZxeGBleX9okRTwDttC44WQXUPgsB4Zj2MxZrnw8dbCkY0VV_JFmoO23Hg_sRimV6AawlEnK25wEB5q8GVkbNRInDllbamsHtITcm47Onuo6dAEvzdy1hhdbOHoEAu3iCOaBmQbYn7n_xaJlFVEGHRvmzTIx7xo1AOvp2_kUSuqAkWgQH3wyirmRVc4nwdj2qleaYR7ejt7mHCojAoM' },
    { rank: '06', name: 'Elena Rossi', predictions: '2,150', accuracy: '79.8%', points: '9,920', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPTvSigLW_-IGLsUzZAoTT997H6XR1l8yFINKlFodxbe6PiR7jB2_uF6iPA2O_yWONKtYEg6e_LC7Xwh4fn120Klox2jLElSofmgWFZfB7X_33uoyvDw9tDP9r0Bh8aNOE9kujOyna_WUWotkaWiLiqS7sw3BN2jsq_65CjZOAL60ila9y8_LlzY0ulk9F40cKPu8FyGzNWjVUugVSpTfFjKRNPV48B0Locu_in5F12RSOTkY0WbKC08QSVKMYJ3ey3KczzxXS4zM' }
  ];

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h1 className="font-headline text-4xl font-black tracking-tight text-on-surface mb-2">Bảng xếp hạng Toàn cầu</h1>
          <p className="text-slate-500 max-w-md">Tầng lớp tinh hoa của trí tuệ dự đoán. Cạnh tranh với các nhà phân tích hàng đầu cho danh hiệu Digital Paddock.</p>
        </div>
        <div className="flex bg-surface-container-low p-1.5 rounded-xl border border-outline-variant shadow-sm">
          <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-on-surface transition-all">Hàng tuần</button>
          <button className="px-6 py-2 rounded-lg text-sm font-bold text-on-primary bg-primary shadow-sm transition-all">Hàng tháng</button>
          <button className="px-6 py-2 rounded-lg text-sm font-bold text-slate-500 hover:text-on-surface transition-all">Tất cả thời gian</button>
        </div>
      </div>

      {/* Top 3 Podium Visual */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16 max-w-5xl mx-auto px-4">
        {top3.map((user) => (
          <div key={user.rank} className={`flex flex-col items-center ${user.rank === 1 ? 'scale-110 relative z-10' : ''}`}>
            <div className={`relative ${user.rank === 1 ? 'mb-6' : 'mb-4'}`}>
              <div className={`absolute ${user.rank === 1 ? '-top-4 -right-4 h-9 w-9 text-[12px]' : '-top-3 -right-3 h-7 w-7 text-[10px]'} bg-${user.color} text-on-primary font-black flex items-center justify-center rounded-full border-4 border-surface shadow-md`}>
                {user.rank}
              </div>
              {user.rank === 1 && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-pulse">
                  <span className="material-symbols-outlined text-secondary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                </div>
              )}
              <img className={`${user.rank === 1 ? 'h-28 w-28' : 'h-20 w-20'} rounded-full border-4 border-${user.color} object-cover shadow-lg`} src={user.image} alt={user.name} />
            </div>
            <div className={`${user.rank === 1 ? 'bg-primary h-64 shadow-2xl shadow-primary/20' : 'bg-surface-container-low h-48 border border-outline-variant shadow-sm'} w-full p-6 rounded-t-2xl text-center flex flex-col justify-end`}>
              <h3 className={`font-headline font-bold text-lg ${user.rank === 1 ? 'text-on-primary font-black text-xl' : 'text-on-surface'}`}>{user.name}</h3>
              <p className={`${user.rank === 1 ? 'text-on-primary/80 font-bold' : 'text-primary font-medium'} text-sm mb-4`}>Độ chính xác {user.accuracy}</p>
              <div className={`${user.rank === 1 ? 'text-on-primary bg-on-primary/10 py-1 px-4 rounded-full font-black' : 'text-slate-500 font-bold'} text-xs uppercase tracking-widest inline-block mx-auto`}>
                {user.points}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Leaderboard Table */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden mb-8 border border-outline-variant shadow-lg">
        <div className="p-6 border-b border-outline-variant flex items-center justify-between bg-surface-container">
          <h2 className="font-headline font-bold text-on-surface">Bảng xếp hạng đầy đủ</h2>
          <div className="text-xs text-slate-500 font-medium">Cập nhật trực tiếp: Làm mới sau 02:45</div>
        </div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-bold border-b border-outline-variant">
              <th className="px-8 py-4">Hạng</th>
              <th className="px-8 py-4">Tên người dùng</th>
              <th className="px-8 py-4">Tổng dự đoán</th>
              <th className="px-8 py-4 text-center">Độ chính xác (%)</th>
              <th className="px-8 py-4 text-right">Tổng điểm</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {rankings.map((user) => (
              <tr key={user.rank} className="hover:bg-surface-container transition-colors group">
                <td className="px-8 py-5">
                  <span className="text-on-surface-variant font-headline font-bold">{user.rank}</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-3">
                    <img className="h-8 w-8 rounded-full object-cover shadow-sm" src={user.image} alt={user.name} />
                    <div>
                      <div className="text-sm font-bold text-on-surface">{user.name}</div>
                      <div className="flex gap-1 mt-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(0,109,53,0.3)]"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/40"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-primary/20"></span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5 text-sm text-slate-500">{user.predictions}</td>
                <td className="px-8 py-5">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: user.accuracy }}></div>
                    </div>
                    <span className="text-sm font-bold text-primary">{user.accuracy}</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-right font-headline font-bold text-on-surface">{user.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-6 text-center border-t border-outline-variant bg-surface-container">
          <button className="text-primary text-sm font-bold hover:underline">Xem thêm nhà phân tích</button>
        </div>
      </div>

      {/* My Rank Sticky/Featured Card */}
      <div className="fixed bottom-8 right-8 w-80 bg-surface-container-low border border-primary/20 rounded-2xl p-6 shadow-2xl shadow-primary/5 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 blur-[60px]"></div>
        <div className="relative flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full border-2 border-primary overflow-hidden shadow-sm">
              <img className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPd6_38K0HNMk_0WVzkcaNghuppBU7pX5XgbEOtR-SIhQ4MJUrMYwuAlxleSdadgKQsps47FTp8EHn1PGGpeV_bq9U_IW0jfD_roVkB37f4b6jX84QxgMr-3VNfyrpRaN28FFZfPv0_Yhz4toHQzx-e5AkeJ_2-pMdpYaqGxj_CUobXF8i3ZPrIH2p6Ge3RwRUzx5P7gx2izaScOd--vNUKiqPRnqB2tVnCdhKh8gGWjYwFe-0LAbVbnpe7Ne1QDU9fJHFKJE9Yto" alt="My Profile" />
            </div>
            <div>
              <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Hạng hiện tại của tôi</div>
              <div className="text-on-surface font-headline font-extrabold">Alex Rivera</div>
            </div>
          </div>
          <div className="text-3xl font-headline font-black text-primary">#42</div>
        </div>
        <div className="grid grid-cols-2 gap-4 relative">
          <div className="bg-surface-container p-3 rounded-xl border border-outline-variant">
            <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Tổng điểm</div>
            <div className="text-on-surface font-headline font-bold text-lg">6,840</div>
          </div>
          <div className="bg-surface-container p-3 rounded-xl border border-outline-variant">
            <div className="text-[9px] text-slate-500 uppercase font-bold mb-1">Độ chính xác</div>
            <div className="text-primary font-headline font-bold text-lg">74.2%</div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="text-[10px] text-slate-500">Chuyên gia Cấp 12</div>
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-[10px] border-2 border-surface shadow-sm">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
            <div className="h-6 w-6 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center text-[10px] border-2 border-surface shadow-sm">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
