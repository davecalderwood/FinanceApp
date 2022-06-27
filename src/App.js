import React, { useState } from 'react';

import Header from './UI/Header/Header';
import AddExpense from './expenses/components/AddExpense';
import Router from './shared/Router/Router';

import './CSSVars.scss';
import './Global.scss';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [color, setColor] = useState();

  const showModalHanlder = () => {
    setShowModal(true);
  }
  const hideModalHanlder = () => {
    setShowModal(false);
  }
  return (
    <div style={{ background: color, minHeight: '100vh', paddingBottom: '25px' }}>
      {showModal && <AddExpense onClose={hideModalHanlder} />}

      <Header onShowModal={showModalHanlder} setColor={setColor} />
      <Router />
    </div>
  );
}

export default App;
