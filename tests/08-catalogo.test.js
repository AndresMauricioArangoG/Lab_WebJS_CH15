const test = require("node:test");
const assert = require("node:assert/strict");
const { paginaConJS, cuerpoDe } = require("./utilidades");

// Abre la página y entrega las plantas y los <li> del catálogo. Si algo falla
// y app.js lanzó un error, se muestra ese error: casi siempre es la causa.
function revisarCatalogo(revisar) {
  const { window, error } = paginaConJS(10);
  try {
    const lista = window.document.querySelector("#catalogo");
    assert.ok(lista, 'no encuentro el <ul id="catalogo"> en index.html');
    let plantas;
    try {
      plantas = window.eval("plantas");
    } catch (e) {
      throw new Error("No encuentro el array plantas en app.js: no lo borres ni le cambies el nombre");
    }
    const items = [...lista.querySelectorAll("li")];
    assert.equal(items.length, plantas.length, `el catálogo debería tener ${plantas.length} <li> (uno por planta del array) y tiene ${items.length}`);
    revisar(plantas, items);
  } catch (fallo) {
    throw error || fallo;
  }
}

function pesos(valor) {
  return "$" + valor.toLocaleString("es-CO");
}

test("hay un li por cada planta del array", () => {
  revisarCatalogo(() => {});
});

test("cada li tiene la clase planta y el nombre en un h3", () => {
  revisarCatalogo((plantas, items) => items.forEach((li, i) => {
    assert.ok(li.classList.contains("planta"), `el <li> de "${plantas[i].nombre}" debería tener la clase "planta"`);
    const h3 = li.querySelector("h3");
    assert.equal(h3 && h3.textContent.trim(), plantas[i].nombre, `el <li> número ${i + 1} debería tener <h3>${plantas[i].nombre}</h3>`);
  }));
});

test("las plantas con stock muestran su precio", () => {
  revisarCatalogo((plantas, items) => items.forEach((li, i) => {
    if (plantas[i].stock === 0) return;
    const precio = li.querySelector(".precio");
    assert.equal(precio && precio.textContent.trim(), pesos(plantas[i].precio), `"${plantas[i].nombre}" debería mostrar <span class="precio">${pesos(plantas[i].precio)}</span>`);
    assert.ok(!li.classList.contains("agotado"), `"${plantas[i].nombre}" tiene stock: su <li> NO debería tener la clase "agotado"`);
  }));
});

test("las plantas sin stock dicen Agotado", () => {
  revisarCatalogo((plantas, items) => {
    assert.ok(plantas.some((p) => p.stock === 0), "el array plantas debería conservar las plantas con stock 0");
    items.forEach((li, i) => {
      if (plantas[i].stock !== 0) return;
      assert.ok(li.classList.contains("agotado"), `"${plantas[i].nombre}" tiene stock 0: su <li> debería tener las clases "planta agotado"`);
      const precio = li.querySelector(".precio");
      assert.equal(precio && precio.textContent.trim(), "Agotado", `"${plantas[i].nombre}" debería mostrar <span class="precio">Agotado</span>`);
    });
  });
});

test("mostrarCatalogo usa un ciclo, un if y formatearPrecio", () => {
  const codigo = cuerpoDe("mostrarCatalogo");
  assert.match(codigo, /\b(for|while)\s*\(/, "mostrarCatalogo debería recorrer el array con un ciclo (for o while)");
  assert.match(codigo, /\bif\s*\(/, "mostrarCatalogo debería usar un if para las plantas agotadas");
  assert.match(codigo, /formatearPrecio\s*\(/, "mostrarCatalogo debería llamar a formatearPrecio(...) en vez de repetir el formato");
});
