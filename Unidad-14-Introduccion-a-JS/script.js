//Comentario simple
/*
comentario multilinea
*/
//TIPOS DE DATOS: Primitivos

//string => se usa para representar textos alfanumericos
//Se escriben entre comillas: '', ""
"Matias"
"pepe"
'123'
''
//number => se usa para representar valores numericos
5
3.1
-4
NaN

//boolean => se usa para representar booleanos
true
false

//null =>  se usa para representar nulidad (Ausencia de dato)
null

//undefined => Se usa cuando un dato no esta definido
undefined


//Transformadores / Conversores

//String( 5 ) // '5'

//Number('hola') // NaN (Not a Number) y se usa para representar que ese dato no es transformable a numero
//Number(true) // 1 y si fuera false seria 0
//Number(null) // 0
//Number(undefined) //NaN

//Boolean() 


//Valores verdaderos y falsos
//Valores truthy
//Valores que al transformarlos en boolean dan true
//Todos los No-Falsy son truthy

//Valores falsy
//Valores que al transformarlos en boolean dan false
''
0
NaN
null
undefined
false

//typeof
//Es una funcion que nos permite saber que tipo de dato es x valor, retorna un string con el nombre del tipo de dato
typeof(4)