import React, { useState } from 'react';
import { Dashboard } from '../components/Dashboard';
import { Participants } from './Participants';
import { ThemeProvider } from '../context/ThemeContext';
import { Layout } from '../components/Layout';
import '../index.css';

function App() {
  const [view, setView] = useState<'dashboard' | 'participants'>('dashboard');
  const [candidateName, setCandidateName] = useState('');

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Layout currentView={view} onNavigate={setView}>
        {view === 'dashboard' ? (
          <Dashboard
            onViewAll={() => setView('participants')}
            setGlobalName={setCandidateName}
          />
        ) : (
          <Participants
            onBack={() => setView('dashboard')}
            currentName={candidateName}
          />
        )}
      </Layout>
    </ThemeProvider>
  );
}

export default App;
