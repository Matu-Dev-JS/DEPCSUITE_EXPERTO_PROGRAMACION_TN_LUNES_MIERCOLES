

function TestComponent (){

    function saludar(){
        alert('hola mundo')
    }
    let textButton = 'test'

    return (
        <button
            onClick={saludar}
        >
            {textButton}
        </button>
    )
}

export default TestComponent