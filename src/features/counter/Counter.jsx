
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './counterSlice' 
import { updateText, reset } from '../../test/testSlice'

//sliFile la create panna function ah use pannanum na ,
//  i need 'useDisatch' hook, state ah handle pannanum na need 'useSelector' , both comes from react-redux..


const Counter = () => {

    // const count = useSelector(state => console.log(state)) // got object as counter , inside that have nested another counter that has value : {counter: {…}} intha counter object  oda nester counter state la than i have value
    const count = useSelector(state =>(state.counter.value)) // count la state value ah get panniten..

      // const changeName = useSelector(state => console.log(state)) // i get two states one counter and anothe one is test counter ( {counter:{value: 0} , test: {value: 'rahmath'}}} 
      // const changeName = useSelector(state => console.log(state.test)) // got test state  value : {value: 'rahmath'} 
    const changeName = useSelector(state => (state.test.value)) // state na enakku  irukka motha state uhm kedaikum , im gettin the test sttate , athan enaku theva , 
    // getting that state value to make changes..

    const dispatch = useDispatch() // got hook in a variable , direct ah hook ah use panna mudiyathu.., intha hook use pannithan ennala function ah call panna mudiyum..
  return (
    // called functions by dispatch..
   <>
    <h1>Count :{count}</h1>
    <h3>Name : {changeName}</h3>
    <div className="flex">
    <button onClick={() => dispatch(increment(1))} >Increment</button> 
    
    <button onClick ={() => dispatch(decrement(1))}>decrement</button>
    <button onClick={() => dispatch(updateText("salam"))}>ChangeName</button>
    <button onClick={() => dispatch(reset())}>reset</button>
    </div>
   </>
  )
}

// intha incremment function kulla na pass pandrathu than payload.. , 
// action na antha function , payload na , na function argument la pass pandra value..
export default Counter