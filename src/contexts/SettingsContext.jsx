import { createContext, useState, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');

  const [user, setUser] = useState(null);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const isLoggedIn = () => user !== null;

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        lang,
        toggleDarkMode,
        user,
        setUser,
        isLoggedIn,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
