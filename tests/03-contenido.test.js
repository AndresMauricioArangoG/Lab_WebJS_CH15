const test = require("node:test");
const assert = require("node:assert/strict");
const { paginaSinJS } = require("./utilidades");

test("la imagen tiene src y un alt que la describe", () => {
  const img = paginaSinJS().querySelector("main img");
  assert.ok(img, "dentro del <main> debería haber una <img>");
  assert.ok((img.getAttribute("src") || "").trim(), "la <img> debería tener el atributo src con la dirección de la foto");
  const alt = (img.getAttribute("alt") || "").trim();
  assert.ok(alt.length >= 10, `la <img> debería tener un alt que describa la foto (mínimo 10 letras; tiene "${alt}")`);
});

test("el texto usa strong y em", () => {
  const main = paginaSinJS().querySelector("main");
  assert.ok(main, "la página debería tener un <main>");
  assert.ok(main.querySelector("strong"), "dentro del <main> debería haber un <strong> (algo importante)");
  assert.ok(main.querySelector("em"), "dentro del <main> debería haber un <em> (algo con énfasis)");
});

test("la sección inicio tiene el párrafo del estado", () => {
  const estado = paginaSinJS().querySelector("#estado");
  assert.ok(estado, 'debería existir un <p id="estado"> (JavaScript lo va a cambiar)');
  assert.equal(estado.tagName, "P", 'el elemento con id="estado" debería ser un <p>');
  assert.ok(estado.closest("section#inicio"), 'el <p id="estado"> debería estar dentro de la sección inicio');
});

test("la sección plantas tiene el catálogo vacío", () => {
  const catalogo = paginaSinJS().querySelector("#catalogo");
  assert.ok(catalogo, 'debería existir un <ul id="catalogo">');
  assert.equal(catalogo.tagName, "UL", 'el elemento con id="catalogo" debería ser un <ul>');
  assert.ok(catalogo.closest("section#plantas"), 'el <ul id="catalogo"> debería estar dentro de la sección plantas');
  assert.equal(catalogo.querySelectorAll("li").length, 0, 'el <ul id="catalogo"> debería estar VACÍO en el HTML: JavaScript lo llena');
});

test("las secciones tienen h2 y el footer tiene small", () => {
  const documento = paginaSinJS();
  assert.ok(documento.querySelectorAll("main h2").length >= 2, "dentro del <main> debería haber al menos 2 <h2> (plantas y cuidados)");
  assert.ok(documento.querySelector("footer small"), "el <footer> debería tener un <small> con los derechos");
});
