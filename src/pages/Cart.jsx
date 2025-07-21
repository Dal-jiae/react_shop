import { Table } from "react-bootstrap"
import { useSelector } from "react-redux";

function Cart() {
  const test = useSelector((state)=>{ // store에 있는 것을 모두 꺼내라는 뜻
    return state.test
  })

  const item = useSelector(state => state.item)

  console.log(test);
  console.log(item);
  

  return(
    <Table>
      <thead>
        <tr>
          <th>번호</th>
          <th>상품명</th>
          <th>수량</th>
          <th>수정</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>1</th>
          <th>apple</th>
          <th>10</th>
          <th>수정하기</th>
        </tr>
      </tbody>
    </Table>
  )
}

export default Cart;