import { useSettings } from '../contexts/SettingsContext';

const Header = () => {
  const { user, setUser, isLoggedIn, darkMode, lang, toggleDarkMode } =
    useSettings();

  return (
    <header>
      <div>
        {isLoggedIn() ? (
          <>
            <p>{user.name}</p>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <button onClick={() => setUser({ name: 'cetin' })}>Login</button>
        )}
        <p>Mode: {darkMode ? 'dark' : 'light'}</p>
        <p>Lang: {lang}</p>
        <button onClick={toggleDarkMode}>
          {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </header>
  );
};

export default Header;
