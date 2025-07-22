import Card from "../components/Card"
import bg from "../bg.jpg"
import { useState } from "react";


function MainPage({ fruit }) {
  const [fruitCount, setFruitCount] = useState(3); // 화면에 나오는 상품 수 설정하기 위한 초기값
  
  const visibleFruit = fruit.slice(0, fruitCount); // .slice(원하는 처음 인덱스 번호, 원하는 수만큼)
  // console.log(visibleFruit);

  return(
    <>
      <div className="MainPage main-bg" style={{backgroundImage: `url(${bg})`, height:'300px'}}>
      </div>

      <div className='container'>
        <div className="row" >
          {
            // 과일 수만큼 반복을 돌리기 위해 fruit
            // 반복할 때마다 과일 배열에 있는 정보가 하나씩 들어간다.
            // fruit 배열을 돌면서 data라는 이름으로 하나씩 꺼냄
            // 그 data를 <Card> 컴포넌트의 data라는 props로 전달
            visibleFruit.map((data,i) => {
              return (
                <Card data={data} key={i}/>
              )
            })
          }
        </div>
      </div>

      {
        // 전체 개수보다 보여주는 개수가 크다면,
        fruitCount > fruit.length ? 
        <div className="alert alert-danger">더이상 상품이 없습니다.</div> 
        : 
        <button onClick={()=>{
          setFruitCount(fruitCount+3);
        }}>3개 더보기</button>
      }

    </>
  )
}

export default MainPage