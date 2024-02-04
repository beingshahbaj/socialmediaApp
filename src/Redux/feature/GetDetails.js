import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

  


const DetailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getPost: (state = initialState, action) => { 
      state.length = 0;
      state.push(action.payload);
    }
  },
 

})


export const { getPost } = DetailSlice.actions;
 
export default DetailSlice.reducer;