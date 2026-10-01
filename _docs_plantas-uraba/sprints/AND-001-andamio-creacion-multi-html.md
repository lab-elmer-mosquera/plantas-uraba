---
tipo: andamio
id: AND-001
requisito: REQ-001
decisiones:
  - ADR-002
  - ADR-001
---
# [AND-001] Andamio de creación multi-HTML

## Propósito

Usa este andamio para crear las **HTML base** de las páginas definidas en REQ-001. El andamio existe únicamente para esa tarea: dejar cada página en pie, con su navegación, su pie y sus estilos cargados, para poder publicarla como beta en Netlify y mirarla antes de construir el contenido.

No implementes todavía la lógica de catálogo, los filtros ni la ficha de especie. Este andamio produce el esqueleto navegable; el comportamiento lo resuelve REQ-001.

## 1. Dónde puedes escribir

**Puedes modificar todo lo que está en `desk/` según convenga.** Esa carpeta es tu espacio de trabajo de beta: experiméntala, renombra, borra y reorganiza sin miedo. Nada de lo que hagas ahí es definitivo, así que no te detengas por romper algo: el objetivo es aprender y ver resultados en Netlify.

**Excepción que sí es real:** el archivo `index.html` de la raíz del repositorio. Ese archivo no es tu espacio de trabajo; es el punto de entrada que Netlify publica. Puedes editarlo, pero solo para enlazar la beta, nunca para desarrollar dentro de él.

Dentro de `desk/` estas tres ubicaciones **no** son negociables, porque los componentes, las páginas y los estilos se resuelven entre sí por ruta:

| Qué | Dónde | Nota |
|---|---|---|
| Estructuras HTML de la beta | `desk/src/es/` | Una HTML por página. Si más adelante añades inglés, crea `desk/src/en/` con la misma estructura. |
| CSS global (tokens y base) | `desk/src/css/` | Se enlaza con `<link>`. Aquí viven `tokens-shared.css`, `tokens-light.css`, `tokens-dark.css` y `base.css`. |
| Componentes | `desk/src/components/` | Cada componente es un `.js` **y** un `.css` en la misma carpeta, juntos. |

Usa `desk/concepto-visual/css/` como fuente para copiar los tokens y las hojas base hacia `desk/src/css/`. `desk/concepto-visual/index.html` es la maqueta de referencia: úsala para ver qué se espera de cada clase antes de escribir markup.

## 2. Por qué el CSS de un componente se carga con `fetch`

En un entorno de desarrollo con bundler, importarías la hoja así:

```js
import hoja from "./nav.css" with { type: "css" };
```

Eso **no funciona en Netlify**, y por eso este proyecto no lo usa. Netlify es alojamiento estático: sirve archivos, no transforma módulos. No hay paso de compilación que resuelva el grafo de imports, el `Content-Type` de la respuesta no está garantizado para una ruta servida por su pipeline de assets, y el soporte de módulos CSS no es universal entre navegadores. El resultado es una hoja que no llega a existir en el navegador.

La salida es cargar la hoja como **texto**, construir una `CSSStyleSheet` en memoria y adoptarla en el Shadow DOM:

```js
const respuesta = await fetch(url);
const textoCSS = await respuesta.text();
const sheet = new CSSStyleSheet();
sheet.replaceSync(textoCSS);
shadow.adoptedStyleSheets = [sheet];
```

Funciona nativo en Netlify, sin compilar nada, y mantiene la garantía de ADR-002: el dato entra al navegador como **texto**, nunca como código, y se interpreta como hoja de estilos, no como HTML.

> **Refinamiento obligatorio respecto al modelo de referencia.** El ejemplo carga la hoja una vez por instancia. Con un solo `nav` eso es aceptable, pero en cuanto tengas dos o más instancias del mismo componente vas a descargar y parsear la misma hoja varias veces, y la consecuencia positiva que ADR-002 le atribuye a `adoptedStyleSheets` (parsear una vez, compartir entre instancias) se pierde. Resuélvelo con una caché a nivel de módulo, declarada fuera de la clase: el `fetch` y el `replaceSync` ocurren una sola vez por archivo para toda la aplicación.

## 3. Modelo de componente

Este es el esqueleto de referencia. Consérvalo tal cual, en español, y llénalo para `nav` y `footer`:

```js
export class AcercaDeThis extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.estilosCargados = false;
    }


    async connectedCallback() {
        // 1. Cargamos el CSS de forma asíncrona directamente desde la URL pública
        // Esto funciona nativamente en Netlify sin compilar nada
        if (!this.estilosCargados) {
            try {
                const respuesta = await fetch("/css/basic-styles.css");
                const textoCSS = await respuesta.text();

                const sheet = new CSSStyleSheet();
                sheet.replaceSync(textoCSS);

                this.shadowRoot.adoptedStyleSheets = [sheet];
                this.estilosCargados = true;
            } catch (error) {
                console.error("No se pudieron cargar los estilos:", error);
            }
        }


        // 2. Renderizamos la estructura de nodos
        this.render();
    }


    render() {
        // Limpieza atómica y segura del DOM
        this.shadowRoot.replaceChildren();


        const titlePage = document.createElement("h1");
        titlePage.textContent = "Acerca de esta página";


        const textPague = document.createElement("p");
        textPague.textContent = "Investigación abierta sobre las plantas de Urabá.";


        const nav = document.createElement("nav");
        nav.id = "subNavAcercaDeThis";


        const navUl = document.createElement("ul");
        // Aquí puedes crear tus enlaces usando document.createElement("li"), etc.
        nav.appendChild(navUl);


        // Insertamos todo limpiamente
        this.shadowRoot.append(titlePage, textPague, nav);
    }
}


customElements.define("acerca-de-esto", AcercaDeThis);
```

Cuatro reglas que no puedes romper:

1. **`export class` + `customElements.define`.** El `export` es necesario para que otro módulo pueda importar el componente. El `define` debe ser único: registrar dos veces el mismo nombre lanza un error.
2. **Toda escritura de texto pasa por `textContent`.** Está prohibido `innerHTML`, `outerHTML`, `insertAdjacentHTML` y cualquier armado de nodos con cadenas de texto, incluso con datos que tú mismo escribiste. Es la garantía anti-XSS de ADR-002 y la razón de que este proyecto no use plantillas de texto.
3. **`render()` empieza con `replaceChildren()`.** Con eso limpias y actualizas de forma atómica, sin accumulation de nodos ni parches dispersos.
4. **El CSS va al Shadow DOM, no al documento.** El `nav` y el `footer` quedan encapsulados: los selectores globales de `base.css` no los alcanzan. El CSS del componente vive en su propio archivo y adopta tokens, no colores literales.

### Resuelve la ruta del CSS con `import.meta.url`

Las dos rutas de tu componente se resuelven de forma distinta, y confundirlas es el error más común de este andamio:

- `fetch()` resuelve **contra la URL del documento**, no contra la del módulo. Escribir `fetch("./nav.css")` dentro de `desk/src/components/nav.js` pero cargado desde `desk/src/es/catalogo.html` pide `desk/src/es/nav.css`, que no existe.
- `import.meta.url` sí apunta al archivo del módulo. Con `new URL("./nav.css", import.meta.url)` pides exactamente el archivo que está al lado del `.js`, y la regla de "CSS junto al JS" se cumple sola, sin rutas escritas a mano.

Aplica lo mismo a los scripts: desde una página en `desk/src/es/`, los componentes se cargan con `src="../components/nav.js"`. La alternativa es una ruta absoluta desde la raíz del sitio (`/desk/src/components/nav.js`), que es más legible pero rompe si el sitio se publica bajo un subdirectorio.

## 4. Componentes a construir

En esta iteración son **solo dos**. No construyas más hasta que estos dos funcionen.

### `desk/src/components/nav.js` + `nav.css`

Construye `<site-nav>`. Requisitos mínimos:

- Marca con el logo de `desk/identidad-logos/`, enlazada a la portada.
- Enlaces a Inicio y Catálogo, construidos con `createElement("a")` y `href`.
- El enlace de la página actual debe declarar `aria-current="page"`. Para saber cuál es, **lee un atributo del propio elemento** (`<site-nav activo="catalogo">`) y no adivines comparando `location.href`.
- Control de tema que alterna `data-theme` en `<html>` y persiste la elección en `localStorage` bajo una clave propia del proyecto.
- Todo el CSS con tokens `--color-*`, `--font-*`, `--space-*`, `--radius-*`. Ningún color literal.

### `desk/src/components/footer.js` + `footer.css`

Construye `<site-footer>`. Requisitos mínimos:

- Alcance regional: Urabá, Antioquia — Colombia.
- Crédito de fotografías con enlace externo a Wikimedia Commons, con `target="_blank"` y `rel="noopener"`.
- Enlace de vuelta a la portada.
- Enlace a la fuente de los datos (`build/datos.js`) para que el visitante vea que el catálogo es un artefacto real, no una página cerrada.

## 5. Páginas HTML

Crea en `desk/src/es/` las páginas del alcance de REQ-001:

| Archivo | Página | Contenido en esta iteración |
|---|---|---|
| `index.html` | Portada | `<site-nav>`, un `<main>` con `h1` y párrafo de propósito, `<site-footer>`. |
| `catalogo.html` | Catálogo | `<site-nav>`, un `<main>` con `h1` y un contenedor vacío para el futuro grid, `<site-footer>`. |

La ficha de especie **no** es una tercera HTML. En REQ-001 es el fragmento `catalogo.html#planta-<id>`, y por ahora déjala anotada en un comentario del `main` del catálogo para acordarlo.

Cada página tiene esta forma. La única diferencia entre ellas son los scripts del `head` y el atributo `activo` del `nav`:

```html
<!DOCTYPE html>
<html lang="es" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- El tema debe resolverse antes de pintar, o la página parpadea en claro -->
  <script>
    (() => {
      const guardada = localStorage.getItem("plantas-uraba-theme");
      const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.dataset.theme = guardada || (sistemaOscuro ? "dark" : "light");
    })();
  </script>

  <!-- CSS global: tokens y base. Los tokens deben entrar por aquí, no por fetch -->
  <link rel="stylesheet" href="../css/tokens-shared.css">
  <link rel="stylesheet" href="../css/tokens-light.css">
  <link rel="stylesheet" href="../css/tokens-dark.css">
  <link rel="stylesheet" href="../css/base.css">

  <!-- Componentes: type="module" los ejecuta diferido, pero antes de DOMContentLoaded -->
  <script type="module" src="../components/nav.js"></script>
  <script type="module" src="../components/footer.js"></script>
</head>
<body>
  <site-nav activo="inicio"></site-nav>
  <main></main>
  <site-footer></site-footer>
</body>
</html>
```

Carga los tokens en el orden `shared` → `light` → `dark`: los tres definen los mismos nombres y el orden decide cuál gana cuando los dos archivos de tema se aplican al mismo elemento.

## 6. Tokens, temas y Shadow DOM

Los tokens **sí** atraviesan la frontera del Shadow DOM. Las propiedades personalizadas se heredan, así que `--color-border` definido en `<html>` llega al `nav` y al `footer`. Eso es lo que hace posible que `nav.css` escriba `var(--color-border)` sin conocer el tema.

Lo que **no** atraviesa la frontera son los selectores globales. Consecuencias directas:

- Ninguna regla de `base.css` estiliza el interior de `nav` ni de `footer`. Esos estilos van en los `.css` de cada componente.
- El estado de foco tampoco se hereda. `base.css` define `:focus-visible`, pero dentro del Shadow DOM no aplica: **cada componente debe definir su propio `:focus-visible`** o la navegación deja de ser accesible por teclado.
- `::selection` y los resets de `*` tampoco alcanzan el interior.

## 7. Datos

`build/datos.js` se carga como **script clásico**, no como módulo:

```html
<script src="../../build/datos.js"></script>
```

El archivo asigna `data = { ... }` sin `export` ni `import`, así que crea una global. Si lo declaras con `type="module"`, la asignación deja de ser global y los módulos que la leen la trouvent `undefined`. Coloca ese `<script>` **antes** de los `type="module"` que leen los datos, o en el `head` sin módulo.

El script clásico y los módulos coexisten sin problema: los módulos se evalúan después, cuando la global ya existe.

## 8. Ver la beta

`fetch()` no funciona sobre el protocolo `file://`. Si abres una HTML con doble clic verás el esqueleto sin estilos y un error en consola. **Sirve el proyecto por HTTP antes de mirar nada.**

Como el repositorio no tiene `package.json` y ADR-002 fija Bun como servidor de estáticos:

```bash
bunx serve .
```

Después abre `http://localhost:3000/desk/src/es/index.html` para iterar, y `http://localhost:3000/` para la raíz.

Para ver la beta en Netlify: asegúrate de que el `index.html` de la raíz **enlaza** a la beta (por ejemplo, un enlace visible a `desk/src/es/index.html`) y sube el cambio. Netlify publica el repositorio, así que `desk/` queda accesible tal cual.

## 9. Checklist por página

Antes de dar una página por terminada, verifica todo:

- [ ] El `<html>` declara `lang="es"` y `data-theme` resuelto antes de pintar, sin parpadeo.
- [ ] Los cuatro archivos de tokens están enlazados y en el orden correcto.
- [ ] `<site-nav>` y `<site-footer>` aparecen y tienen estilos, no solo markup.
- [ ] El `nav` marca la página actual con `aria-current="page"`.
- [ ] El toggle de tema alterna claro/oscuro y la elección sobrevive a recargar.
- [ ] Navegar con `<kbd>Tab</kbd>` muestra foco visible en los enlaces.
- [ ] Los enlaces del `nav` llevan de una página a la otra y funcionan desde cada ruta.
- [ ] El pie cita la fuente de las fotografías.
- [ ] La consola está limpia: cero errores, cero advertencias de `define` duplicado.
- [ ] No hay una sola aparición de `innerHTML` en el código.
- [ ] La red muestra **una** petición por archivo CSS, no una por instancia.

## Fuera de alcance

- El contenido del catálogo, los filtros, la búsqueda y la ficha: son REQ-001.
- Cualquier elemento distinto de `nav` y `footer`. Añade componentes cuando una necesidad real lo pida, no antes.
- La versión en inglés. La estructura `desk/src/es/` ya la hace posible, pero crearla es otro trabajo.
- Ampliar `build/datos.js` con fuentes y metadatos de recolección. Es una brecha abierta de REQ-001.
- Convertir `desk/` en un paquete, añadir `package.json` o introducir un bundler. Este andamio existe precisamente para no hacerlo.

## Trazabilidad

| Origen | Aporte |
|---|---|
| REQ-001 | Alcance de las páginas, criterios visuales y restricciones técnicas que este andamio deja en pie. |
| ADR-002 | Web Components nativos, `textContent`, `replaceChildren`, `adoptedStyleSheets`, prohibición de `innerHTML`, cero dependencias. |
| ADR-001 | Los datos viven en `build/datos.js`, en el repositorio y sin backend. |
| `desk/concepto-visual/DESIGN-GUIDE.md` | Familias de clases y principios que el `nav` y el `footer` deben respetar. |
| `desk/concepto-visual/css/` | Origen de los tokens y de las hojas base que copias a `desk/src/css/`. |
| `desk/identidad-logos/` | Logo para la marca del `nav`. |

## Desviación de ADR-002 que queda abierta

ADR-002 declara como consecuencia positiva que «las hojas de estilo importadas mediante módulos CSS se parsean una sola vez en memoria y se comparten entre múltiples instancias del componente». Este andamio **no usa módulos CSS** por la restricción de Netlify descrita en la sección 2, y compensa con la caché a nivel de módulo de la sección 3.

La intención de ADR-002 se respeta, pero su redacción ya no describe lo que se construye. **Levanta una revisión de ADR-002** para registrar el modelo real de carga de hojas y la razón de infraestructura que lo justifica. No lo corrijas en silencio: la razón es parte del conocimiento del sistema.

## Brecha que este andamio no cierra

El dominio `elementos-de-investigacion` exige que cada dato sea rastreable hasta su origen con URL, autor, fecha de consulta y estado de validación. `build/datos.js` solo tiene un listado global de créditos sin URL ni fecha. Mientras eso no se resuelva, **la interfaz no puede afirmar trazabilidad por especie** y no debe incluir textos que lo prometan. Queda registrado en REQ-001.
