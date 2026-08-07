# Plantas de Urabá

Landing page para el vivero **Plantas de Urabá** (Urabá, Antioquia — Colombia), con estilo visual inspirado en [Excalidraw](https://excalidraw.com): trazos a mano alzada, líneas irregulares y aspecto de pizarra virtual.

## Boceto de interfaz

El archivo `boceto-landing.html` es un boceto navegable de la landing page, renderizado en el navegador con [Rough.js](https://roughjs.com) (la misma librería de dibujo que usa Excalidraw).

### Secciones

- **Encabezado** — nombre del vivero con tipografía manuscrita y menú de navegación (Inicio · Catálogo · Sobre Nosotros).
- **Sección principal** — banner con paisaje de Urabá dibujado a mano (colinas, río, palma, banano, agricultor con plántula) y botón CTA *"Ver Catálogo Completo"*.
- **Grilla de productos** — 4 categorías con 14 especies ilustradas esquemáticamente:
  - **Agrícolas y Frutales**: Banano, Plátano Hartón, Maracuyá, Cacao.
  - **Palmas**: Palma de Aceite, Coco Criollo, Chontaduro.
  - **Maderables y Forestales**: Melina, Roble, Guamo, Samán.
  - **Nativas y Tradicionales**: Borojó, Achiote, Bijao.
- **Pie de página** — información de contacto e íconos de redes sociales en línea esquemática.

### Estilo visual

- Fondo blanco/crema claro con textura de pizarra.
- Líneas color carbón con trazo irregular.
- Toques de marcador: verde (hojas/vegetación) y azul (agua).
- Tipografías manuscritas: [Caveat](https://fonts.google.com/specimen/Caveat), Gochi Hand, Patrick Hand y Architects Daughter.
- Anotaciones de diseñador en rojo (paleta de colores, señalamiento del CTA).

## Cómo ver el boceto

Abre `boceto-landing.html` en cualquier navegador moderno (requiere conexión a internet para cargar Google Fonts y Rough.js desde CDN).

```powershell
Start-Process "boceto-landing.html"
```

## Próximos pasos (sugeridos)

- Convertir el boceto en HTML/CSS/JS funcional (rutas, scroll a secciones, filtros de catálogo).
- Definir datos del catálogo (pueden derivarse del insumo JSON en `insumo/` si se agrega).
- Generar versión en formato `.excalidraw` para editar el diseño directamente en Excalidraw.
