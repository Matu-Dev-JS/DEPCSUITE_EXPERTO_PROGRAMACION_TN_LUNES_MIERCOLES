import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import PI, { sumar } from './math.js'
/* 
import {sumar, restar} from './math.js'
import PI from './math.js' 
*/


//console.log(sumar(PI, PI))
console.log(PI)


/* createRoot recibe un elemento del HTML y renderiza la app de react dentro de ese elemento */
createRoot(document.getElementById('root'))
.render(
  <App />
)


