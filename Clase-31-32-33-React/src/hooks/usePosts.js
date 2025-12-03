import { useEffect, useState } from "react"
import { getPosts } from "../services/postServices"


/* Hacemos a usePost para separar toda la logica de mi componente */
function usePosts (){
    
    const [posts, setPosts] = useState([])
    const [loadingPosts, setLoadingPosts] = useState(true)

    /* Deberiamos tener un estado que indique si esta o no cargando la lista de posteos */


    async function loadPosts() {
        setLoadingPosts(true)
        const posts = await getPosts()
        setPosts(posts)
        setLoadingPosts(false)
    }

    /* 
    Controlamos la cantidad de recarga de una funcionalidad 
    
    */
    /*
    Por que queremos usar useEffect? Porque queremos que loadPosts solo se cargue una vez en mi componente 
    useEffect recibe 2 parametros:
        1. El efecto: La funcion que queremos controlar
        2. Dependencias: un array de estados de los que mi efecto depende, si alguno de los estados de la lista de depencia cambia entonces mi efecto se re-ejecutara (Si dejamos las dependencias vacias solo se ejecutara 1 vez el efecto)
    */
    /* loadPosts solo se carga 1 vez */
    useEffect(
        () => {
            loadPosts()
        }
        , []
    )


    return {
        loadingPosts: loadingPosts, 
        posts: posts,
        loadPosts: loadPosts
    }
}

export default usePosts