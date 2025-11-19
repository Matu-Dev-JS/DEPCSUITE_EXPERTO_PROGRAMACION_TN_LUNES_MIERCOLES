
/*
Los componentes tienen la responsabilidad de renderizar en la pantalla
Lo que retorne el componente es lo que se imprimira en pantalla
Todos los componentes reciben un objeto props
Dicho objeto se usa para trasmitir informacion al componente
Las props SIEMPRE seran un objeto
*/
function ProductCard ( props ){
    console.log(props)
    
    let isOnSale = true
    let currencySymbol = 'USD'
    
    /* 
    Todos los valores que muestra el componente:
    - isInCart
    - isOnsale
    - currencySymbol
    - title
    - price
    */
    return (
        <div>
            {
                isOnSale 
                && 
                <span>Descuento navideño</span>
            }
            <h2>{props.title}</h2>
            <span>Precio $700 {currencySymbol}</span>
            {
                props.isInCart 
                ? <button>Quitar del carrito</button>
                : <button>Comprar</button>
            }
            
        </div>
    )

}

export default ProductCard