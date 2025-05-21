// Counter kana functionalites ah , intha slice file la than create pannanum..

// sliceFile to manage functionalities of Counter.jsx , antha counter kana slice file ithu..

import { createSlice } from "@reduxjs/toolkit"; // create slice use pnnanni than slice create panna mudiyum..

const counterSlice = createSlice({ //createSlice method use panni than slice cteate panna mudiyum., intha method ah vachu rou object ah cteate pannanum..
    // first one is name for this slicefile  ,  then initial state , then functionalities (functions inside reducers..)
    name:"counter", // intha slicefile ah ethukkandi create pannaomo antha file name ah kudukkurathu bestPractice..
    initialState:{value:0},
    reducers:{ 
        // intha reducers kulla la than functions lam create pannuvoom sliceFile la , atha actions nu solluvom , ( functions inside reducers are called actions..)
        increment:(state, action) =>{ // must takes two parameter , one is state a, and another one is action (which means my function i create) ,  state na , na vachurukka initial state..
            // console.log(state)
            // console.log(state.value) // i get value of the state 

            // payload : na function argument la pass pandrathu..
            // payload la pass pandra value la irunthu append agum..
            state.value += action.payload
          
        },
        decrement:(state, action) =>{// must takes two parameter , one is state a, and another one is action (which means my function i create) ,  state na , na vachurukka initial state..

            state.value -= action.payload;  // intha function la pass pandra payload number vachu decrement agum , state .value na ennoda initial state value..
        }
    }
})

//  *** IMPPORTANT NOTE : finally slice file create panni functionalities la develop panniyachuna , 
//  Final ah , namma create panna function ah yum export pannanum appotha thevappadra edathula use panna mudiyum, next the entire slice file ah yum export pannanum  ( nama create panna store reducer la pass pannanum..)


//  first ah , na create panna etire slice file ,  na configure panna store file ku kudukkanum..
export default  counterSlice.reducer; // while export the entire slice file .reducer (dot reducer nu than export pannanum..).
// ithula nadakkura logic base panni ennodaa , app run aganum, so na create panna store la provide panniyachuna..


// next export functions , which means action..., ithu counterslice la irukka actions , ithu engayathu venum na , na import panni use paannikkalm
export const{increment , decrement} = counterSlice.actions; // nama create panna functions ah export pannumpothu .actions (dot actions nu export pannanum..)
// exported as object so that i can destructure it..
