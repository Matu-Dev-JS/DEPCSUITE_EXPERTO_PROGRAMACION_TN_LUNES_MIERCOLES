/* 
Crear un componente llamado Contador
El componente tendra un contador interno que empezara en 1
Tendra 2 botones:
    - Incrementar (Que incrementara mi contador en 1 mas)
    - Decrementar (Que decrementara mi contador en 1 menos)
No se podra decrementar a menos de 1
No se podra incrementar a mas de 10
<button>Decrementar</button>
<span>{contador}</span>
<button>Incrementar</button>

(Opcional):
- Agregar mensajes de advertencia: 
    - "Has llegado al limite"
    - "No puedes tener menos de 1"
- Agregar deshabilitaciones a los botones, ejemplo si el contador vale 1 deberia estar deshabilitado el boton de decrementar (o que directamente no se renderize)
- Que el componente reciba min, max, initial por props y configuren desde que rango puede operar el contador
*/