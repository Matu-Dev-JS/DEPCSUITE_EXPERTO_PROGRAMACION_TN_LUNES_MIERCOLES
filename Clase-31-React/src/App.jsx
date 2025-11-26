import ParrafoExtendible from "./Components/ParrafoExtendible/ParrafoExtendible"

function App (){
  return (
    <div>
      <h1>hola</h1>
      <ParrafoExtendible 
        parrafo={
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem ullam at quaerat quia ipsam, laboriosam vel cumque tenetur dignissimos accusamus quae quam ipsum exercitationem molestiae, illo qui enim inventore. Vero?'
        }
        limite_palabras={5}
      />
      <ParrafoExtendible 
        parrafo={
          'Hola que tal?'
        }
        limite_palabras={5}
      />
      <ParrafoExtendible 
        parrafo={
          'Todo bien?'
        }
        limite_palabras={5}
      />
    </div>
  )
}

export default App