import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Matches from './pages/Matches';
import MatchDetail from './pages/MatchDetail';
import MyPredictions from './pages/MyPredictions';
import Leaderboard from './pages/Leaderboard';
import AIPredictions from './pages/AIPredictions';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'matches':
        return <Matches />;
      case 'live':
        return <MatchDetail />; // Using MatchDetail as a placeholder for live view
      case 'ai-predictions':
        return <AIPredictions />;
      case 'my-predictions':
        return <MyPredictions />;
      case 'leaderboard':
        return <Leaderboard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-surface text-on-surface font-body selection:bg-primary/30 selection:text-primary">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      
      <div className="pl-64">
        <Navbar />
        
        <main className="pt-28 pb-12 px-8 max-w-[1600px] mx-auto">
          {renderPage()}
        </main>
      </div>

      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>
    </div>
  );
}
