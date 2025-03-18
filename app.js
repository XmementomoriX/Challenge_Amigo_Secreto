// El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para 
// resolver el problema.


// 1. Crear un array para almacenar los nombres
let ListaNombreDeAmigos = [];

// 2. Capturar el valor del campo de entrada: Utilizar document.getElementById
//  o document.querySelector para obtener el texto ingresado por el usuario.


/*El valor de entrada es aquel donde el usuario comienza a interactuar con el condigo 
siendo en este caso el momento en el que ingresa un nombre y posteriormente clica el 
boton "agregar amigo" , por ello tomato este campo de entrada para evvaluar el valor 
que el usuario coloque al declararlo con la funcion "let" y document.querySelector que
devuelve el primer elemento del documento.
*/ 
function agregarAmigo() {
        let  input = document.getElementById('amigo');//Obtenemos el elemento del input(valor de campo) <input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">
        let nombreDeAmigo = input.value.trim(); // Obtenemos el valor declarado por el usuario 

    /* 3.Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío.
    Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."*/
        if (nombreDeAmigo ===""){ 
            alert('Por favor, inserte un nombre.')
            return;
        }

    // === (comparación estricta): Compara el valor y el tipo de datos de manera exacta,
    //  sin hacer conversiones automáticas. 
    // Si los valores son de tipos diferentes, la comparación devolverá false.

    /* 4. Actualizar el array de amigos: Si el valor es válido,
    añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    Se utiliza el */ 

        if (ListaNombreDeAmigos.includes(nombreDeAmigo)){
            alert("Este nombre ya ha sido ingresado.");
            return;
        }
        //Validadcion de valores repetidos

    ListaNombreDeAmigos.push(nombreDeAmigo);
    /*El método push() añade uno o más elementos al final de 
    un array y devuelve la nueva longitud del array. Esto nos proporcionata agregar la
    lista de nombres en la pagina principal.*/


    // 5.Limpiar el campo de entrada: Después de añadir el nombre,
    //  restablecer el campo de texto a una cadena vacía

    input.value = '';
    /*6.Limpiamos el campo de entrada
    Tomamos en cuenta la variable input |  método Object.values() devuelve 
    un array con los valores correspondientes a las propiedades enumerables de un objeto.*/ 

    /*7.Obtener el elemento de la lista: Utilizar document.getElementById() o document.
    querySelector() para seleccionar la lista donde se mostrarán los amigos.
    */ 

    let mostrarLista = document.getElementById('listaAmigos'); //Obtenmos el valor del campo para la lista de amigos
    //id="listaAmigos" class="name-list" aria-labelledby="listaAmigos" role="list"></ul>
    //8. Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de
    //que no haya duplicados al actualizar.
    mostrarLista.innerHTML = "";
    /* 9.Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y 
    crear elementos de lista (<li>) para cada título. 
    */

    for (let i = 0; i < ListaNombreDeAmigos.length; i++){
        
        let actualizadoNombreAmigo = ListaNombreDeAmigos[i];
        let nuevoAmigo = document.createElement('li');
        nuevoAmigo.textContent = actualizadoNombreAmigo;
        mostrarLista.appendChild(nuevoAmigo); //10.Agregar elementos a la lista: Para cada amigo, 
        // crear un nuevo elemento de la lista
    }

    console.log('Array de amigos',ListaNombreDeAmigos);
}

function sortearAmigo() {
    if(ListaNombreDeAmigos.length === 0){
    alert('Añade un nombre mas antes de sortear');
    return;
    } 
    let indiceAleatorio = Math.floor(Math.random() * ListaNombreDeAmigos.length);
    let nombreSorteado = ListaNombreDeAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =  `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}
