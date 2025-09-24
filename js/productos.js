// productos.js

// datos de productos
const productos = {
  napolitana: {
    nombre: "Pizza Napolitana",
    descripcion: "Pizza clásica con salsa de tomate, mozzarella fresca y albahaca.",
    precio: 6500,
    imagen: "img/napolitana.jpg"
  },
  pepperoni: {
    nombre: "Pizza Pepperoni",
    descripcion: "Pizza con abundante pepperoni y queso derretido.",
    precio: 7000,
    imagen: "img/pepperoni.jpg"
  },
  vegetariana: {
    nombre: "Pizza Vegetariana",
    descripcion: "Pizza con champiñones, pimientos, cebolla y aceitunas.",
    precio: 6800,
    imagen: "img/vegetariana.jpg"
  },
  cuatroquesos: {
    nombre: "Pizza Cuatro Quesos",
    descripcion: "Pizza con una mezcla de mozzarella, gorgonzola, parmesano y ricotta.",
    precio: 7200,
    imagen: "img/cuatroquesos.jpeg"
  }
};

// leer parametro url
const params = new URLSearchParams(window.location.search);
const productoId = params.get("producto");

// cargar datos de la pagina
if (productoId && productos[productoId]) {
  const p = productos[productoId];
  document.getElementById("producto-nombre").textContent = p.nombre;
  document.getElementById("producto-descripcion").textContent = p.descripcion;
  document.getElementById("producto-precio").textContent = "$" + p.precio.toLocaleString();
  document.getElementById("producto-img").src = p.imagen;
}
