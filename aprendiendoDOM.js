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



                        