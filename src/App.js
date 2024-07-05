import React from 'react';
import './App.css';
import BestSellingComputersChart from './components/BestSellingComputersChart';
import ChartOtherData1 from './components/ChartOtherData1';
import ChartOtherData2 from './components/ChartOtherData2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gráficas de Ventas</h1>
        <BestSellingComputersChart />
        <ChartOtherData1 />
        <ChartOtherData2 />
      </header>
    </div>
  );
}

export default App;
