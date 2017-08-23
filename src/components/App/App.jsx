import React from 'react';

import './App.css';

import MessageList from '../MessageList';

const App = () => {
  return (
    <div className="app-wrapper">
      <h1>Messages</h1>
      <MessageList />
    </div>
  );
};

export default App;