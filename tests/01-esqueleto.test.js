const test = require("node:test");
const assert = require("node:assert/strict");
const { paginaSinJS } = require("./utilidades");

test("el documento declara <!DOCTYPE html>", () => {
  const documento = paginaSinJS();
  assert.ok(documento.doctype && documento.doctype.name === "html", "index.html debería empezar con <!DOCTYPE html> (debajo del comentario del enunciado)");
});

test("la etiqueta html tiene el idioma en español", () => {
  const html = paginaSinJS().documentElement;
  assert.equal(html.getAttribute("lang"), "es", '<html> debería tener lang="es"');
});

test("el head tiene la codificación UTF-8 y el viewport para celular", () => {
  const head = paginaSinJS().head;
  const charset = head.querySelector("meta[charset]");
  assert.ok(charset && charset.getAttribute("charset").toLowerCase() === "utf-8", 'el <head> debería tener <meta charset="UTF-8">');
  const viewport = head.querySelector('meta[name="viewport"]');
  assert.ok(viewport && (viewport.getAttribute("content") || "").includes("width=device-width"), 'el <head> debería tener <meta name="viewport" content="width=device-width, initial-scale=1.0">');
});

test("el título de la pestaña dice Vivero Guadua", () => {
  const titulo = paginaSinJS().head.querySelector("title");
  assert.ok(titulo, "el <head> debería tener un <title>");
  assert.ok(titulo.textContent.includes("Vivero Guadua"), `el <title> debería incluir "Vivero Guadua" (dice "${titulo.textContent.trim()}")`);
});

test("el head enlaza styles.css con un link", () => {
  const link = paginaSinJS().head.querySelector('link[rel="stylesheet"][href="styles.css"]');
  assert.ok(link, 'el <head> debería tener <link rel="stylesheet" href="styles.css">');
});

test("el head carga app.js con defer", () => {
  const script = paginaSinJS().head.querySelector('script[src="app.js"]');
  assert.ok(script, 'el <head> debería tener <script src="app.js"></script>');
  assert.ok(script.hasAttribute("defer"), "el <script> de app.js debería tener el atributo defer (sin él, app.js corre antes de que exista la página)");
});
