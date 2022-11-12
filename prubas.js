class Personal {
    constructor (id, nombre, edad, contrato, horasExtras){

        this.id = id,
        this.nombre = nombre,
        this.edad = edad,
        this.contrato = contrato,
        this.horasExtras = horasExtras
    }
}

const juan = new Personal (0, "juan", 65, "si", 33 )
const pedro = new Personal (1, "pedro", 55, "no", 22 )
const luis = new Personal (2, "luis", 34, "no", 12 )
const hernan = new Personal (3, "hernan", 70, "si", 43 )
const genaro = new Personal (4, "genaro", 33, "si", 3 )

arrayPersonal = [ juan, pedro, luis, hernan, genaro]
arrayPersonalJubilar = []
arrayPersonalNoJubilar=[]

// alert (`actualmente hay ${arrayPersonal.length} empleados en la nomina`)
// console.log (arrayPersonal[4].nombre)

// let indice = arrayPersonal.indexOf(hernan)
// console.log (indice)
// console.log(juan.edad)

















function quitarEmpleado() {
  alert(`identifique el indice de empleado a eliminar`);

  for (let index = 0; index < arrayPersonal.length; index++) {
    alert(
      `${arrayPersonal[index].nombre} numero de indice ${arrayPersonal[index].id}`
    );
  }
  let numeroIdEmpleado = parseInt(
    prompt(`numero de id del empleado a eliminar`)
  );
  let confirmacion = Number(
    prompt(
      `esta seguro? una vez eliminado no se puede recuperar 1-- si 2-- no `
    )
  );
  if ((confirmacion = 1)) {
    arrayPersonal.splice(numeroIdEmpleado, 1);
    console.table(arrayPersonal);
  } else {
    alert(`el empleado no sera eliminado`);
  }
}





function ordenarPorEdad() {       //funcion ordenar empleados por filtro de edad
  arrayPersonal.sort((function (a, b) {
    if (a.edad > b.edad) {
      return 1;
    }
    if (a.edad < b.edad) {
      return -1;
    }
    
    return 0;
  }))
console.table (arrayPersonal)
}


function empleadosEdadJubilacion() {    //funcion para ver empleados en edad de jubilar y crear array

   alert(`se analizara la edad de cada uno y se crea un array nuevo con los que tienen edad de jubilarse y los que no`)
   
   for (let index = 0; index < arrayPersonal.length; index++) {
    alert( ` ${arrayPersonal [index].nombre}  tiene ${arrayPersonal [index].edad} años`)
    if (arrayPersonal[index].edad >= 65) {
        alert (`${arrayPersonal [index].nombre} esta en edad de jubilarse`)
        arrayPersonalJubilar.push (arrayPersonal [index])
        console.table(arrayPersonalJubilar)

    }
    else {arrayPersonalNoJubilar.push (arrayPersonal [index])
          console.table(arrayPersonalNoJubilar) }
    
   }
      
    
}



function fn(array) { //funcion orden superior que muestra cada elemento del array solicitado

  return  console.log (array.edad)
}
function porCadaUno(arr, fn) {
  for( const el of arr)
    fn(el)
}
porCadaUno (arrayPersonal,fn )


  



// let eleccion
// eleccion = Number(prompt(`elija \n 1-- para ordenar empleados por edad \n 2-- para ver quienes se pueden jubilar \n 3-- para eliminar uno \n 0-- para salir`))

// do {

  

// switch (eleccion) {
//     case 1:ordenarPorEdad()
        
//         break;
//     case 2: empleadosEdadJubilacion()
//         break;

//     case 3: quitarEmpleado()
//         break;


//     default: Alert (`opcion invalida`)
//         break;


// }
//         let eleccion = Number(prompt(`elija \n 1-- para ordenar empleados por edad \n 2-- para ver quienes se pueden jubilar \n 3-- para eliminar uno \n 0-- para salir`))

// }   while (eleccion != 0);




// function filtarPorPrecio() {   //funcion 1 filtar por precio FUNCIONA

//   let eleecionPrecioFiltrado = parseInt(
//     prompt(`filtrar por productos no mas caros de $ (se veran por consola)`)
//   );
//   let mercaderiaFiltrada = mercaderia.filter(
//     (producto) => producto.precio < eleecionPrecioFiltrado
//   );

//   console.table(mercaderiaFiltrada);
// }

// function filtrarPorStock() {//funcion 2 filtar por stock FUNCIONA

//   let eleecionStockFiltrado = parseInt(
//     prompt(`filtrar por productos con un stock menor a (se ver por consola)`)
//   );
//   let mercaderiaFiltrada = mercaderia.filter(
//     (producto) => producto.stock < eleecionStockFiltrado
//   );

//   console.table(mercaderiaFiltrada);
// }
// function quitarProducto() {     //EL USUARIO ELIGE PRODUCTO Y LO ELIMINA FUNCONA

//   function elimina(array, numero) {
//     array.splice(numero , 1);
//   }

//   alert(`identifique id del producto a eliminar`);
//   let eleccionNumeroEliminar = parseInt(
//     prompt(`numero de id del producto a eliminar`)
//   );

//   switch (eleccionNumeroEliminar) {
//     case 0:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 1:
//       elimina(mercaderia, eleccionNumeroEliminar);

//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 2:
//       elimina(mercaderia, eleccionNumeroEliminar);

//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 3:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 4:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto`);
//       console.table(mercaderia);

//       break;

//     case 5:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto`);
//       console.table(mercaderia);

//       break;

//     case 6:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 7:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto `);
//       console.table(mercaderia);

//       break;

//     case 8:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto`);
//       console.table(mercaderia);

//       break;

//     case 9:
//       elimina(mercaderia, eleccionNumeroEliminar);
//       alert(`se eliminara el producto`);
//       console.table(mercaderia);

//       break;

//     default:
//       break;
//   }

// }

// function compraProducto(eleccionProducto) {
//   // COMPRA MERCADERIA LO IMPRIME PANTALLA RESTA STOCK CREA ARRAY CARRITO Y ARRAY PRECIO CARRITO
//   carritoCompras.push(mercaderia[eleccionProducto]);
//   alert(`se agrego ${mercaderia[eleccionProducto].nombre} al carrito`);
//   precioCarrito.push(mercaderia[eleccionProducto].precio);
//   mercaderia[eleccionProducto].restaStock();
//  }
// function agregarCarrito() {
//   //AGREGA PRODUCTO AL ARRAY CARRITO Y AL ARRAY PRECIO CARRITO

//   let eleccionProducto = parseInt(
//     prompt(`elija el producto (del 0 al 9)  escriba 99 para terminar`)
//   );

//   while (eleccionProducto !== 99) {
//     switch (eleccionProducto) {
//       case 0:
//         compraProducto(eleccionProducto);

//         break;

//       case 1:
//         compraProducto(eleccionProducto);
//         break;

//       case 2:
//         compraProducto(eleccionProducto);
//         break;

//       case 3:
//         compraProducto(eleccionProducto);
//         break;

//       case 4:
//         compraProducto(eleccionProducto);
//         break;

//       case 5:
//         compraProducto(eleccionProducto);
//         break;

//       case 6:
//         compraProducto(eleccionProducto);
//         break;

//       case 7:
//         compraProducto(eleccionProducto);
//         break;

//       case 8:
//         compraProducto(eleccionProducto);
//         break;

//       case 9:
//         compraProducto(eleccionProducto);
//         break;

//       default:
//         alert(`producto inexistente`);
//         break;
//     }

//     eleccionProducto = parseInt(
//       prompt(`elija el producto (del 0 al 9)  escriba 99 para terminar`)
//     );
//   }
// }

// function ordenarPorPrecio() {//ordena por precio

//   mercaderia.sort(function (a, b) {
//     if (a.precio > b.precio) {
//       return 1;
//     }
//     if (a.precio < b.precio) {
//       return -1;
//     }

//     return 0;
//   });
//   console.table(mercaderia);
// }
// function ordenarPorNombre() { //ordena por nombre

//   mercaderia.sort((function (a, b) {
//     if (a.nombre > b.nombre) {
//       return 1;
//     }
//     if (a.nombre < b.nombre) {
//       return -1;
//     }

//     return 0;
//   }))
//   console.table(mercaderia)

// }

// function encontrar() { // busca un producto por su nombre y lo imprime en consola FUNCIONA

//   let productoBuscado = prompt(`ingrese el nombre del producto a buscar`);
//   const productoEncontrado = mercaderia.find(
//     (el) => el.nombre === productoBuscado
//   );
//   console.table(productoEncontrado);
// }
// function filtradoConIncludes() { // filtrado con includes y agregado de MAP ==> devuelve los elementos del array del includes

//   let eleccionUsuario = prompt(`busqueda por nombre`);
//   const resultado = mercaderia.filter((prdo) =>
//     prdo.nombre.includes(`${eleccionUsuario}`)
//   );
//   const listadoNombres = resultado.map(
//     (el) => el.nombre + " hay en stock " + el.stock
//   );
//   console.table(listadoNombres);
// }

// function revisionCarrtio() { // funcion revision de carrito con reduce y map

//   let revisionCarrito = prompt(
//     `desea revisar su carrito de compras ingrese si o no`
//   );
//   if (revisionCarrito == "si") {
//     const resultadoCarrito = carritoCompras.map(
//       (el) => el.nombre + " " + " " + el.precio
//     )
//     let carritoFinal = document.getElementById(`listado__carrito`)
//     carritoFinal.innerText = `usted ha incorporado los siguientes productos en su carrito ${resultadoCarrito}`

//     console.log(`${resultadoCarrito}`);
//     let revisionMontoCarrito = prompt(
//       `desea revisar el monto total de su carrito de compras ingrese si o no`
//     );
//     if (revisionMontoCarrito == "si") {
//       const montoTotalCarrito = precioCarrito.reduce(
//         (acumulador, elemento) => acumulador + elemento,
//         0
//       )
//       let carritoFinal = document.getElementById(`listado__carrito__dinero`)
//     carritoFinal.innerText = `usted lleva gastados $ ${montoTotalCarrito} en su compra`;
//       console.log(`usted lleva gastados $ ${montoTotalCarrito} en su compra`);
//     }
//   } else {
//     alert(`programa terminado`);
//   }
// }

// let alertInicio =console.log(
//   `tenemos los siguientes productos \n se veran en la consola!! y ahora tambien en el index.html jajajaja`
// );
// for (const producto of mercaderia) {
//   alertInicio += `\n ${producto.id} --- ${producto.nombre} a $ ${producto.precio}`;
//   console.log(alertInicio);
// }

//  let eleccionInicial = parseInt(prompt (`MENU algunas acciones se muestran como log y otras como table en consola \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//  while (eleccionInicial !== 8){
// switch (eleccionInicial) {
//   case 1: agregarCarrito()
//   eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 2: filtarPorPrecio()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 3: filtrarPorStock()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 4: quitarProducto()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 5: ordenarPorNombre()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 6: ordenarPorPrecio()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//     case 7: filtradoConIncludes()
//     eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//   default: eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

//     break;

//   }
// }

// revisionCarrtio()



alert(
  "bienvenidos al cotizador, le pediremos algunos datos para personalizar su presupuesto"
);
let precio = 1;
let nombreUsuario;
let precioProductos;
let montoIva = 0.21;
let respuestaCotizacion;
let recotizar;
// declaro variables globales
let precioThinner = 1000;
let precioAgua = 2000;
let precioDiluyente = 3000;
let precioAceiteLino = 4000;
// establezco variables que figuran en base de datos

// pregunta nombre, en caso de que no ingrese nombre, vuelve a preguntar.... (tendria que decir "no ingreso nombre=?????"

do {
  nombreUsuario = prompt("ingrese su nombre");
  if (nombreUsuario === "") {
    alert("dato no ingresado");
  }
} while (nombreUsuario === "");

alert(" bienvenido " + nombreUsuario);

// // pregunta si tiene descuento y declaro variable descuento para el cicuito if/else

alert(nombreUsuario + " ha realizado alguna compra anterior?");

let descuento = prompt(" ingrese si o no").toLowerCase();

// // si tiene descuento modifica variable precio * 0.95 para hacer descuent 5%

if (descuento == "si") {
  precioProductos = precio * 0.95;
  alert("usted tiene 5% de descuento");
}

// // si no tiene descuento modifica variable precio * 1.05 para hacer precio de venta mas 5%
else {
  precioProductos = precio * 1.05;

  alert("no tiene descuento");
}

// declaro funcion que calcula precio del producto de base de datos * la variable precioProducto que establece descuento

function precioCalculado(precio1, precio2) {
  return precio1 * precio2;
}

// function precioIva (parametro1 , parametro2){
//     return parametro1 * parametro2
// }
// switch para eleccion de producto

do {
  let eleccion = Number(
    prompt(
      "elija el producto 1 -- thinner  2 -- aguarras  3 -- diluyente  4 -- aceite de lino"
    )
  );
  switch (eleccion) {
    case 1:
      alert(" eligio thinner");
      alert(" el precio es " + precioCalculado(precioProductos, precioThinner));
      // llamo a la variable que calcula px producto por descuento

      break;

    case 2:
      alert(" eligio aguarras");
      alert(" el precio es " + precioCalculado(precioProductos, precioAgua));

      break;
    case 3:
      alert(" eligio diluyente");
      alert(
        " el precio es " + precioCalculado(precioProductos, precioDiluyente)
      );

      break;
    case 4:
      alert(" eligio aceite lino");
      alert(
        " el precio es " + precioCalculado(precioProductos, precioAceiteLino)
      );

      break;

    default:
      alert("no tenemos ese producto");
      break;
  }

  
  recotizar = parseInt(prompt(" quiere volver a cotizar?  1 -- si   2 -- no"));
} while (recotizar == 1);

let producto1 = document.getElementById("elemento");
// producto1.innerText = "este es producto uno"


// producto1.innerHTML = "<h1> tambien le agrego titulo </h1> <h2> y otro titulo mas </h2>"
// // agregado de etiqueta o contenido a partir de js
// // en est caso se creo etiqueta section, con contenido un titulo h2 y texto

// let seccion = document.createElement ( "section")
// seccion.innerHTML = "<h2> hola coder </h2>"
// document.body.append(seccion)


// let nuevoProducto = document.createElement ( "li") // use la variable de la linea uno producto1=elemento del htmlm 
// nuevoProducto.innerHTML = " nuevo producto" 
// producto1.append (nuevoProducto)

let product  = {
    nombre: `pelota`,
    precio: `5000`
}

let contenidoProducto = `el producto ${product.nombre} sale ${product.precio}`

product = document.createElement (`li`)
product.innerHTML = `<h2> ${contenidoProducto}</h2>`
producto1.append (product)



                        