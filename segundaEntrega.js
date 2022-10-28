class Productos {
  constructor(id, nombre, precio, stock) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.stock = stock);
  }

  restaStock() {
    this.stock = this.stock - 1;
    alert(`el stock de ${this.nombre} fue actualizado`);
  }
  agregaIva() {
    this.precio = this.precio * 1.21;
    console.log(`al precio de ${this.nombre} se le agrego el IVA`);
  }
}

const producto0 = new Productos(0, "thinner 500 tambor", 70000, 100);
const producto1 = new Productos(1, "thinner 500 botella", 400, 1000);
const producto2 = new Productos(2, "thinner ESTANDAR tambor", 60000, 90);
const producto3 = new Productos(3, "thinner ESTANDAR botella", 350, 1100);
const producto4 = new Productos(4, "aguarras", 50000, 88);
const producto5 = new Productos(5, "aceite de lino", 43000, 20);
const producto6 = new Productos(6, "thinner ORO", 73000, 55);
const producto7 = new Productos(7, "thinner ORO botella", 440, 1000);
const producto8 = new Productos(8, "thinner PREMIUM", 80000, 45);
const producto9 = new Productos(9, "thinner PREMIUM botella", 500, 990);

const mercaderia = [
  producto0,
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
  producto7,
  producto8,
  producto9,
];
const carritoCompras = []
const precioCarrito =[]
console.table(mercaderia);




function filtarPorPrecio() {   //funcion 1 filtar por precio FUNCIONA  

  let eleecionPrecioFiltrado = parseInt(
    prompt(`filtrar por productos no mas caros de $ (se veran por consola)`)
  );
  let mercaderiaFiltrada = mercaderia.filter(
    (producto) => producto.precio < eleecionPrecioFiltrado
  );
    
  console.log(mercaderiaFiltrada);
}

function filtrarPorStock() {   //funcion 2 filtar por stock FUNCIONA  

  let eleecionStockFiltrado = parseInt(
    prompt(`filtrar por productos con un stock menor a (se ver por consola)`)
  );
  let mercaderiaFiltrada = mercaderia.filter(
    (producto) => producto.stock < eleecionStockFiltrado
  );

  console.table(mercaderiaFiltrada);
}
function quitarProducto() {     //EL USUARIO ELIGE PRODUCTO Y LO ELIMINA FUNCONA
  
  function elimina(array, numero) {
    array.splice(numero , 1);
  }

  alert(`identifique el indice del producto a eliminar`);
  let eleccionNumeroEliminar = parseInt(
    prompt(`numero de indice del producto a eliminar`)
  );


  switch (eleccionNumeroEliminar) {
    case 0:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 1:
      elimina(mercaderia, eleccionNumeroEliminar);

      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 2:
      elimina(mercaderia, eleccionNumeroEliminar);

      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 3:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 4:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto`);
      console.table(mercaderia);

      break;

    case 5:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto`);
      console.table(mercaderia);

      break;

    case 6:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 7:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto `);
      console.table(mercaderia);

      break;

    case 8:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto`);
      console.table(mercaderia);

      break;

    case 9:
      elimina(mercaderia, eleccionNumeroEliminar);
      alert(`se eliminara el producto`);
      console.table(mercaderia);

      break;

    default:
      break;
  }
 
}

function compraProducto(eleccionProducto) { // COMPRA MERCADERIA LO IMPRIME PANTALLA RESTA STOCK CREA ARRAY CARRITO Y ARRAY PRECIO CARRITO
  carritoCompras.push(mercaderia[eleccionProducto]);
  alert(`se agrego ${mercaderia[eleccionProducto].nombre} al carrito`);
  precioCarrito.push(mercaderia[eleccionProducto].precio);
  mercaderia[eleccionProducto].restaStock();
  
}
function agregarCarrito() {  //AGREGA PRODUCTO AL ARRAY CARRITO Y AL ARRAY PRECIO CARRITO

  
  let eleccionProducto = parseInt(prompt(`elija el producto (del 0 al 9)  escriba 99 para terminar`));

  while ( eleccionProducto !== 99){

  switch (eleccionProducto) {
    case 0:
      compraProducto(eleccionProducto)

      break;

    case 1: 
      compraProducto(eleccionProducto)
      break;

    case 2:
      compraProducto(eleccionProducto)
      break;

    case 3:
      compraProducto(eleccionProducto)
      break;

    case 4:
      compraProducto(eleccionProducto)
      break;

    case 5:
      compraProducto(eleccionProducto)
      break;

    case 6:
      compraProducto(eleccionProducto)
      break;

    case 7:
      compraProducto(eleccionProducto)
      break;

    case 8:
      compraProducto(eleccionProducto)
      break;

    case 9:
      compraProducto(eleccionProducto)
      break;

    default: alert(`producto inexistente`)
      break;
  }

  eleccionProducto = parseInt(prompt(`elija el producto (del 0 al 9)  escriba 99 para terminar`));
}
  
}

for (let index = 0; index < mercaderia.length; index++) { //imprime en pantalla los prod
  
  let productoTexto = document.getElementById(`producto${index}`)
  productoTexto.innerText = `${mercaderia[index].nombre } a ${mercaderia[index].precio}`

  
}

function ordenarPorPrecio() { //ordena por precio
 


  mercaderia.sort((function (a, b) {
    if (a.precio > b.precio) {
      return 1;
    }
    if (a.precio < b.precio) {
      return -1;
    }
    
    return 0;
  }))
  console.table(mercaderia)
  
}
function ordenarPorNombre() { //ordena por nombre
 


  mercaderia.sort((function (a, b) {
    if (a.nombre > b.nombre) {
      return 1;
    }
    if (a.nombre < b.nombre) {
      return -1;
    }
    
    return 0;
  }))
  console.table(mercaderia)
  
}

function encontrar() { // busca un producto por su nombre y lo imprime en consola FUNCIONA
  let productoBuscado = prompt(`ingrese el nombre del producto a buscar`)
  const productoEncontrado =  mercaderia.find((el) => el.nombre === productoBuscado)
  console.log (productoEncontrado)
  
}
function filtradoConIncludes() { // filtrado con includes y agregado de MAP ==> devuelve los elementos del array del includes
  let eleccionUsuario = prompt (`busqueda por nombre`)
const resultado = mercaderia.filter ((prdo) => prdo.nombre.includes (`${eleccionUsuario}`))
const listadoNombres = resultado.map ((el) => el.nombre + " hay en stock " + el.stock)
console.table (listadoNombres)
}

function revisionCarrtio(){// funcion revision de carrito con reduce y map
  let revisionCarrito = prompt(`desea revisar su carrito de compras ingrese si o no`)
  if (revisionCarrito == "si" ){
   const resultadoCarrito = carritoCompras.map((el) => el.nombre + " " + " " +  el.precio)
   console.log (`${resultadoCarrito}`)
   let revisionMontoCarrito = prompt(`desea revisar el monto total de su carrito de compras ingrese si o no`)
   if( revisionMontoCarrito == "si") { const montoTotalCarrito = precioCarrito.reduce((acumulador, elemento) => acumulador + elemento , 0)
   console.log (`usted lleva gastados $ ${montoTotalCarrito} en su compra`)
 
   }
 
  }
  else{alert(`programa terminado`)
 }
 }
 


let alertInicio =console.log(
  `tenemos los siguientes productos \n se veran en la consola!! y ahora tambien en el index.html jajajaja`
);
for (const producto of mercaderia) {
  alertInicio += `\n ${producto.id} --- ${producto.nombre} a $ ${producto.precio}`;
  console.log(alertInicio);
}  


 let eleccionInicial = parseInt(prompt (`MENU algunas acciones se muestran como log y otras como table en consola \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

 while (eleccionInicial !== 8){
switch (eleccionInicial) {
  case 1: agregarCarrito()
  eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;
  
    case 2: filtarPorPrecio()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))


    
    break;
  
    case 3: filtrarPorStock()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;
  
    case 4: quitarProducto()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;

    case 5: ordenarPorNombre()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;

    case 6: ordenarPorPrecio()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;

    case 7: filtradoConIncludes()
    eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    
    break;
  
  default: eleccionInicial = parseInt(prompt (`MENU \n 1-- comprar \n 2--filtrar por precio \n 3-- filtrar por stock \n 4--quitar producto \n 5 ordenar alfabeticamente \n 6-- ordenar por precio \n 7-- filtrar nombre y map \n 8-- terminar`))

    break;
    


  }
}


revisionCarrtio()