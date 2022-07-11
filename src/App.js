import React, { useState, useCallback } from 'react';

import Header from './Header/Header';
import AddExpense from './expenses/components/AddExpense';
import Router from './shared/Router/Router';

import { AuthContext } from './shared/Context/auth-context';

import './CSSVars.scss';
import './Global.scss';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState();

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const showModalHanlder = () => {
    setShowModal(true);
  }
  const hideModalHanlder = () => {
    setShowModal(false);
  }
  return (
    <div style={{ background: color, minHeight: '100vh', paddingBottom: '25px', overflowX: 'hidden' }}>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}>
        {showModal && <AddExpense onClose={hideModalHanlder} />}

        <Header onShowModal={showModalHanlder} setColor={setColor} />
        <Router />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
