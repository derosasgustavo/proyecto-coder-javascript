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

const producto0 = new Productos(0, "THINNER 500 TAMBOR", 70000, 100);
const producto1 = new Productos(1, "THINNER 500 BOTELLA", 400, 1000);
const producto2 = new Productos(2, "THINNER ESTANDAR TAMBOR", 60000, 90);
const producto3 = new Productos(3, "THINNER ESTANDAR BOTELLA", 350, 1100);
const producto4 = new Productos(4, "AGUARRAS", 50000, 88);
const producto5 = new Productos(5, "ACEITE DE LINO", 43000, 20);
const producto6 = new Productos(6, "THINNER ORO", 73000, 55);
const producto7 = new Productos(7, "THINNER ORO BOTELLA", 440, 1000);
const producto8 = new Productos(8, "THINNER PREMIUM TAMBOR", 80000, 45);
const producto9 = new Productos(9, "THINNER PREMIUM BOTELLA", 500, 990);
const producto10 = new Productos(10, "THINNER LIMPIEZA TAMBOR", 60000, 100);
const producto11 = new Productos(11, "DILUYENTE POLIURETANO", 130000, 23);

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
  producto10,
  producto11,
];

let buscadorProductosInput = document.getElementById(`buscador__productos`);
let contenedorProductos = document.getElementById(`lista`);
let carrito = document.getElementById(`carrito__compras`);
let botones = document.getElementsByClassName(`boton`);
let cuentaTotal = document.getElementById(`carrito__total`)
let avisoCarrito = document.getElementById("seccion__aviso__carrito")
let montoCarrito = document.getElementById("monto__carrito")


let carritoComprasGuardado = [];

//RENDERIZA EL CARRITO GUARDADO EN LOCAL STORAGE
if (localStorage.getItem(`carrito`)) {
  avisoCarrito.innerHTML = `
      <a href="#carrito__compras"><p class="aviso__carrito__invisible">Revise su carrito</p></a>`;
  carritoComprasGuardado = JSON.parse(localStorage.getItem("carrito"));
  montoTotalCarrito()
  for (const producto of carritoComprasGuardado) {
    carrito.className = "carrito__contenedor";
    carrito.innerHTML += `<div id="carrito__aparece${producto.id}" class="producto__carrito__aparece">
   <p id="parrafo__carrito"> usted selecciono ${producto.nombre} </p>
   <p id ="precio__producto"> precio: $${producto.precio}  </p>
   </div>`;
  }
}

function renderizarProductos() {
  //FUNCION QUE RENDERIZA TODOS LOS PRODUCTOS DE ARRAY MERCADERIA
  for (const producto of mercaderia) {
    let productoListado = document.createElement(`div`);
    productoListado.className = "producto";
    productoListado.innerHTML = `<h2> ${producto.nombre} </h2>
                                <div class="imagen__tambor"><img src=" images/tambores.jpg " class="imagen__producto"  ></img></div>
                                <button class ="boton" id= "${producto.id}">agregar al carrito</button>`;
    contenedorProductos.appendChild(productoListado);
  }
}
renderizarProductos();

// funcion que suma el total del carrito y lo muestra en pantalla

function montoTotalCarrito() {
  carritoMonto = carritoComprasGuardado.map((el) => el.precio);
  let sumaCarrito = carritoMonto.reduce((acc, numero) => acc + numero);
  montoCarrito.innerHTML = `
  <p id="monto__final__carrito"> Monto total $ ${sumaCarrito} </p>`;
}

function botonCarrito() {
  // agrega los productos al carrito de compras y hace push al array carritocomprasguradado
  for (const boton of botones) {
    boton.onclick = (e) => {
      avisoCarrito.innerHTML = `
      <a href="#carrito__compras"><p class="aviso__carrito__invisible">Revise su carrito</p></a>`;
      const productoBuscado = mercaderia.find(
        (producto) => producto.id == e.target.id
      );
      carrito.className = "carrito__contenedor";
      carrito.innerHTML += `<div id="carrito__aparece${productoBuscado.id}" class="producto__carrito__aparece">
   <p id="parrafo__carrito"> usted selecciono ${productoBuscado.nombre} </p>
   <p id ="precio__producto"> precio: $${productoBuscado.precio}  </p>
   </div>`;
      carritoComprasGuardado.push({
        id: productoBuscado.id,
        nombre: productoBuscado.nombre,
        precio: productoBuscado.precio,
      });
      montoTotalCarrito();
      localStorage.setItem(`carrito`, JSON.stringify(carritoComprasGuardado));
    };
  }
}
botonCarrito();

//renderizado del input

buscadorProductosInput.oninput = () => {
  // renderiza los productos del imput
  let productoARenderizarBuscador = mercaderia.filter((producto) =>
    producto.nombre.includes(buscadorProductosInput.value)
  );
  if (productoARenderizarBuscador == ``) {
    let productoVacio = document.getElementById(`lista`);
    productoVacio.innerHTML = `
    <h2 class ="titulo__producto__inexistente"> LO LAMENTAMOS, NO TENEMOS ESE PRODUCTO </H2>`;
  } else {
    let productoListado = document.getElementById(`lista`);
    productoListado.innerHTML = ``;
    for (const producto of productoARenderizarBuscador) {
      let productoListado = document.createElement(`div`);
      productoListado.className = "producto";
      productoListado.innerHTML = `<h2> ${producto.nombre} </h2>
                                <img src=" images/tambores.jpg " class="imagen__producto"  ></img>
                                <button class ="boton" id= "${producto.id}">agregar al carrito</button>`;
      contenedorProductos.appendChild(productoListado);
    }
    botonCarrito();
  }
};

// BOTON QUE LIMPIA EL CARRITO
let colocarBoton = document.getElementsByClassName(`carrito__contenedor`);
let botonLimpiarCarrito = document.getElementById(`limpiar__carrito`);
botonLimpiarCarrito.onclick = () => {
  (carrito.innerHTML = ``), (avisoCarrito.innerHTML = ``),(carrito.className = ``), (montoCarrito.innerHTML = ``),(carritoComprasGuardado.splice(0)), (localStorage.clear(`carrito`));
};





    
  
  




