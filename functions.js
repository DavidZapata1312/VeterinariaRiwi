// Lista (array) donde se almacenan los pacientes
let pacientes = [
    { nombre: "Firulais", especie: "Perro", edad: 9, vacunado: true },
    { nombre: "Michi", especie: "Gato", edad: 6, vacunado: false },
];

// Añadir mascota
function añadirMascota() {
    let nombre = prompt("Ingresa el nombre de tu mascota:");
    let especie = prompt("Ingresa la especie de tu mascota:");
    let edad = parseInt(prompt("Ingresa la edad de tu mascota:"));
    let vacunado = prompt("¿Tu mascota está vacunada? (si/no):").toLowerCase();

    if (vacunado === "si") {
        vacunado = true;
    } else if (vacunado === "no") {
        vacunado = false;
    } else {
        alert(" Respuesta no válida. Debe ser 'si' o 'no'.");
        return;
    }

    let nuevaMascota = { nombre, especie, edad, vacunado };
    pacientes.push(nuevaMascota);
    alert(" Mascota añadida con éxito.");
}

// Buscar mascota
function buscarMascota() {
    let nombreBuscado = prompt("Ingresa el nombre de la mascota a buscar:");
    let resultado = pacientes.find(pet => pet.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (resultado) {
        alert(` Mascota encontrada:\nNombre: ${resultado.nombre}\nEspecie: ${resultado.especie}\nEdad: ${resultado.edad}\nVacunado: ${resultado.vacunado ? "Sí" : "No"}`);
    } else {
        alert(` No se encontró ninguna mascota llamada "${nombreBuscado}".`);
    }
}

// Mostrar vacunados
function mostrarVacunados() {
    let vacunados = pacientes.filter(pet => pet.vacunado);

    if (vacunados.length === 0) {
        alert(" No hay mascotas vacunadas registradas.");
        return;
    }

    let mensaje = " Mascotas vacunadas:\n";
    vacunados.forEach(pet => {
        mensaje += `Nombre: ${pet.nombre} | Edad: ${pet.edad} | Especie: ${pet.especie}\n`;
    });
    alert(mensaje);
}

// Calcular promedio
function calcularPromedioEdad() {
    if (pacientes.length === 0) return 0;

    let total = pacientes.reduce((sum, pet) => sum + pet.edad, 0);
    return total / pacientes.length;
}

function mostrarPromedio() {
    let promedio = calcularPromedioEdad();
    alert(` Promedio de edad: ${promedio.toFixed(2)} años`);
}

// Ordenar por edad
function mostrarOrdenEdad() {
    let ordenados = [...pacientes].sort((a, b) => a.edad - b.edad);
    let mensaje = "Mascotas ordenadas por edad:\n";
    ordenados.forEach(pet => {
        mensaje += `Nombre: ${pet.nombre} | Edad: ${pet.edad} | Especie: ${pet.especie} | Vacunado: ${pet.vacunado ? "Sí" : "No"}\n`;
    });
    alert(mensaje);
}
