alert ("bienvenidos al cotizador, le pediremos algunos datos para personalizar su presupuesto")
let precio = 1
let nombreUsuario 
let precioProductos
let montoIva = 0.21
// declaro variables globales
let precioThinner = 1000
let precioAgua = 2000
let precioDiluyente = 3000
let precioAceiteLino = 4000
// establezco variables que figuran en base de datos

// pregunta nombre, en caso de que no ingrese nombre, vuelve a preguntar.... (tendria que decir "no ingreso nombre=?????"

do { nombreUsuario = prompt ("ingrese su nombre");} 
while (nombreUsuario === "") ;

 alert (" bienvenido " + nombreUsuario)  
 
// pregunta si tiene descuento y declaro variable descuento para el cicuito if/else

alert(  nombreUsuario + " ha realizado alguna compra anterior?")

let descuento = prompt (" ingrese si o no") .toLowerCase()

// si tiene descuento modifica variable precio * 0.95 para hacer descuent 5%

if (descuento == "si") { 
    precioProductos = precio * 0.95
    alert ("usted tiene 5% de descuento")
    
}

// si no tiene descuento modifica variable precio * 1.05 para hacer precio de venta mas 5%
else { precioProductos = precio * 1.05
   
    alert ("no tiene descuento") }

// declaro funcion que calcula precio del producto de base de datos * la variable precioProducto que establece descuento

function precioCalculado(precio1 , precio2) {
    return precio1 * precio2
    
}

// function precioIva (parametro1 , parametro2){
//     return parametro1 * parametro2
// }
// switch para eleccion de producto
   

let eleccion = Number (prompt ("elija el producto 1 -- thinner  2 -- aguarras  3 -- diluyente  4 -- aceite de lino"))
switch (eleccion) {
    case 1: alert (" eligio thinner") 
    alert(" el precio es " + precioCalculado (precioProductos , precioThinner)) 
    // llamo a la variable que calcula px producto por descuento
        
        break;

    case 2: alert (" eligio aguarras")
    alert(" el precio es " + precioCalculado (precioProductos , precioAgua))
    
        
        break;    
    case 3: alert (" eligio diluyente")
    alert(" el precio es " + precioCalculado (precioProductos , precioDiluyente))
        
        break;
     case 4: alert (" eligio aceite lino")
         alert(" el precio es " + precioCalculado (precioProductos , precioAceiteLino))
        
        break;

    default: alert ("no tenemos ese producto")
        break;}




