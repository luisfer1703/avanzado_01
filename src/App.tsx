import './App.css'

import Carta from './components/Carta'

function App() {
 const mostrarCarta = (numero: number, pinta:string) => {
   alert(`carta de numero : ${numero} y de pinta: ${pinta}}`);
 }

  return (
    
      <div>

      <Carta numero={8} Pinta="diamante 🃏♦" mostrarCarta={mostrarCarta}/>
      <Carta numero={5} Pinta="trevol 🃏♣  " mostrarCarta={mostrarCarta}/>
      <Carta numero={3} Pinta="corazon 🃏❤  " mostrarCarta={mostrarCarta}/>
      <Carta numero={10} Pinta="pica 🃏♠  " mostrarCarta={mostrarCarta}/>



      </div>

    
  )
}

export default App
