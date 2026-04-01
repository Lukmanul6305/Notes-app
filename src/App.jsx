import React, { useState, useEffect, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import ArchiveNotePage from './pages/ArchiveNotePage';
import DetailNotePage from './pages/DetailNotePage';

import { getUserLogged, putAccessToken } from "./utils/network-data";

import LocaleContext from "./contexts/LocaleContext";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'id');

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const navigate = useNavigate();

  useEffect(() => {
    async function checkLoginStatus() {
      const { data, error } = await getUserLogged();
      if (!error) {
        setAuthedUser(data);
      } else {
        setAuthedUser(null);
      }
      setInitializing(false);
    }
    checkLoginStatus();
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('locale', locale);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, locale]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();
    setAuthedUser(data);
    navigate('/home');
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken('');
    navigate('/*')
  }

  const toggleLocale = () => {
    setLocale((prevLocale) => prevLocale === 'id' ? 'en' : 'id');
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
  };

  const localeContextValue = useMemo(() => {
    return { locale, toggleLocale };
  }, [locale]);

  const themeContextValue = useMemo(() => {
    return { theme, toggleTheme };
  }, [theme]);

  if (initializing) {
    return <p className="text-center mt-10">Loading...</p>
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    )
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <header>
            <Navigation logout={onLogout} username={authedUser} />
          </header>
          <main>
            <Routes>
              <Route path='/home' element={<HomePage />} />
              <Route path='/add' element={<AddNotePage />} />
              <Route path='/archive' element={<ArchiveNotePage />} />
              <Route path="/notes/:id" element={<DetailNotePage />} />
            </Routes>
          </main>
        </div>
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;