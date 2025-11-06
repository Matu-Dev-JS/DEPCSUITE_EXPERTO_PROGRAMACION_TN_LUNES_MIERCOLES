/* 
Desafio general:
Lograr que un modelo ya entrenado de Tensorflow.js (CocosSSD) detecte si la imagen contiene o no una persona

- Cargar la imagen
- Cargar el modelo
- Ejecutar el modelo
- Manejar la respuesta del modelo

El modelo por cada deteccion de objeto da un score del 0 al 1
*/

const MIN_SCORE_REQUIRED = 0.8
const file_input = document.getElementById('image-input')
const image_preview_container = document.getElementById('image-preview-container')
const image_preview = document.getElementById('image-preview')
const execute_btn = document.getElementById('execute-model')
const span_result = document.getElementById('result')

execute_btn.disabled = true

//Estado de la imagen seleccionada
//Inicialmente nula porque no tengo imagen seleccionada
let current_url_image_selected = null
let model = null


//Logica para cargar el modelo COCO-SSD
async function loadModel (){
    try{
        //la constante cocoSsd proviene del <script></script> de coco-ssd en el index
        model = await cocoSsd.load()
    }
    catch(error){
        console.error('Error al cargar el modelo', error)
    }
}
loadModel()



/* 
Capturar la imagen
*/
//El evento change se desencadena cuando el valor de un input cambia
//Cuando el usuario agrege una imagen, el valor del input cambiara
file_input.addEventListener(
    'change',
    function (event){
        //Buscamos el primer archivo adjunto al input
        const file = event.target.files[0]
        console.log(file)
        //Esto es raro, pero si el usuario no selecciono ninguna imagen, deberiamos cortar la funcion
        if(!file){
            console.error('Ningun archivo fue seleccionado')
            return  //Cortar la funcion
        }

        //Si HAY alguna imagen seleccionada previa debemos borrrarla
        if(current_url_image_selected){

            //Ordeno a Blob API revocar la URL (Borrarlo de memoria)
            URL.revokeObjectURL(current_url_image_selected)

            //Reinicio mi variable
            current_url_image_selected = null
        }

        //Crear una Blob URL
        current_url_image_selected = URL.createObjectURL(file)

        //Cambio el atributo source de mi imagen previa
        image_preview.src = current_url_image_selected

        //Solo se debe clasificar al cargar la imagen
        execute_btn.disabled = false
    }
)


//Funcion encargada de hacer la clasificacion
async  function classifyImage (){

    //Si el modelo no se carga abortar ejecucion
    if(!model){
        console.error('El modelo no se cargo')
        return
    }

    //Si no hay imagen seleccionada que no procese
    if(!current_url_image_selected){
        console.error('No hay imagen seleccionada para procesar')
        return 
    }

    try{
        //Guardamos la lista de personas detectadas por el modelo
        //20 es el numero maximo de objetos a detectar
        const detections = await model.detect(image_preview, 20)
        const persons = [ ]
        for(const detection of detections){
            if(detection.class === 'person' && detection.score >= MIN_SCORE_REQUIRED){
                persons.push(detection)
            }
        }



        console.log('Personas detectadas', persons)
        if(persons.length > 0){
            span_result.textContent = 'Hay personas'
        }
        else{
            span_result.textContent = 'NO hay personas'
        }
    }
    catch(error){
        console.error("Error al usar el modelo: ", error)
    }
}

execute_btn.addEventListener(
    'click',
    classifyImage
)