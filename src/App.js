import React, { useState } from 'react';

import Header from './UI/Header/Header';
import AddExpense from './expenses/components/AddExpense';
import Router from './shared/Router/Router';

import './CSSVars.scss';

function App() {
  const [showModal, setShowModal] = useState(false);

  const showModalHanlder = () => {
      setShowModal(true);
  }
  const hideModalHanlder = () => {
      setShowModal(false);
  }
  return (
    <>
      {showModal && <AddExpense onClose={hideModalHanlder} />}

      <Header onShowModal={showModalHanlder} />
      <Router />
    </>
  );
}

export default App;
