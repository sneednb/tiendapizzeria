// funciones base

// obtener carrito localstorage
function obtenerCarrito() {
  return JSON.parse(localStorage.getItem("carrito")) || [];
}

// guardar carrito en localstorage
function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// añadir producto desde producto.hmlt
const btnAdd = document.getElementById("btn-add-cart");

if (btnAdd) {
  btnAdd.addEventListener("click", () => {
    // obtener parametros de la url
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get("producto");
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (!productoId || !productos[productoId]) return;

    let carrito = obtenerCarrito();

    // verificar si ya existe el carrito
    const index = carrito.findIndex(item => item.id === productoId);
    if (index >= 0) {
      carrito[index].cantidad += cantidad;
    } else {
      carrito.push({
        id: productoId,
        nombre: productos[productoId].nombre,
        precio: productos[productoId].precio,
        cantidad: cantidad
      });
    }

    guardarCarrito(carrito);
    alert(`${productos[productoId].nombre} agregado al carrito `);
  });
}

// mostrar carrito en carrito
function mostrarCarrito() {
  const tabla = document.getElementById("tabla-carrito");
  const totalCarrito = document.getElementById("total-carrito");

  if (!tabla || !totalCarrito) return; // estamos en otra página

  let carrito = obtenerCarrito();
  tabla.innerHTML = "";
  let total = 0;

  carrito.forEach((item, index) => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>$${item.precio}</td>
      <td>${item.cantidad}</td>
      <td>$${item.precio * item.cantidad}</td>
      <td><button onclick="eliminarDelCarrito(${index})">❌</button></td>
    `;
    tabla.appendChild(fila);
    total += item.precio * item.cantidad;
  });

  totalCarrito.textContent = `Total: $${total}`;
}

// eliminar producto
function eliminarDelCarrito(index) {
  let carrito = obtenerCarrito();
  carrito.splice(index, 1);
  guardarCarrito(carrito);
  mostrarCarrito();
}

// vaciar carrito
const btnVaciar = document.getElementById("vaciar-carrito");
if (btnVaciar) {
  btnVaciar.addEventListener("click", () => {
    localStorage.removeItem("carrito");
    mostrarCarrito();
    alert("🗑 Carrito vaciado");
  });
}

// al cargar carrito
mostrarCarrito();
