const test = require("node:test");
const assert = require("node:assert/strict");
const { paginaSinJS } = require("./utilidades");

test("el header tiene un nav con al menos 3 enlaces", () => {
  const header = paginaSinJS().querySelector("body header");
  assert.ok(header, "la página debería tener un <header>");
  const nav = header.querySelector("nav");
  assert.ok(nav, "el <header> debería tener un <nav> adentro");
  const enlaces = nav.querySelectorAll("a");
  assert.ok(enlaces.length >= 3, `el <nav> debería tener al menos 3 enlaces <a> (tiene ${enlaces.length})`);
});

test("hay un solo main y un solo h1", () => {
  const documento = paginaSinJS();
  assert.equal(documento.querySelectorAll("main").length, 1, "la página debería tener exactamente un <main>");
  assert.equal(documento.querySelectorAll("h1").length, 1, "la página debería tener exactamente un <h1> (el título principal)");
});

test("el main tiene las secciones inicio, plantas y cuidados", () => {
  const main = paginaSinJS().querySelector("main");
  assert.ok(main, "la página debería tener un <main>");
  for (const id of ["inicio", "plantas", "cuidados"]) {
    const seccion = main.querySelector(`section#${id}`);
    assert.ok(seccion, `dentro del <main> debería haber un <section id="${id}">`);
  }
});

test("cada enlace del nav lleva a un id que existe", () => {
  const documento = paginaSinJS();
  const enlaces = documento.querySelectorAll("nav a");
  assert.ok(enlaces.length > 0, "el <nav> debería tener enlaces <a>");
  for (const enlace of enlaces) {
    const destino = enlace.getAttribute("href") || "";
    assert.ok(destino.startsWith("#"), `el enlace "${enlace.textContent.trim()}" debería tener href="#id-de-una-seccion" (tiene "${destino}")`);
    assert.ok(documento.getElementById(destino.slice(1)), `el enlace "${enlace.textContent.trim()}" lleva a ${destino}, pero no hay ningún elemento con id="${destino.slice(1)}"`);
  }
});

test("el footer está fuera del main y tiene la dirección", () => {
  const documento = paginaSinJS();
  const footer = documento.querySelector("footer");
  assert.ok(footer, "la página debería tener un <footer>");
  assert.ok(!footer.closest("main"), "el <footer> debería ir después del <main>, no adentro");
  assert.equal(footer.id, "visitanos", 'el <footer> debería tener id="visitanos"');
  assert.ok(footer.querySelector("address"), "el <footer> debería tener un <address> con la dirección y el horario");
});
