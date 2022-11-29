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
const producto11 = new Productos(11,"DILUYENTE POLIURETANO TAMBOR",120000,23);
const productoGrafica0 = new Productos(0,"DILUYENTE LPC 155 TAMBOR",80000,1000);
const productoGrafica1 = new Productos(1,"DILUYENTE ADH 307 TAMBOR",90000,45);
const productoGrafica2 = new Productos(2, "DILUYENTE FMP50 TAMBOR", 98000, 990);
const productoGrafica3 = new Productos(3,"DILUYENTE POLIAMIDAS TAMBOR",78000, 100);
const productoGrafica4 = new Productos(4,"DILUYENTE FLEXOGRAFICO TAMBOR", 89000,23);

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

const mercaderiaGrafica = [
  productoGrafica0,
  productoGrafica1,
  productoGrafica2,
  productoGrafica3,
  productoGrafica4,
];

let buscadorProductosInput = document.getElementById(`buscador__productos`);
let contenedorProductos = document.getElementById(`lista`);
let carrito = document.getElementById(`carrito__compras`);
let botones = document.getElementsByClassName(`boton`);
let cuentaTotal = document.getElementById(`carrito__total`);
let avisoCarrito = document.getElementById("seccion__aviso__carrito");
let montoCarrito = document.getElementById("monto__carrito");
let botonRenderizadoProductosFerreteria =
  document.getElementById(`boton__ferreteria`);
let botonRenderizadoProductosIndustriaGrafica = document.getElementById(
  `boton__industria__grafica`
);
let opiniones = document.getElementById(`opiniones__clientes`);
let carritoComprasGuardado = [];

botonRenderizadoProductosFerreteria.onclick = () => {
  contenedorProductos.innerHTML = ``;
  renderizarProductos(mercaderia);
  buscador(mercaderia);
  botonCarrito(mercaderia);
};
botonRenderizadoProductosIndustriaGrafica.onclick = () => {
  contenedorProductos.innerHTML = ``;
  renderizarProductos(mercaderiaGrafica);
  buscador(mercaderiaGrafica);
  botonCarrito(mercaderiaGrafica);
};

  fetch(`./opiniones.json`)
  .then((response) => response.json())
  .then((arrayOpiniones) => {
    for (const opinion of arrayOpiniones) {
      setTimeout(() =>(
      opiniones.innerHTML += `<div class="opinion__cliente"> 
  <h6>" ${opinion.nombre} " </h6>
  <p> ${opinion.opinion} </p>  
  </div>`) , 3000)
  opiniones.innerHTML = ``}
  });

  function opinionesRenderizadas() {
    opiniones.innerHTML += `<div class="opinion__cliente"> 
  <h6>" ${opinion.nombre} " </h6>
  <p> ${opinion.opinion} </p>  
  </div>`
  opiniones.innerHTML =``
    
  }
  
  

//RENDERIZA EL CARRITO GUARDADO EN LOCAL STORAGE
if (localStorage.getItem(`carrito`)) {
  avisoCarrito.innerHTML = `
      <a href="#carrito__compras"><p class="aviso__carrito__invisible">Revise su carrito</p></a>`;
  carritoComprasGuardado = JSON.parse(localStorage.getItem("carrito"));
  montoTotalCarrito();
  for (const { nombre, id, precio } of carritoComprasGuardado) {
    carrito.className = "carrito__contenedor";
    carrito.innerHTML += `<div id="carrito__aparece${id}" class="producto__carrito__aparece">
   <p id="parrafo__carrito"> usted selecciono ${nombre} </p>
   <p id ="precio__producto"> precio: $${precio}  </p>
   </div>`;
  }
}
// puedo tomar los botones de las cards, y que el click ejecute la funcion renderizar, primero limpio el contenedor y depsues
// ejecuto la funcion pasandole el array como parametro xej renderizarProductos(carritoComprasGuardado);
function renderizarProductos(mercaderia) {
  //FUNCION QUE RENDERIZA TODOS LOS PRODUCTOS DE ARRAY MERCADERIA
  for (const { nombre, id } of mercaderia) {
    let productoListado = document.createElement(`div`);
    productoListado.className = "producto";
    productoListado.innerHTML = `<h2 class="titulo__producto"> ${nombre} </h2>
                                <div class="imagen__tambor"><img src=" images/tambores.jpg " class="imagen__producto"  ></img></div>
                                <button class ="boton" id= "${id}">agregar al carrito</button>`;
    contenedorProductos.appendChild(productoListado);
  }
}

// funcion que suma el total del carrito y lo muestra en pantalla

function montoTotalCarrito() {
  carritoMonto = carritoComprasGuardado.map((el) => el.precio);
  let sumaCarrito = carritoMonto.reduce((acc, numero) => acc + numero);
  montoCarrito.innerHTML = `
  <p id="monto__final__carrito"> Monto total $ ${sumaCarrito} </p>`;
}

function botonCarrito(mercaderia) {
  // agrega los productos al carrito de compras y hace push al array carritocomprasguradado
  for (const boton of botones) {
    boton.onclick = (e) => {
      const productoBuscado = mercaderia.find(
        (producto) => producto.id == e.target.id
      );
      const Toast = Swal.mixin({
        toast: true,
        position: "center",
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: "Producto agregado al carrito",
      });
      const { id, nombre, precio } = productoBuscado; // desestructurando a medias
      carrito.className = "carrito__contenedor";
      carrito.innerHTML += `<div id="carrito__aparece${id}" class="producto__carrito__aparece">
   <p id="parrafo__carrito"> usted selecciono ${nombre} </p>
   <p id ="precio__producto"> precio: $${precio}  </p>
   </div>`;
      carritoComprasGuardado.push({
        id: id,
        nombre: nombre,
        precio: precio,
      });
      montoTotalCarrito();
      localStorage.setItem(`carrito`, JSON.stringify(carritoComprasGuardado));
    };
  }
}

//renderizado del input
function buscador(mercaderia) {
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
      for (const { nombre, id } of productoARenderizarBuscador) {
        let productoListado = document.createElement(`div`);
        productoListado.className = "producto";
        productoListado.innerHTML = `<h2 class="titulo__producto"> ${nombre} </h2>
                                <img src=" images/tambores.jpg " class="imagen__producto"  ></img>
                                <button class ="boton" id= "${id}">agregar al carrito</button>`;
        contenedorProductos.appendChild(productoListado);
      }
      botonCarrito(mercaderia);
    }
  };
}

// BOTON QUE LIMPIA EL CARRITO
let colocarBoton = document.getElementsByClassName(`carrito__contenedor`);
let botonLimpiarCarrito = document.getElementById(`limpiar__carrito`);
botonLimpiarCarrito.onclick = () => {
  (carrito.innerHTML = ``),
    (avisoCarrito.innerHTML = ``),
    (carrito.className = ``),
    (montoCarrito.innerHTML = ``),
    carritoComprasGuardado.splice(0),
    localStorage.clear(`carrito`);
  Swal.fire(`usted limpio su carrito`);
};
