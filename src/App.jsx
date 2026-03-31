import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import './App.css'
import RegisterPage from './pages/RegisterPage';

import { getUserLogged, putAccessToken } from "./utils/network-data";
import LoginPage from './pages/LoginPage';

import Navigation from './components/Navigation';
import { useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddNotePage from './pages/AddNotePage';
import ArchiveNotePage from './pages/ArchiveNotePage';
import DetailNotePage from './pages/DetailNotePage';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setinitializing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkLoginStatus() {
      const { data, error } = await getUserLogged();

      if (!error) {
        setAuthedUser(data);
      } else {
        setAuthedUser(null);
      }
      setinitializing(false);
    }
    checkLoginStatus();
  }, [])

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

  if (initializing) {
    return <p>Loading...</p>
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path='/*' element={<LoginPage loginSuccess={onLoginSuccess} />} />
        <Route path='/register' element={<RegisterPage loginSuccess={onLoginSuccess} />} />
      </Routes>
    )
  }

  return (
    <div>
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
  )
}

export default App
