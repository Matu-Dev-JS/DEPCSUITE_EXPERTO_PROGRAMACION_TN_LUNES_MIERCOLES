import React from 'react'


function App() {
  //Crear a partir del array de productos un array de jsx 
  //Donde cada elemento sea: 
  /* 
  <div>
    <h2>{title}</h2>
    <span>Precio: ${precio}</span>
  </div>
  */
  const products = [
    {
      title: 'tv samsung 32"',
      price: 200,
      id: 1
    },
    {
      title: 'tv samsung 42"',
      price: 350,
      id: 2
    },
    {
      title: 'tv samsung 60"',
      price: 600,
      id: 3
    },
  ]
  const productos_jsx = products.map(
    (producto) => {
      return (
        <div>
          <h2>{producto.title}</h2>
          <span>Precio: ${producto.price}</span>
        </div>
      )
    }
  )

  /* 
  React List
  Basicamente son listas de JSX (HTML).

  pasos:
    - Crear una lista vacia
    - Por cada elemento de la lista transformarlo a html (BUCLE)
    - Agregar el nuevo elemento a la lista (push)
  */
  /* const lista_JSX = [
    <div>Hola</div>,
    <div>Que tal?</div>,
    <div>Adios</div>
  ]


  let lista = []

  for (const product of products) {
    lista.push(
      <div>
        <h2>{product.title}</h2>
        <span>Precio: ${product.price}</span>
      </div>
    )
  } */

    return (
      <div>
        {productos_jsx}

        {
          products.map(
            (producto) => {
              return (
                <div>
                  <h2>{producto.title}</h2>
                  <span>Precio: ${producto.price}</span>
                </div>
              )
            }
          )
        }
      </div>
    )
  }

  export default App


