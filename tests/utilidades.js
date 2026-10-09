// Ayudas para los tests: abren tu página en un navegador simulado (jsdom),
// leen tu CSS y corren tu app.js como lo haría el navegador con defer.
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { JSDOM, VirtualConsole } = require("jsdom");

const CARPETA = path.join(__dirname, "..", "vivero");

function leer(archivo) {
  const ruta = path.join(CARPETA, archivo);
  if (!fs.existsSync(ruta)) throw new Error(`No encuentro vivero/${archivo}: no le cambies el nombre ni la carpeta`);
  return fs.readFileSync(ruta, "utf8");
}

function silencioso() {
  return new VirtualConsole();
}

// La página tal como está en index.html, sin correr JavaScript
function paginaSinJS() {
  return new JSDOM(leer("index.html"), { virtualConsole: silencioso() }).window.document;
}

// Las reglas de tu styles.css: [{ selector, propiedades: { color: "...", ... } }]
function reglasCSS() {
  const css = leer("styles.css");
  const dom = new JSDOM("<style></style>", { virtualConsole: silencioso() });
  const style = dom.window.document.querySelector("style");
  style.textContent = css;
  const reglas = [];
  for (const regla of style.sheet.cssRules) {
    if (!regla.style) continue;
    const propiedades = {};
    for (let i = 0; i < regla.style.length; i++) {
      const nombre = regla.style[i];
      propiedades[nombre] = regla.style.getPropertyValue(nombre).trim();
    }
    reglas.push({ selector: regla.selectorText, propiedades });
  }
  return reglas;
}

function codigoSinComentarios(archivo) {
  return leer(archivo).replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
}

function explicarError(error) {
  const linea = ((error.stack || "").match(/vivero\/app\.js:(\d+)/) || [])[1];
  const donde = linea ? ` (línea ${linea})` : "";
  if (error.name === "SyntaxError") {
    return `app.js tiene un error de sintaxis (SyntaxError)${donde}: revisa paréntesis, llaves y comillas`;
  }
  if (/timed out/i.test(error.message)) {
    return "app.js tardó demasiado: revisa si tienes un ciclo infinito";
  }
  if (/of null/.test(error.message)) {
    return `app.js no encontró un elemento en la página${donde}: querySelector retornó null. Revisa que el id exista en index.html y que lo escribas igual en app.js (con #)`;
  }
  return `app.js lanzó un error${donde}: ${error.message}`;
}

// Abre la página, fija la hora del "computador" y corre app.js.
// Retorna { window, error }: error es null si app.js corrió sin problemas.
function paginaConJS(hora = 10) {
  const dom = new JSDOM(leer("index.html"), { runScripts: "outside-only", virtualConsole: silencioso() });
  const window = dom.window;
  const DateReal = window.Date;
  window.Date = class extends DateReal {
    constructor(...datos) {
      if (datos.length) super(...datos);
      else super(2026, 9, 14, hora, 30);
    }
  };

  let error = null;
  try {
    new vm.Script(leer("app.js"), { filename: "vivero/app.js" }).runInContext(dom.getInternalVMContext(), { timeout: 1000 });
  } catch (e) {
    error = new Error(explicarError(e));
  }
  return { window, error };
}

// Para usar una función de tu app.js: falla con un mensaje claro si no existe
function funcionDeApp(nombre) {
  const { window, error } = paginaConJS();
  const f = window[nombre];
  if (typeof f !== "function") {
    if (error) throw error;
    throw new Error(`No encuentro la función ${nombre} en app.js: ¿le cambiaste el nombre?`);
  }
  return f;
}

// El código de una función de app.js (sin comentarios), para los tests de estructura
function cuerpoDe(nombre) {
  const codigo = codigoSinComentarios("app.js");
  const inicio = codigo.indexOf(`function ${nombre}`);
  if (inicio === -1) return "";
  const resto = codigo.slice(inicio + 1);
  const fin = resto.search(/\nfunction\s|\nmostrarEstado\(\);/);
  return fin === -1 ? resto : resto.slice(0, fin);
}

module.exports = { leer, paginaSinJS, reglasCSS, codigoSinComentarios, paginaConJS, funcionDeApp, cuerpoDe };
