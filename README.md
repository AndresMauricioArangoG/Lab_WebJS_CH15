# 🌿 Taller web · Vivero Guadua

Generation Colombia · Cohorte 15 · HTML, CSS y JavaScript · Taller calificable

---

## 🧭 ¿Qué es esto?

### El negocio del taller

El **Vivero Guadua** cultiva plantas en la sabana de Bogotá y quiere vender en línea.
Vas a construir su página **tú solo**, con lo mismo que hicimos en clase con Café Origen: HTML semántico, CSS con variables y JavaScript que cambia la página.

### Lo que vas a construir

Una página que:

- tiene estructura con `header`, `nav`, `main`, `section` y `footer`;
- tiene **tu propia** paleta de colores en CSS;
- dice sola si el vivero está **abierto o cerrado** según la hora;
- pinta el **catálogo de plantas desde un array**, y marca como **Agotado** las que no tienen unidades.

### La calificación es automática

Cada vez que subes tu código, GitHub corre unos **tests** que abren tu página en un navegador simulado y la revisan.
En pocos minutos ves tu nota de **0.0 a 5.0** y qué te falta corregir.

### ¿Qué es un test?

**Definición técnica:** un test es un código que abre tu página, revisa sus etiquetas, lee tu CSS y corre tu `app.js` a distintas horas para comparar lo que aparece con lo esperado.

**En la vida real:** es como la revisión técnico-mecánica de un carro. Un inspector revisa punto por punto; si algo falla, te dice exactamente qué.

### ¿Qué es un test de estructura?

Algunos ejercicios piden una herramienta concreta, como `textContent`, `classList.add` o un `if`.
Un test de estructura lee tu código y revisa que **sí la usaste**. Si llegas al resultado por otro camino, ese test no pasa.

---

## 📋 Los 8 ejercicios

### Tabla general

Los 8 ejercicios construyen **una sola página**, en 3 archivos dentro de la carpeta `vivero/`.

| # | Tema | Archivo | Lo que debes hacer |
|---|---|---|---|
| 01 | El esqueleto HTML | `vivero/index.html` | `DOCTYPE`, `lang`, `head` con `meta`, `title`, `link` y `script` con `defer` |
| 02 | Estructura semántica | `vivero/index.html` | `header` con `nav`, `main` con 3 `section`, `footer` |
| 03 | Contenido y atributos | `vivero/index.html` | `img` con `alt`, `strong`, `em`, `#estado`, `#catalogo` vacío |
| 04 | CSS: variables y base | `vivero/styles.css` | variables en `:root`, `var()`, `body` y títulos |
| 05 | CSS: selectores | `vivero/styles.css` | clase, id, `:hover`, `.abierto`, `.cerrado`, `.agotado` |
| 06 | Lógica del negocio | `vivero/app.js` | funciones `estaAbierto` y `formatearPrecio` |
| 07 | El estado en la página | `vivero/app.js` | función `mostrarEstado` |
| 08 | Catálogo desde los datos | `vivero/app.js` | función `mostrarCatalogo` |

### ¿Dónde está el enunciado?

Al inicio de cada archivo, en un comentario.
Ahí están las reglas, los textos exactos y una pista.

### Tu guía de apoyo

La guía de la clase de Café Origen tiene **todo** lo que necesitas.
Si te bloqueas, búscala ahí antes de preguntarle a la IA.

---

## ⏰ Fecha límite

### Cuándo cierra

La profe te indica el día y la hora de cierre.

### Qué pasa después

Después de esa hora puedes seguir haciendo `git push`, pero **tu nota ya no cambia**.
Si abres tu Pull Request por primera vez después del cierre, queda con la etiqueta **⏰ Fuera de plazo**.

---

## 🚀 Paso 1 · Crea tu copia del repo (Fork)

### ¿Qué es un Fork?

**Definición técnica:** un fork es una copia de un repositorio en tu propia cuenta de GitHub. Puedes modificarla sin afectar el original.

**En la vida real:** la profe tiene el cuaderno original y tú le sacas fotocopia. Escribes en tu fotocopia, no en el cuaderno de la profe.

### Cómo hacerlo

1. Entra al repositorio de la profe en GitHub.
2. Arriba a la derecha, haz clic en **Fork**.
3. Deja todo como está y haz clic en **Create fork**.

### Cómo saber que quedó bien

Arriba a la izquierda debe decir **TU-USUARIO / Lab_WebJS_CH15**.
Debajo aparece en letra pequeña: *forked from …*

---

## 💻 Paso 2 · Descarga tu copia al computador (Clone)

### Copia la dirección de TU fork

En **tu** fork (no en el de la profe), haz clic en el botón verde **Code** y copia la URL que termina en `.git`.

### Clona desde VS Code

Abre la terminal de VS Code (`Ctrl + ñ` o menú **Terminal → New Terminal**), ubícate en la carpeta donde guardas tus proyectos y escribe esto. Cambia la URL por la que copiaste:

```bash
git clone https://github.com/TU-USUARIO/Lab_WebJS_CH15.git
```

### Abre la carpeta del proyecto

Entra a la carpeta que se acaba de crear y ábrela en VS Code:

```bash
cd Lab_WebJS_CH15
code .
```

### Instala las herramientas de los tests (una sola vez)

Este taller es distinto a los anteriores: los tests necesitan un **navegador simulado** llamado *jsdom*.
En la terminal, dentro de la carpeta del proyecto, escribe:

```bash
npm install
```

Aparece una carpeta `node_modules`. No la toques: es de los tests y nunca se sube a GitHub.

---

## ✍️ Paso 3 · Construye tu página

### Dónde escribes tu código

Todo va dentro de la carpeta `vivero/`:

- `index.html` → ejercicios 01, 02 y 03. Escribe **debajo** del comentario del enunciado.
- `styles.css` → ejercicios 04 y 05. Escribe **debajo** del comentario.
- `app.js` → ejercicios 06, 07 y 08. Completa las funciones donde dice `// Tu código aquí`.

### Mira tu página mientras trabajas

Clic derecho sobre `vivero/index.html` → **Open with Live Server**.
Cada vez que guardas (`Ctrl + S`), la página se recarga sola.

### Reglas de oro

- **No le cambies el nombre** a los archivos ni a la carpeta `vivero/`.
- **Los ids van exactos:** `estado`, `catalogo`, `inicio`, `plantas`, `cuidados` y `visitanos`.
- **No le cambies el nombre** a las 4 funciones de `app.js`.
- **No borres** el array `plantas` ni las dos líneas del final de `app.js` (`mostrarEstado();` y `mostrarCatalogo();`).

### Los textos van EXACTOS

Los textos del estado se comparan letra por letra: espacios, puntos y mayúsculas incluidos.
Cópialos tal como están en el enunciado de `app.js`.

### La paleta es tuya

No copies los colores de Café Origen. Elige colores que cuenten la historia de un vivero.
Los tests revisan que uses variables y los tres tipos de selector, no qué colores elegiste.

---

## 🧪 Paso 4 · Prueba tu nota en tu computador

### Corre todos los tests

En la terminal de VS Code, dentro de la carpeta del proyecto, escribe:

```bash
npm test
```

### Cómo leer el resultado

- ✅ el ejercicio pasó todos sus tests
- 🟡 pasó algunos tests
- ❌ no pasó ninguno
- Debajo de cada ✗ aparece **qué** esperaba el test

Al final ves tu **nota de 0.0 a 5.0**. Es la misma que te va a poner GitHub.

### Corre un solo ejercicio

Si quieres revisar solo uno, agrega su número. Por ejemplo, para el 07:

```bash
npm test -- 07
```

---

## ☁️ Paso 5 · Sube tu código a tu fork

### Los 3 comandos de siempre

Cada vez que quieras guardar tu avance en GitHub, corre estos 3 comandos en orden:

```bash
git add .
git commit -m "Construyo el HTML del vivero"
git push
```

### ¿Qué hace cada uno?

- `git add .` → prepara todos tus cambios (como meter las cosas en una caja).
- `git commit -m "..."` → cierra la caja y le pone una etiqueta con un mensaje.
- `git push` → envía la caja a tu fork en GitHub.

---

## 📬 Paso 6 · Entrega: abre tu Pull Request (solo UNA vez)

### ¿Qué es un Pull Request?

**Definición técnica:** un Pull Request (PR) es una solicitud para proponer tus cambios al repositorio original. Ahí se revisan y se comentan.

**En la vida real:** es como radicar un documento en una oficina. Lo entregas una vez, queda con número de radicado, y cualquier corrección se agrega a ese mismo trámite.

### Cómo abrirlo

1. Entra a **tu fork** en GitHub.
2. Haz clic en **Contribute** y luego en **Open pull request**.
3. En el título escribe tu **nombre y apellido completos**. Por ejemplo: `Laura Gómez Pérez`.
4. Haz clic en **Create pull request**.

### Muy importante

**Abre un solo PR.** Cuando hagas `git push` otra vez, tu PR se actualiza solo y se vuelve a calificar.
No hace falta abrir uno nuevo.

---

## 🎯 Paso 7 · Mira tu nota en GitHub

### Dónde aparece

Espera 1 o 2 minutos después de cada `git push` y entra a tu Pull Request:

- Aparece un **comentario automático** con tu nota y una tabla por ejercicio.
- A la derecha verás una etiqueta, por ejemplo **Nota 4.2**.
- El enlace **Ver qué falta por corregir** te muestra qué tests fallaron.

### ¿Quieres subir la nota?

Corrige en VS Code, revisa con `npm test` y haz de nuevo el **Paso 5**.
El comentario y la etiqueta se actualizan solos.

### Ojo con la fecha límite

Después del cierre, los `git push` ya no cambian tu nota.
Si tu primera entrega llega tarde, el PR queda con **⏰ Fuera de plazo**.

---

## 🤖 Reto opcional · La IA como revisora

### Qué hacer

Cuando tu página ya tenga 5.0, pídele a una IA que la revise, como hicimos en clase:

> "Estoy aprendiendo HTML y esta es la página de un vivero. Revisa solamente si las etiquetas semánticas y el `alt` de la imagen están bien usados. No reescribas mi código: dime qué mejorarías y por qué, en máximo 5 puntos."

### Lo que no se delega

Por cada sugerencia, pregúntate si la puedes explicar con tus palabras.
Lo que no entiendas no entra a tu código. Este reto no cambia tu nota.

---

## 🚫 Archivos que NO debes modificar

### La lista

- La carpeta `tests/`
- La carpeta `scripts/`
- La carpeta `.github/`
- Los archivos `package.json` y `package-lock.json`

### ¿Qué pasa si los modificas?

Tu PR queda marcado con la etiqueta **⚠️ Revisar** y la profe lo revisa a mano.
Además, GitHub siempre califica con los tests originales, así que modificarlos no cambia tu nota.

---

## 🆘 Errores frecuentes

### "npm no se reconoce como un comando"

No tienes Node.js instalado, o VS Code se abrió antes de instalarlo.
Instálalo desde [nodejs.org](https://nodejs.org) (versión LTS) y reinicia VS Code.

### "Faltan las herramientas de los tests: corre npm install"

Te saltaste la última parte del **Paso 2**. Corre `npm install` una vez y vuelve a correr `npm test`.

### "index.html debería empezar con <!DOCTYPE html>"

Tu HTML va **debajo** del comentario del enunciado, y la primera línea de tu código es `<!DOCTYPE html>`.
Revisa que no lo hayas escrito **dentro** del comentario (antes de `-->`).

### "el enlace … lleva a #…, pero no hay ningún elemento con id=…"

El `href` del enlace y el `id` de la sección no coinciden. Compáralos letra por letra.
El `href` lleva `#`; el `id` no.

### "…si sí la escribiste, revisa que la regla de arriba cierre su llave }"

Una regla de CSS sin su `}` hace que el navegador ignore las reglas que vienen después.
Revisa la regla que está **justo arriba** de la que el test no encuentra.

### "No encuentro la función … en app.js"

Le cambiaste el nombre a una función. Escríbela exactamente como en el enunciado (mayúsculas incluidas).

### "app.js no encontró un elemento en la página (línea …)"

`querySelector` retornó `null`: no encontró lo que buscabas.
Revisa que el id exista en `index.html` y que en `app.js` lo escribas igual y **con `#`**: `"#estado"`, no `"estado"`.

### "app.js tiene un error de sintaxis (SyntaxError) (línea …)"

Falta o sobra un paréntesis, una llave o una comilla cerca de esa línea.
Con un error de sintaxis, **ninguna** función de `app.js` funciona: por eso fallan los ejercicios 06, 07 y 08 al tiempo.

### "app.js tardó demasiado: revisa si tienes un ciclo infinito"

Tienes un ciclo que nunca termina. Revisa la condición de tu `for` o `while` en `mostrarCatalogo`.

### "Tu código debería…" (test de estructura)

El enunciado pide una herramienta concreta (`textContent`, `classList.add`, un ciclo, un `if` o llamar a otra función) y tu código no la usa.
Lee otra vez el enunciado del ejercicio.

### "Please tell me who you are" al hacer commit

Git no sabe quién eres. Configúralo una sola vez con tu nombre y el correo de tu cuenta de GitHub:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tucorreo@ejemplo.com"
```

### "Permission denied" o error 403 al hacer push

Clonaste el repo de la profe en vez de tu fork.
Vuelve al **Paso 2** y clona la URL de **tu** fork.

---

<sub>© 2026 Ana Alvarado · Educadora Tech & Desarrolladora Full Stack · Todos los derechos reservados · linkedin.com/in/ana-alvarado-instructora-full-stack</sub>
