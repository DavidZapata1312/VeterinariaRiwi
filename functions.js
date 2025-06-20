// Lista (array) donde se almacenan los pacientes
let pacientes = [];

// Cada paciente es un objeto
let paciente1 = {
    nombre: "Firulais",
    especie: "Perro",
    edad: 5,
    vacunado: true
};

let paciente2 = {
    nombre: "Michi",
    especie: "Gato",
    edad: 3,
    vacunado: false
};

// Agregamos los objetos a la lista
pacientes.push(paciente1);
pacientes.push(paciente2);

console.log(pacientes);

function añadirMascota(){  //Funcion para añadir mascotas
    let nombre = prompt("Ingresa el nombre de tu mascota:");
    let especie = prompt("Ingresa la especie de tu mascota:");
    let edad = parseInt(prompt("Ingresa la edad de tu mascota:"))
    let vacunado = prompt("Tu mascota esta vacunada?:")

    let mascotanueva = {
        "nombre" : nombre,
        "especie" : especie,
        "edad" : edad,
        "vacunado" : vacunado
    } 
    pacientes.push(mascotanueva)
} 
añadirMascota()
console.log(pacientes)


function buscarMascota(){
    //Funcion para buscar mascotas por nombre
}

function filtrarVacunador(){
    //funcion para filtrar vacunados con funciones flecha
}

function calcularPromedioEdad(){
    //calcular promedio de edades
}

function mostrarOrdenEdad(){
    //Organizar mascotas por orden de edad
}
