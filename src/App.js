import data from './data';
import List from './List';
import './App.css';
import { useState } from 'react';

function App() {
  const [pepole,setpepole] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{pepole.length} birthdays today</h3>
        <List pepole={pepole} />
        <button onClick={() => setpepole([])}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
