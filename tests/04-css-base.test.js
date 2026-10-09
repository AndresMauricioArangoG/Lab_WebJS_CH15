const test = require("node:test");
const assert = require("node:assert/strict");
const { reglasCSS } = require("./utilidades");

function partes(selector) {
  return selector.split(",").map((parte) => parte.trim());
}

const AVISO = "(si sí la escribiste, revisa que la regla de arriba cierre su llave })";

test(":root define al menos 4 variables", () => {
  const variables = reglasCSS()
    .filter((r) => partes(r.selector).includes(":root"))
    .flatMap((r) => Object.keys(r.propiedades).filter((p) => p.startsWith("--")));
  assert.ok(variables.length >= 4, `:root debería tener al menos 4 variables --nombre (tiene ${variables.length}) ${AVISO}`);
});

test("las variables se usan con var() al menos 4 veces", () => {
  const usos = reglasCSS()
    .flatMap((r) => Object.values(r.propiedades))
    .filter((valor) => valor.includes("var(--")).length;
  assert.ok(usos >= 4, `debería haber al menos 4 declaraciones que usen var(--...) (hay ${usos})`);
});

test("body tiene font-family y color", () => {
  const body = reglasCSS().filter((r) => partes(r.selector).includes("body"));
  assert.ok(body.length, `debería haber una regla para body ${AVISO}`);
  const propiedades = Object.assign({}, ...body.map((r) => r.propiedades));
  assert.ok(propiedades["font-family"], "la regla de body debería tener font-family");
  assert.ok(propiedades["color"], "la regla de body debería tener color (el color del texto)");
});

test("hay al menos una regla para los títulos", () => {
  const titulos = reglasCSS().filter((r) => partes(r.selector).some((p) => ["h1", "h2", "h3"].includes(p)));
  assert.ok(titulos.length, `debería haber una regla con selector h1, h2 o h3 ${AVISO}`);
});
