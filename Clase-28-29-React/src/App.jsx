import React from 'react'
import TestComponent from './Components/TestComponent/TestComponent'
import ProductCard from './Components/ProductCard/ProductCard'



//App Component
//El componente principal, toda la pagina se renderizara a partir del componente App
//Los componentes los podemos definir como funciones que retornan JSX (Mal dicho HTML)
//Los componentes se suelen escribir en mayusculas PascalCase
//Los componentes, para usarlos se instancian: Ejemplo <App/>
function App() {

  return (
    <div>
      <h1>Hola mundo</h1>
      <TestComponent/>
      <ProductCard 
        title={'Tv samsung 60"'} 
        isInCart={true}
      />
      <ProductCard 
        title={'Tv samsung 42"'}
        isInCart={false}
      />
      <ProductCard 
        title={'Tv samsung 100"'}
        isInCart={true}
      />
    </div>
  )
}

export default App


