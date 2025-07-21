import { configureStore, createSlice } from "@reduxjs/toolkit";

// 생성한 것
const test = createSlice({
  name: 'test',
  initialState: 'hello'
})

const item = createSlice({
  name: 'item',
  initialState: ['apple', 'banana']
})

// 외부에서 사용가능하게 지정한 것
export default configureStore({
  reducer:{
    test: test.reducer,
    item: item.reducer
  }
})