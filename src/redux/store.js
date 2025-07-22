import { configureStore, createSlice } from "@reduxjs/toolkit";
import cart from "./cartSlice";

// 생성한 것
const test = createSlice({
  name: 'test',
  initialState: 'hello'
})

const item = createSlice({
  name: 'item',
  initialState: ['apple', 'banana']
})

// // 장바구니 저장용 데이터
// // 임시품목 설정
// const cart = createSlice({
//   name:'cart',
//   initialState: [
//     {id:0, title:'apple', count:3},
//     {id:2, title:'watermelon', count:10}
//   ]
// })

const num = createSlice({
  name:'num',
  initialState: 1,
  // 변경함수 부분 = 액션들
  reducers: {
    changenum() {
      return 10
    },
    plusNum(state){
      // return에 변경할 값을 적기
      // 기존 값을 가져오기 위해서는 매개변수 부분에 state를 써서 
      // 현재 상태가 가지고 있는 값을 가져온다. 
      return state+1;
    },
    nPlusNum(state, action){
      // 매개변수를 보내서 현재 값에 영향을 주는 것
      // action으로 매개변수를 받음 / state는 현재 값
      console.log(action);
      // 액션에서 받은 값이 payload로 들어간다.
      return state + action.payload
    }
  }
})

const obj = createSlice({
  name: 'obj',
  initialState: {name:'hong', age: 20},
  // 나이 변경 함수 만들기
  reducers: {
    changeAge(state, action) {
      // 배열을 깨지 않고 바로 쓸 수 있도록 할 수 있는 것
      // redux에서만 가능
      state.age = action.payload;
    }
  }
})


// actions는 변경함수들을 가지고 있다. 
// 만들어둔 변경함수들을 객체 형태로 추출 가능
// 구조분해 할당과 export를 한번에 작성한 형태
export const { changenum, plusNum, nPlusNum } = num.actions
export const { changeAge } = obj.actions

// 외부에서 사용가능하게 지정한 것
export default configureStore({
  reducer:{
    test: test.reducer,
    item: item.reducer,
    // cartSlice에 있는 걸 import해야 함
    // Slice를 분리해서 최종 하나에는 import해서 configureStore만 쓴다. 
    cart: cart.reducer,
    num: num.reducer,
    obj: obj.reducer,
  }
})