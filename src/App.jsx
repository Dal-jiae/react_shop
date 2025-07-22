import style from './App.module.css'
import data from './mocData'
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import Detail from './pages/Detail'
import About from './pages/About';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './pages/Cart';
import WatchedProduct from './components/WatchedProduct';

// styled-component 기본 사용법
// const 컴포넌트이름지정 = styled.태그명`
//   css속성
// `

const Btn = styled.button`
  background: ${props => props.bg};
  color: ${props => props.bg === 'darkgreen' ? 'white' : 'black'};
  font-size: 30px;
  border: 1px solid olive;
`

// 상속받을 것을 넣어서 수정할 수도 있다. 
const Btn2 = styled(Btn)`
  width: 200px;
  height: 200px;
`

const Div = styled.div`
  padding: 20px;
  background: lightgreen;
`

function App() {
  const [fruit, setFruit] = useState([]);

  useEffect(() => {
      axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
      .then((response)=>{
        // console.log(response);
        setFruit(response.data);
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [])
  
  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]));
  }, [])

  return (
    <div className={style.container}>
      <WatchedProduct fruit={fruit}/>

      <Header />

      {/* 해당 경로에 따라 보이고 안 보이고가 결정된다 */}
      <Routes>
        <Route path='/' element={<MainPage fruit={fruit}/>}/>
        <Route path='/detail/:id' element={<Detail fruit={fruit}/>} />
        <Route path='/test' element={<h1>테스트페이지</h1>}/>
        <Route path='/cart' element={<Cart/>} />
        
        <Route path='/about' element={<About/>}>
          <Route path='intro' element={<div>회사소개</div>}/>
          <Route path='history' element={<div>연혁</div>}/>
          <Route path='loc' element={<div>오시는 길</div>}/>
        </Route>

        <Route path='*' element={<h1>존재하지 않는 페이지</h1>}/>
      </Routes>

      {/* <button onClick={() => {
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/morefruit.json')
          .then((response) => {
            setFruit([...fruit, ...response.data]);
          })
          .catch((error) => {
            console.log(error)
          })
      }}>더보기</button> */}

      <button onClick={() =>{
        axios.get('https://raw.githubusercontent.com/ghkdss/react_sample_data/main/fruit.json')
          .then((response) => {
            console.log(response);
          })
          .catch((error)=>{
            console.log(error);
          })
      }}>과일정보 받아오기</button>

    </div>
     
  )
}

export default App
