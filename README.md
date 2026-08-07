# Plantas de Urabá

Landing page multi-página para el vivero **Plantas de Urabá** (Urabá, Antioquia — Colombia), con estética inspirada en [Excalidraw](https://excalidraw.com): trazos a mano alzada, esquinas irregulares, tipografía manuscrita y aspecto de pizarra, ahora con **fotografías reales** de cada especie.

**Sitio en vivo:** https://plantas-uraba-lab-sena.netlify.app/

## Estructura del proyecto

```
plantas-uraba/
├── index.html            # Inicio: hero con imagen real, categorías y especies destacadas
├── catalogo.html         # Catálogo completo: filtros por categoría y modal de detalle
├── sobre-nosotros.html   # Historia, región de Urabá, estadísticas y valores
├── estilos.css           # Estilos compartidos (estilo Excalidraw)
└── datos.js              # Datos del catálogo (categorías, especies e imágenes)
```

## Secciones

- **Encabezado** — menú de navegación entre páginas (Inicio · Catálogo · Sobre Nosotros) con enlace "Ver Catálogo".
- **Inicio** — banner principal con fotografía de cultivos de banano en Urabá, tarjetas de las 4 categorías y especies destacadas.
- **Catálogo** — 14 especies con fotografías reales, filtros por categoría y ventana de detalle con botón de consulta por WhatsApp.
- **Sobre Nosotros** — historia del vivero, descripción de la región, estadísticas y valores.
- **Pie de página** — contacto, horario y redes sociales, con iconografía dibujada a mano.

### Categorías y especies

| Categoría | Especies |
|---|---|
| Agrícolas y Frutales | Banano, Plátano Hartón, Maracuyá, Cacao |
| Palmas | Palma de Aceite, Coco Criollo, Chontaduro |
| Maderables y Forestales | Melina, Roble, Guamo, Samán |
| Nativas y Tradicionales | Borojó, Achiote, Bijao |

## Estilo visual

- Fondo crema con textura de pizarra y bordes "a mano alzada" (esquinas asimétricas).
- Tipografías manuscritas: Caveat, Gochi Hand, Patrick Hand y Architects Daughter.
- Paleta de marcador: verde (hojas), azul (agua/cielo), rojo (anotaciones).
- Fotografías reales de Wikimedia Commons con `onerror` de respaldo si alguna imagen no carga.

## Cómo verlo

Abre `index.html` en un navegador o sirve la carpeta (recomendado para Netlify):

```powershell
python -m http.server 8000
# http://localhost:8000
```

> Requiere conexión a internet para cargar Google Fonts y las imágenes de Wikimedia Commons.

## Licencia de imágenes

Las fotografías provienen de [Wikimedia Commons](https://commons.wikimedia.org) y se utilizan en sus tamaños estándar de miniatura (960px/1280px). Créditos completos en `datos.js` → `DATOS.creditos`.
