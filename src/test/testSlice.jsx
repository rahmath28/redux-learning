import { createSlice } from "@reduxjs/toolkit";

// initia state ah intha mari uhm vachhukkalam..
const initialState = { value: "rahmath" };

const testSlice = createSlice({
    name:"test", // ithu vanthu intha slice file kana name..
    initialState:{value:"rahmath"},
    reducers:{ // we create a functions inside it..
        updateText:(state, action) =>{
          state.value = action.payload // na click pannupothu , intha function oda payload la pass pandratha , state value va update pandren..
        },
        reset:(state, action)=>{
            state.value = initialState.value; // Reset using the original value dynamically
        }
    }
})
// export the entire slice file to pass in the store reducer , and also functons created .
export default testSlice.reducer; // entire slice file na .reducer : nu export pannanum , then provide it to store.js

export const {updateText , reset} = testSlice.actions; // function na : . actions nu export pannanum


