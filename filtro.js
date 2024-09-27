// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.getElementById("lista-de-productos") // Se corrige getElementsbyName a byId y se cambia nombre de variable
const inputBusqueda = document.querySelector("input"); // Se elimina el punto de .input y se cambia nombre de variable
const botonDeFiltro = document.querySelector("button"); // Se mueve de lugar esta variable

// Se crea función para mostrar los productos
function displayProductos(productos) {
  listaProductos.innerHTML = '';

// Se cambia d por div
for (let i = 0; i < productos.length; i++) {
  const div = document.createElement("div");
  div.classList.add("producto");

  // Se cambia ti por titulo
  const titulo = document.createElement("p");
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  div.appendChild(titulo);
  div.appendChild(imagen);
  listaProductos.appendChild(div);
  }
}

displayProductos(productos);

botonDeFiltro.onclick = function() {
  //Se elimina for para ser reemplazado por la función displayProductos, misma que se reutiliza

  // Se cambia nombre de variable a textoBusqueda
  const textoBusqueda = inputBusqueda.value;
  const productosFiltrados = filtrado(productos, textoBusqueda );
  displayProductos(productosFiltrados);
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  