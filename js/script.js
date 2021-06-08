alert("¡Bienvenido a Carril Rápido!");

function randomWelcome(items){
    return items[Math.floor(Math.random()*items.length)];
}

var items = ["¡Bienvenido!", "¡Hola!", "Llegaste al lugar indicado", "I live my life a quarter mile at a time - El Dominic Toretto"];
console.log(randomWelcome(items));

let bienvenida = document.createElement("h2");
bienvenida.innerText = randomWelcome(items);
document.getElementById("saludo").appendChild(bienvenida);

let botonUsuario = document.createElement("button");
botonUsuario.innerText = "Ingrese los datos de su vehículo";
botonUsuario.setAttribute("onclick", "ingresarVehiculo()");
document.getElementById("autoUsuario").appendChild(botonUsuario);

function vehiculo(marca, modelo, anio, ruedas) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.ruedas = ruedas;
}

function ingresarVehiculo() {
    let marcaAuto1 = prompt("Ingrese la marca de su vehículo");
    let modeloAuto1 = prompt("Ingrese el modelo de su vehículo");
    let anioAuto1 = prompt("Ingrese el año de fabricación su vehículo");
    let ruedasAuto1 = prompt("Ingrese cuántas ruedas tiene su vehículo");
    let auto1 = new vehiculo(marcaAuto1, modeloAuto1, anioAuto1, ruedasAuto1);
    console.log(auto1);
}
