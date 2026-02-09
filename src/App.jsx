import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div style={{display:'flex', }}>
      <Sidebar/>
      <Header/>
    </div>
  );
}

export default App;
