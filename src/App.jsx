import React from 'react';
import { SettingsProvider } from './contexts/SettingsContext';
import Header from './components/Header';

function App() {
  return (
    <SettingsProvider>
      <div className="App">
        <Header />
      </div>
    </SettingsProvider>
  );
}

export default App;
