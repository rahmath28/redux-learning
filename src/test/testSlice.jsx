import { createSlice } from "@reduxjs/toolkit";

// 👇 Define it here so it can be reused in the reset function
const initialState = { value: "rahmath" };

const testSlice = createSlice({
    name:"test", // ithu vanthu intha slice file kana name..
    initialState:{value:"rahmath"},
    reducers:{
        updateText:(state, action) =>{
          state.value = action.payload // na click pannupothu , intha function oda payload la pass pandratha , state value va update pandren..
        },
        reset:(state, action)=>{
            state.value = initialState.value; // Reset using the original value dynamically
        }
    }
})
// exporting the reducer
export default testSlice.reducer;

export const {updateText , reset} = testSlice.actions; // this is a way of exporting a function..


