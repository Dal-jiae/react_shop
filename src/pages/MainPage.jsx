import Card from "../components/Card"
import bg from "../bg.jpg"


function MainPage({fruit}) {
  return(
    <>
    <div className="main-bg" style={{backgroundImage: `url(${bg})`}}>
      </div>

      <div className='container'>
        <div className="row" >
          {
            // 과일 수만큼 반복을 돌리기 위해 fruit
            // 반복할 때마다 과일 배열에 있는 정보가 하나씩 들어간다.
            // fruit 배열을 돌면서 data라는 이름으로 하나씩 꺼냄
            // 그 data를 <Card> 컴포넌트의 fr이라는 props로 전달
            fruit.map((data,i) => {
              return (
                <Card fr={data} key={i}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default MainPage