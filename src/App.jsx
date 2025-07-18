import './App.css'
import data from './mocData'
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';

function App() {
  const [fruit, setFruit] = useState(data);

  return (
    <div>
      <Header />

      {/* 해당 경로에 따라 보이고 안 보이고가 결정된다 */}
      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>}/>
        <Route path='/test' element={<h1>테스트페이지</h1>}/>
      </Routes>

    </div>
     
  )
}

export default App
