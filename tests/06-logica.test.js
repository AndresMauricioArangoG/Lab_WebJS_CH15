const test = require("node:test");
const assert = require("node:assert/strict");
const { funcionDeApp } = require("./utilidades");

test("a las 10 de la mañana está abierto", () => {
  const estaAbierto = funcionDeApp("estaAbierto");
  assert.equal(estaAbierto(10), true, "estaAbierto(10) debería retornar true");
});

test("a las 8 en punto ya abrió", () => {
  const estaAbierto = funcionDeApp("estaAbierto");
  assert.equal(estaAbierto(8), true, "estaAbierto(8) debería retornar true (revisa si usaste >=)");
});

test("a las 17 en punto ya cerró", () => {
  const estaAbierto = funcionDeApp("estaAbierto");
  assert.equal(estaAbierto(17), false, "estaAbierto(17) debería retornar false (revisa si usaste <)");
});

test("a las 6 de la mañana está cerrado", () => {
  const estaAbierto = funcionDeApp("estaAbierto");
  assert.equal(estaAbierto(6), false, "estaAbierto(6) debería retornar false");
});

test("formatea 12000 como $12.000", () => {
  const formatearPrecio = funcionDeApp("formatearPrecio");
  assert.equal(formatearPrecio(12000), "$12.000", 'formatearPrecio(12000) debería retornar "$12.000"');
});

test("formatea 4500 como $4.500", () => {
  const formatearPrecio = funcionDeApp("formatearPrecio");
  assert.equal(formatearPrecio(4500), "$4.500", 'formatearPrecio(4500) debería retornar "$4.500"');
});
