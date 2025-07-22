import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name:'cart',
  initialState: [
    {id:0, title:'apple', count:3},
    {id:2, title:'watermelon', count:10}
  ],
  reducers: {
    addCount(state, action){
      state[action.payload].count ++;
    }, 
    // 주문하기 버튼을 누르면 장바구니에 담기게 만들기 위한 함수
    addItem(state, action) {
      // state.push(action.payload);
      // state가 현재 있는 품목, action.payload가 선택한 상품
      // 판단 기준을 어떤 걸로 할 건지 e.g. id, title
      // 상품들을 식별하는 값이 id
      // 주문하기 누른 id가 장바구니에 있는지 없는지를 검사해보면 될 듯하다
      
      // findIndex 함수 :  조건식에 만족하는 인덱스를 리턴, 없으면 -1 리턴
      let index = state.findIndex(data => {
        return data.id == action.payload.id
      })

      if( index !== -1 ) {
        state[index].count++;
      } else {
        state.push(action.payload);
      }
    },
    removeItem(state, action) {
      state.splice(action.payload, 1);
       
    }
  }
})


export default cart;
export const { addCount, addItem, removeItem } = cart.actions