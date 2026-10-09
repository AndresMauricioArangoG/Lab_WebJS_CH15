// ============================================================
// Ejercicios 06, 07 y 08 · El vivero cobra vida (JavaScript)
// ============================================================
// Los datos del negocio ya vienen listos. Tú completas las 4
// funciones, donde dice // Tu código aquí. No cambies sus nombres.
// ============================================================

// ===== Datos del negocio (ya vienen listos) =====
const HORA_APERTURA = 8;
const HORA_CIERRE = 17;

const plantas = [
    { nombre: "Suculenta echeveria", cuidado: "Riego cada 10 días. Mucha luz.", precio: 12000, stock: 15 },
    { nombre: "Monstera deliciosa", cuidado: "Riego semanal. Luz indirecta.", precio: 68000, stock: 4 },
    { nombre: "Helecho de Boston", cuidado: "Tierra húmeda. Sombra parcial.", precio: 35000, stock: 0 },
    { nombre: "Cactus San Pedro", cuidado: "Riego cada 15 días. Sol directo.", precio: 18500, stock: 9 },
    { nombre: "Lirio de paz", cuidado: "Riego semanal. Poca luz.", precio: 42000, stock: 0 },
    { nombre: "Poto dorado", cuidado: "Riego cada 5 días. Luz media.", precio: 25000, stock: 12 },
];

// ============================================================
// Ejercicio 06 · La lógica del negocio (no toca la página)
// ============================================================
// estaAbierto(hora): recibe la hora (0 a 23) y retorna true si el
// vivero está abierto: desde HORA_APERTURA (incluida) hasta antes
// de HORA_CIERRE.
//   estaAbierto(10) → true
//   estaAbierto(8)  → true    (a las 8:00 ya abrió)
//   estaAbierto(17) → false   (a las 5:00 p. m. ya cerró)
//
// formatearPrecio(valor): retorna el precio con signo $ y punto
// de miles, como en Colombia.
//   formatearPrecio(12000) → "$12.000"
//   formatearPrecio(4500)  → "$4.500"
//
// Pista: usa las constantes de arriba, no escribas 8 y 17 a mano.
// ============================================================

function estaAbierto(hora) {
    return hora >= HORA_APERTURA && hora < HORA_CIERRE
}

function formatearPrecio(valor) {
    // Tu código aquí
}

// ============================================================
// Ejercicio 07 · El estado en la página (DOM)
// ============================================================
// mostrarEstado(): busca el <p id="estado"> y, según la hora
// actual del computador, escribe UNO de estos textos (exactos):
//   Abierto ahora. Cerramos a las 5:00 p. m.
//   Cerrado. Abrimos a las 8:00 a. m.
// y le agrega la clase "abierto" o "cerrado".
//
// Reglas: usa estaAbierto(...) para decidir, textContent para el
// texto y classList.add(...) para la clase.
// Pista: new Date().getHours() te da la hora actual.
// ============================================================

function mostrarEstado() {
    // Tu código aquí
}

// ============================================================
// Ejercicio 08 · El catálogo sale de los datos
// ============================================================
// mostrarCatalogo(): recorre el array plantas y llena el
// <ul id="catalogo"> con un <li> por planta, con esta forma:
//
//   <li class="planta">
//       <h3>Suculenta echeveria</h3>
//       <p>Riego cada 10 días. Mucha luz.</p>
//       <span class="precio">$12.000</span>
//   </li>
//
// Regla de negocio: si una planta tiene stock 0, su <li> lleva
// las clases "planta agotado" y en el <span class="precio">
// dice Agotado en vez del precio.
//
// Reglas: usa un ciclo, un if y tu función formatearPrecio(...).
// Pista: arma todo el HTML en una variable y asígnalo al final
// con innerHTML, como en Café Origen.
// ============================================================

function mostrarCatalogo() {
    // Tu código aquí
}

// No borres estas dos líneas: ponen a funcionar la página
mostrarEstado();
mostrarCatalogo();
