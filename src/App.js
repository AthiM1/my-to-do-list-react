import React from 'react';
import './App.css';
import TodoApp from './todo-list'
import Footer from './footer'
import Head from './navbar'

function App() {
  return (
    <div className="App">
      < Head/>
      <TodoApp />
      < Footer />
   
    </div>
  );
}

export default App;
