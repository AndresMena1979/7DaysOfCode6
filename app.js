let preguntaAgregarAlimento=""; //varaible para las preguntas al usuario
let AlimentoParaAgregar=""  
let categoriaDelAlimento=""
let carnes=[];                //variable array para guardar las listas de las compras segun su categoria
let frutas=[];
let verduras=[];
let lacteos=[];







while (preguntaAgregarAlimento !== "no"){                   // while se ejecuta mientras preguntaAgregaAlimento sea diferente de "no"

    console.log(preguntaAgregarAlimento);

    preguntaAgregarAlimento = prompt("Deseas agregar un alimento a tu lista de compras? responde si o no");   // pergunta donde el usuario debera escribir si o no





    if (preguntaAgregarAlimento=="si"){                   // si el usuario escribe que "si" entonces se le realiza las siguientes preguntas

        AlimentoParaAgregar= prompt("que alimento deseas agregar, escribelo por favor");    // captura del alimento escrito por el usuario

        categoriaDelAlimento=prompt("En que categoria encaja este alimento: carnes,verduras,frutas,lacteos?") //captura de la categoria del alimento, escrita por el usuario

    switch (categoriaDelAlimento) {                     //switch para clasificar los alimentos segun las categorias escrita por el usuario
        case "carnes":
            carnes.push(AlimentoParaAgregar);
            break;
        case "frutas":
            frutas.push(AlimentoParaAgregar);
            break;
        case "verduras":
            verduras.push(AlimentoParaAgregar);
            break;
        case "lacteos":                           
            lacteos.push(AlimentoParaAgregar);
            break;
        default:
            alert("Categoría inválida. Intenta de nuevo.");
    }


}  /*else {


    alert ("Debes digitar si o no");
}*/


  
}

if (preguntaAgregarAlimento==="no"){     // Si el usuario decidio no digitar mas productos de la lista se genera mensaje que indica terminada la lista

    alert("Has terninado tu lista");

  }


  alert(`Lista de compras:\n  Carnes: ${carnes}\n  Frutas: ${frutas}\n  Verduras: ${verduras}\n  Lacteos: ${lacteos}`); // imprime lista de productos digitados por el usuario con un alert






  console.log("Lista de compras:");                                                   // imprime lista de productos digitados por el usuario en la consola

  console.log("Carnes:", carnes.length > 0 ? carnes.join(", ") : "No hay carnes");   // uso del operador ternario para ver si hay articulos digitados o no, si los hay se imprimen y se separan por comas usando join, si no los hay se imprime la leyenda "No hay..."
  console.log("Frutas:", frutas.length > 0 ? frutas.join(", ") : "No hay frutas");
  console.log("Verduras:", verduras.length > 0 ? verduras.join(", ") : "No hay verduras");
  console.log("Lácteos:", lacteos.length > 0 ? lacteos.join(", ") : "No hay lácteos");


  
/* -----------------------------------------------------------------------------------------------------------*/ 

  let borraProducto = ""; 

while (borraProducto !== "no") {
  borraProducto = prompt("¿Deseas borrar un producto de la lista? Escribe 'si' o 'no'");

  if (borraProducto === "si") {
    let eligeProductoBorrar = prompt("Escribe el alimento que deseas borrar:");
    let categoriaDelAlimento = prompt("En qué categoría encaja este alimento: carnes, verduras, frutas, lácteos?");

    switch (categoriaDelAlimento) {
      case "carnes":
        eliminarProducto(carnes, eligeProductoBorrar);  //llama a la funcion que eleminara el alimento digitado por el usuario
        break;
      case "frutas":
        eliminarProducto(frutas, eligeProductoBorrar);
        break;
      case "verduras":
        eliminarProducto(verduras, eligeProductoBorrar);
        break;
      case "lacteos":
        eliminarProducto(lacteos, eligeProductoBorrar);
        break;
      default:
        alert("Categoría inválida. Intenta de nuevo.");
    }
  } else if (borraProducto !== "no") {
    alert("Por favor, responde 'si' o 'no'.");
  }
}

// Función para eliminar el producto de la lista
function eliminarProducto(lista, producto) {
  let index = lista.indexOf(producto);                //busca la posición del producto dentro del array.

  if (index !== -1) {
    lista.splice(index, 1);                                  //borra el producto dentro del array
    alert(`"${producto}" ha sido eliminado de la lista.`);
  } else {
    alert(`"${producto}" no se encontró en la lista.`);
  }
}

alert(`Lista de compras actualizada:\n  Carnes: ${carnes}\n  Frutas: ${frutas}\n  Verduras: ${verduras}\n  Lácteos: ${lacteos}`);