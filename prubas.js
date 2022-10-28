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






