---
tipo: requisito
id: REQ-001
status: Pendiente
prioridad: Alta
modulo: Core
origen: ADR-002
responsable: "@usuario"
sprint: "Sprint-03"
rama: "feature/REQ-001-diseno-pagina-v1.0"
---
# [REQ-001] Diseño de la página de Plantas Urabá

## Contexto

La visión VA-1 define Plantas Urabá como un **sistema de conocimiento vivo** sobre la flora de Urabá, y deja explícito que *la página web es solo una interfaz*: el sistema incluye datos, flujos, ADRs y trazabilidad. Este requisito cubre exclusivamente esa capa de interfaz.

El sistema visual ya está decidido y no se rediseña aquí. Vive en `desk/concepto-visual/` como una guía (`DESIGN-GUIDE.md`) más una maqueta de 11 hojas de estilo en `desk/concepto-visual/css/`. La identidad gráfica ya existe en `desk/identidad-logos/`. El modelo de datos está decidido en ADR-001 y materializado en `build/datos.js`: 5 categorías, 100 especies, 12 destacadas y 52 créditos de imagen.

El sitio anterior (eliminado en el commit `8fb02fc reset proyecto`) resolvía esto con Bootstrap por CDN, `insertAdjacentHTML` y un modal de detalle. Ese enfoque contradice ADR-002 y queda derogado por este requisito: la interfaz se reconstruye sobre Web Components nativos.

## Historia de usuario

**Como** persona curiosa que quiere consultar información confiable sobre la flora de Urabá,
**quiero** explorar la página en español, con navegación clara y diseño legible,
**para** encontrar información sobre las especies de la región y sobre el proyecto que las investiga.

## Alcance

Una página, tres vistas, un solo sistema visual.

| Vista | Ruta | Propósito |
|---|---|---|
| Portada | `index.html` | Presentar el proyecto, sus categorías y especies destacadas, y conducir al catálogo. |
| Catálogo | `catalogo.html` | Explorar las 100 especies con búsqueda y filtro por categoría. |
| Ficha de especie | `catalogo.html#planta-<id>` | Mostrar el detalle de una especie y el crédito de su imagen. |

La ruta de la ficha se mantiene como fragmento (`#planta-<id>`) para preservar los enlaces deepening existentes en el sitio anterior y evitar rutas deeper por especie.

## Requisito 1 · Portada

**CA-1.1** La cabecera usa `.navbar` con la marca enlazada a la portada, los enlaces a las tres vistas y el control de tema; el enlace de la vista activa declara `aria-current="page"`.

**CA-1.2** El hero presenta el propósito del proyecto según VA-1 (repositorio de investigación botánica regional, no un vivero comercial) con `.eyebrow`, `h1`, párrafo de una sola idea y dos acciones: entrar al catálogo y conocer el proyecto.

**CA-1.3** Una sección **Lo que investigamos** renderiza las 5 categorías de `data.categorias` en un `.grid.grid--cards`, con la imagen de `portada`, el nombre y la `descripcion` de cada una. Cada tarjeta enlaza al catálogo filtrado por esa categoría.

**CA-1.4** Una sección **Especies destacadas** renderiza los 12 identificadores de `data.destacadas`, resolviendo cada `id` a su especie y descartando en silencio los que no existan en el catálogo.

**CA-1.5** Cada tarjeta de destacada enlaza a `catalogo.html#planta-<id>`.

**CA-1.6** El pie de página declara el alcance regional (Urabá, Antioquia — Colombia) y el origen de las fotografías (Wikimedia Commons) con enlace externo `target="_blank" rel="noopener"`.

## Requisito 2 · Catálogo

**CA-2.1** El encabezado muestra el total real derivado de los datos (`100 especies · 5 categorías`), calculado en tiempo de render, nunca escrito a mano.

**CA-2.2** Un buscador (`.search` con `input[type=search]`) filtra por nombre común y nombre científico, sin distinguir mayúsculas y sin acentos. El campo declara `role="search"` y una etiqueta accesible.

**CA-2.3** El filtro por categoría se presenta como `.chip` con `aria-pressed`, incluye la opción *Todos* y refleja el estado activo en la propia opción, no solo en el color.

**CA-2.4** Búsqueda y filtro se combinan: ambos se aplican simultáneamente sobre el mismo conjunto de resultados.

**CA-2.5** Las especies se renderizan en `.card.botanical-card`, con la imagen (o el marcador de posición definido en CA-3.4), `nombre_comun` como título, `nombre_cientifico` en `.latin` y `uso` en un `.badge`.

**CA-2.6** El listado se pagina con `.pagination`, declarando `aria-current="page"` en la página activa y `aria-label` en el contenedor de navegación.

**CA-2.7** Cuando no hay coincidencias, la vista muestra un estado vacío con `.alert.alert--info` que indica el criterio aplicado y ofrece la acción de limpiar los filtros. Nunca se muestra un grid vacío sin explicación.

**CA-2.8** El fragmento de la URL dirige el estado inicial: `#planta-<id>` abre la ficha correspondiente y, si existe, `#<categoria>` activa ese filtro.

## Requisito 3 · Ficha de especie

**CA-3.1** La ficha muestra `nombre_comun` como título, `nombre_cientifico` en `.latin`, `uso` en `.badge`, `descripcion` y la categoría a la que pertenece mediante `.breadcrumb`.

**CA-3.2** La imagen se presenta en `.specimen`, que es el componente que el sistema visual define para el papel de herbario y su etiqueta manuscrita.

**CA-3.3** Si el `id` del fragmento no existe en el catálogo, la vista no falla en silencio: muestra `.alert.alert--warning` indicando que la especie no está registrada y ofrece volver al catálogo.

**CA-3.4** Cuando `imagen` está vacía —ocurre en 50 de las 100 especies— la vista sustituye la fotografía por el marcador de posición botánica del sistema visual (`.specimen__plant` / `.botanical-card__plant`), nunca por una imagen rota ni por un `<img>` vacío.

**CA-3.5** La ficha cita el crédito de imagen de `data.creditos` cuando existe coincidencia por `archivo`.

## Requisito 4 · Contrato visual

Estas reglas no son preferencias: son la frontera con `desk/concepto-visual/`.

**CA-4.1** La interfaz se construye únicamente con las familias ya definidas: acciones (`.btn`, `.btn-group`), formularios (`.field`, `.control`, `.chip`, `.switch`, `.search`), estado (`.badge`, `.alert`), superficies (`.card`, `.table`), navegación (`.navbar`, `.nav-link`, `.tabs`, `.breadcrumb`, `.pagination`, `.nav-vertical`), botánica (`.specimen`, `.botanical-card`, `.meta-row`) y layout (`.catalog`, `.grid`). No se introducen clases nuevas de estilo sin extender antes las hojas de `desk/concepto-visual/css/`.

**CA-4.2** Ningún componente contiene colores literales. Todo el color se resuelve por token `--color-*`, y `tokens-light.css` y `tokens-dark.css` mantienen exactamente los mismos nombres.

**CA-4.3** El tema claro y el oscuro se resuelven con `data-theme` en `<html>`; la preferencia del sistema (`prefers-color-scheme`) es el valor inicial y la elección del visitante se persiste en `localStorage` bajo una clave propia del proyecto.

**CA-4.4** El modo oscuro se interpreta como jardín nocturno: contraste suficiente en texto, bordes y superficies, sin inversión literal de los tokens claros.

**CA-4.5** Todo el movimiento ambiental se desactiva bajo `prefers-reduced-motion: reduce`. Las transiciones de tarjeta y de espécimen quedan anuladas por la regla ya presente en `base.css`.

**CA-4.6** La dirección es editorial, no rústica. La botánica aparece como contenido —fotografía, nombres científicos, créditos— y no como decoración constante.

**CA-4.7** La composición respeta el ancho de contenedor `--container`, la escala tipográfica y la escala de espaciado definidas en `tokens-shared.css`. No se introducen valores arbitrarios.

## Requisito 5 · Restricciones técnicas (ADR-002)

**CA-5.1** Cada vista reutilizable es un *Custom Element* con *Shadow DOM*, definido con APIs estándar (`customElements.define`, `attachShadow`).

**CA-5.2** El árbol se construye de forma programática con `createElement`, `textContent`, `append`, `appendChild` y `replaceChildren`.

**CA-5.3** **Prohibido `innerHTML`, `outerHTML`, `insertAdjacentHTML` y cualquier construcción del DOM a partir de cadenas de texto**, incluidos los valores provenientes de `build/datos.js`. Esta regla no admite excepciones.

**CA-5.4** Los estilos se adoptan con `CSSStyleSheet` y `adoptedStyleSheets`; las hojas se cargan como módulos CSS y se comparten entre instancias, de modo que se parseen una sola vez.

**CA-5.5** Cero dependencias de terceros: sin React, Vue, Angular, Lit, Preact ni frameworks CSS. Bootstrap por CDN, usado en el sitio anterior, queda fuera.

**CA-5.6** Los datos se cargan desde `build/datos.js` según ADR-001. La interfaz no introduce un segundo origen de datos ni una capa de transformación persistente.

**CA-5.7** La aplicación es servida como estáticos por Bun, que entrega `.js` y `.css` nativos sin paso de compilación. Ninguna vista requiere build step.

## Dependencias de datos

Consumo del contrato definido en ADR-001 y materializado en `build/datos.js`:

- `data.destacadas`: lista de 12 identificadores de especie.
- `data.categorias[]`: `id`, `nombre`, `descripcion`, `portada`, `plantas[]`.
- `data.categorias[].plantas[]`: `id`, `nombre_comun`, `nombre_cientifico`, `uso`, `descripcion`, `imagen`.
- `data.creditos[]`: `archivo`, `autor`.

El volumen actual es de **100 especies en 5 categorías** (frutales 30, maderables 20, tubérculos 15, ornamentales 20, aromáticas 15) y **52 créditos**. La vista debe derivar sus propios totales desde los datos, para que un cambio en el catálogo no obligue a tocar la interfaz.

## Fuera de alcance

- Backend, base de datos, formularios de envío, autenticación y moderación. ADR-001 no los contempla.
- Ampliar `build/datos.js` con los campos de fuentes y metadatos de recolección que exige el dominio `elementos-de-investigacion`. Requiere su propio REQ.
- La vista *Sobre nosotros*, presente en el sitio anterior. No está en el alcance de este requisito.
- Versions en inglés. La carpeta `build/es/` está vacía y la internacionalización requiere decisión propia.
- Rediseñar logotipos o el sistema visual: ambos están decididos en `desk/`.

## Trazabilidad

| Origen | Aporte a este requisito |
|---|---|
| VA-1 | Alcance regional, propósito de investigación, tono editorial, rechazo al producto comercial. |
| ADR-002 | Origen formal: Web Components nativos, prohibición de `innerHTML`, estilos adoptados, cero dependencias. |
| ADR-001 | Origen de los datos: JSON/JS en repositorio, sin backend. |
| `desk/concepto-visual/DESIGN-GUIDE.md` | Familias de componentes, regla de temas y seis principios de diseño. |
| `desk/concepto-visual/css/` | Tokens, geometría de controles y comportamiento responsive ya resueltos. |
| `desk/identidad-logos/` | Marca de la cabecera. |
| `vision/dominios/elementos-de-investigacion.md` | Exige que cada dato sea rastreable a su origen. |

## Brechas abiertas

1. **Trazabilidad por especie no garantizada.** El dominio exige que cada dato pueda rastrearse hasta su origen con URL, autor, fecha de consulta y estado de validación. `build/datos.js` solo tiene un listado global de `creditos` con `autor: "Wikimedia Commons"`, sin URL, sin fecha y sin autor real. La ficha **no puede prometer trazabilidad por especie** con los datos actuales; solo puede citar el crédito global. Cerrar esto exige un REQ de ampliación del modelo de datos.

2. **Dominio «Presentación de información» sin redactar.** El README declara una carpeta `vision/dominios/`, y el dominio de presentación aparece únicamente como archivo vacío en el commit de reset. Este requisito asume sus criterios sin sustituirlos: redactar ese dominio sigue pendiente.

3. **Fotografías servidas de forma remota.** Las 100 imágenes se enlazan a `upload.wikimedia.org`. El diseño no las descarga ni las hospeda, por lo que depende de un tercero y expone la IP del visitante. Debe considerarse `referrerpolicy` y carga diferida para imágenes fuera de pantalla.

4. **`sprints/` declarado y ausente.** El README anuncia `_docs_plantas-uraba/sprints/` y la carpeta no existe, de modo que el campo `sprint` de este frontmatter no tiene respaldo documental.

5. **`index.html` vacío.** El archivo raíz existe con 0 bytes tras el reset; este requisito entrega su contenido real.
