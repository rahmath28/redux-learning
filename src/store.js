import { configureStore } from "@reduxjs/toolkit"
// intha store la than configure pannanum , ennoda store file ah..
import counterReducer from "./features/counter/counterSlice.jsx" // counterReducer : intha namaela , na create panna slice file ah import pandren..
import testReducer from "./test/testSlice.jsx" // testReducer :  intha namaela , na create panna slice file ah import pandren..

const store = configureStore({ // configureStore method kulla oru object.., athukkulla reducer nu oru object..
    reducer:{
        counter:counterReducer , // first one slice ku kudutha name , second one , na inga atha import pannupothu kudutha name.. , so based on the functionalities , it works..
        // antha slice file la irukka functiona vachu nama ethachum changes panna , intha reducer la kuduthathu nala , if something changes , my state also aupdate based on it..
        // thats it..
        test:testReducer
    }
})

export default store; // na configure pandra file ah motha app kum , provide pannanum , so wrap app.