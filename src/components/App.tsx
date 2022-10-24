import React from 'react';
import Header from './Header';
import Main from './Main';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <Main />
    </div>
  );
};

export default App;
