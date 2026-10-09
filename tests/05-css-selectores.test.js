const test = require("node:test");
const assert = require("node:assert/strict");
const { reglasCSS } = require("./utilidades");

function reglasDe(clase) {
  const patron = new RegExp("\\" + clase + "(?![\\w-])");
  return reglasCSS().filter((r) => patron.test(r.selector));
}

test("usa un selector de clase propio", () => {
  const propias = reglasCSS().filter((r) => r.selector.replace(/\.(abierto|cerrado|agotado)(?![\w-])/g, "").includes("."));
  assert.ok(propias.length, "debería haber al menos una regla con selector de clase (.algo), además de .abierto, .cerrado y .agotado");
});

test("usa un selector de id", () => {
  const conId = reglasCSS().filter((r) => r.selector.includes("#"));
  assert.ok(conId.length, "debería haber al menos una regla con selector de id (#algo)");
});

test("usa :hover", () => {
  const hover = reglasCSS().filter((r) => r.selector.includes(":hover"));
  assert.ok(hover.length, "debería haber al menos una regla con :hover (cuando el mouse pasa por encima)");
});

test(".abierto y .cerrado tienen color o fondo", () => {
  for (const clase of [".abierto", ".cerrado"]) {
    const propiedades = Object.assign({}, ...reglasDe(clase).map((r) => r.propiedades));
    assert.ok(propiedades["color"] || propiedades["background-color"], `debería haber una regla ${clase} con color o background-color`);
  }
});

test(".agotado tiene estilo", () => {
  const reglas = reglasDe(".agotado").filter((r) => Object.keys(r.propiedades).length > 0);
  assert.ok(reglas.length, "debería haber una regla .agotado con al menos una declaración (por ejemplo, color gris)");
});
