// sliceFile to manage functionalities of Counter.jsx , antha counter kana slice file ithu..

import { createSlice } from "@reduxjs/toolkit"; // create slice use pnnanni than slice create panna mudiyum..

const counterSlice = createSlice({ //createSlice metho duse panni than slice cteate panna mudiyum., intha method ah vachu rou object ah cteate pannanum..
    // first one is name for this slicefile  ,  then initial state , then functionalities (functions inside reducer..)
    name:"counter", // intha slicefile ah ethukkandi create pannaomo antha file name ah kudukkurathu bestPractice..
    initialState:{value:0},
    reducers:{
        // intha reducers kulla la than functions lam create pannuvoom sliceFile la , atha actions nu solluvom , ( functions inside reducers are called actions..)
        increment:(state, action) =>{ // state na , na vachurukka initial state..
            // console.log(state)
            // console.log(state.value) // i get value of the state 
            // payload la pass pandra value la irunthu append agum..

            state.value += action.payload
          
        },
        decrement:(state, action) =>{

            state.value -= action.payload;  // intha function la pass pandra payload number vachu decrement agum , state .value na ennoda initial sta value..
        }
    }
})

// na creet patha first ah , na configure panna store file ku kudukkanum..
export default  counterSlice.reducer; // ipdithan kudukkanum , final ah .reducer , while export the reducer.
// ithula nadakkura logic base panni ennodaa , app run aganum, so na create panna store la 


// next importing functions , which means action..., ithu counterslice la irukka actions , ithu engayathu venum na , na import panni use paannikkalm
export const{increment , decrement} = counterSlice.actions; // We are exporting the action functions from this file (counterSlice.js), We are exporting the action functions from this file (counterSlice.js)., So you can use the actions in components.
// exported as object so that i can destructure it..


// better understanding 
// Actions 👉 counterSlice.actions : actions na reducer la irukka functions ,

// Reducer 👉 counterSlice.reducer : intha reducer kurathu, motha actions ah uhm hold pandra reducer..