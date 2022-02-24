import React from 'react';
import './App.css';
import TableList from './components/TableList';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className='App'>
      <NavigationBar />
      <TableList />
    </div>
  );
}

export default App;
