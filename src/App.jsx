import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Person from './components/Person'
import Home from "./components/Home/Home";
import TheHeader from "./components/TheHeader/TheHeader";

function App() {
  return (
    <>

{/* Ejercicio 1.2 */}

      <Person name="Dani" surname='Sopa' age='28'></Person>
      <Person name='Eder' surname='Julián' age='26'></Person>
      <Person name='Holy' surname='Onorato' age='23'></Person>
      

{/* Ejercicio 2 */}

      <TheHeader name='Eder Julián Quintela' age='26'/>

      <Home 
        section='Sobre mi' 
        data='Hola, me llamo Eder y tengo 26 años. Estoy realizando un ejercicio de React básico para practicarlo.'
      />
      
      <Home 
        section='¿Qué tecnologías manejo?' 
        data='Por ahora estoy aprendiendo a utilizar: HTML, CSS, Javascript, mySQL, MongoDB, Docker, 
              Node.js y React.'
      />
    </>
  )
}

export default App
