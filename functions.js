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

console.log(pacientes);

function añadirMascota(){  //Funcion para añadir mascotas
    let nombre = prompt("Ingresa el nombre de tu mascota:");
    let especie = prompt("Ingresa la especie de tu mascota:");
    let edad = parseInt(prompt("Ingresa la edad de tu mascota:"))
    let vacunado = prompt("Tu mascota esta vacunada?:")
    if (vacunado === "si"){
        vacunado = true
    }else if(vacunado === "no"){
        vacunado = false
    }else
    console.error("Respuesta no valida")
    alert("Ingresa una respuesta valida")

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
