import { configureStore } from "@reduxjs/toolkit"
// intha store la than configure pannanum , ennoda store file ah..
import counterReducer from "./features/counter/counterSlice.jsx" // counterReducer : intha namaela , na create panna slice file ah import pandren..
import testReducer from "./test/testSlice.jsx" // testReducer :  intha namaela , na create panna slice file ah import pandren..
import themeReducer from "./slices/themeSlice.jsx"

const store = configureStore({ // configureStore method kulla oru object.., athukkulla reducer nu oru object..
    reducer:{ // intha reducer , nama create pandra slice file states lam handle pandra mari ..
        counter:counterReducer , // first one na create panna slicefile ku kudutha name , second one :na create panna antha overall slicefile ,  na inga atha import pannupothu Reducer nu import pannanum for good practice..  , so based on the functionalities , it works..
        // antha slice file la irukka functiona vachu nama ethachum changes panna , intha reducer la , pass panneerukka nala , if something changes , my state also update based on it..
        // thats it..
        test:testReducer ,// another slice file , like above..
        theme:themeReducer // for theme

    }
})

export default store; // na configure pandra file ah motha app kum , provide pannanum , so wrap app, so that we can acces it throught the entire application..