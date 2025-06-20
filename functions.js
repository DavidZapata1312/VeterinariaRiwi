// Lista (array) donde se almacenan los pacientes
let pacientes = [
    {
        nombre: "Firulais",
        especie: "Perro",
        edad: 9,
        vacunado: true
    },
    {
        nombre: "Michi",
        especie: "Gato",
        edad: 6,
        vacunado: false
    }
];



function añadirMascota() {
    //Funcion para añadir mascotas
}

function buscarMascota() {
    //Funcion para buscar mascotas por nombre
}


//funcion para filtrar vacunados con funciones flecha
let vacunados = pacientes.filter(p => p.vacunado === true);
console.log("Pacientes vacunados:", vacunados);


function calcularPromedioEdad(pacientes) {
    if (pacientes.length === 0) {
        return 0;
    }

    let sumaEdades = pacientes.reduce((total, paciente) => total + paciente.edad, 0);
    let promedio = sumaEdades / pacientes.length;
    return promedio;
}
function mostrarPromedio() {
    let promedio = calcularPromedioEdad(pacientes);
    alert("Promedio de edad: " + promedio);
}
function mostrarOrdenEdad() {
    //Organizar mascotas por orden de edad
}
