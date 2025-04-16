
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// na configure panna store ah , wrap panna poren , provider use panni..
import { Provider } from 'react-redux' // this provider is coming from react redux..
import store from './store.js'
// provider la na creet panna sotore ah  confugure panniten..

createRoot(document.getElementById('root')).render(

   <Provider store={store}>
     <App />
   </Provider>

)
