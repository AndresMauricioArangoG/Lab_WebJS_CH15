const test = require("node:test");
const assert = require("node:assert/strict");
const { paginaConJS, cuerpoDe } = require("./utilidades");

const ABIERTO = "Abierto ahora. Cerramos a las 5:00 p. m.";
const CERRADO = "Cerrado. Abrimos a las 8:00 a. m.";

// Abre la página a esa hora y revisa el estado. Si algo falla y app.js
// lanzó un error, se muestra ese error: casi siempre es la causa.
function revisarEstadoALas(hora, revisar) {
  const { window, error } = paginaConJS(hora);
  try {
    const estado = window.document.querySelector("#estado");
    assert.ok(estado, 'no encuentro el <p id="estado"> en index.html');
    revisar(estado);
  } catch (fallo) {
    throw error || fallo;
  }
}

test("a las 10 a. m. la página dice que está abierto", () => {
  revisarEstadoALas(10, (estado) => {
    assert.equal(estado.textContent.trim(), ABIERTO, `a las 10 a. m. el estado debería decir "${ABIERTO}"`);
  });
});

test("a las 10 a. m. el estado tiene la clase abierto", () => {
  revisarEstadoALas(10, (estado) => {
    assert.ok(estado.classList.contains("abierto"), 'a las 10 a. m. el estado debería tener la clase "abierto" (usa classList.add)');
    assert.ok(!estado.classList.contains("cerrado"), 'a las 10 a. m. el estado NO debería tener la clase "cerrado"');
  });
});

test("a las 8 p. m. la página dice que está cerrado", () => {
  revisarEstadoALas(20, (estado) => {
    assert.equal(estado.textContent.trim(), CERRADO, `a las 8 p. m. el estado debería decir "${CERRADO}"`);
  });
});

test("a las 8 p. m. el estado tiene la clase cerrado", () => {
  revisarEstadoALas(20, (estado) => {
    assert.ok(estado.classList.contains("cerrado"), 'a las 8 p. m. el estado debería tener la clase "cerrado" (usa classList.add)');
    assert.ok(!estado.classList.contains("abierto"), 'a las 8 p. m. el estado NO debería tener la clase "abierto"');
  });
});

test("mostrarEstado usa estaAbierto, textContent y classList", () => {
  const codigo = cuerpoDe("mostrarEstado");
  assert.match(codigo, /estaAbierto\s*\(/, "mostrarEstado debería llamar a estaAbierto(...) en vez de repetir la condición");
  assert.match(codigo, /\.textContent\s*=/, "mostrarEstado debería poner el texto con textContent");
  assert.match(codigo, /\.classList\.add\s*\(/, "mostrarEstado debería poner la clase con classList.add(...)");
});
