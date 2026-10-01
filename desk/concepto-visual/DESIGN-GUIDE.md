# Plantas Uraba · Concepto visual

## Dirección
Plantas Uraba combina una aplicación moderna con el lenguaje editorial de una colección botánica. La interfaz mantiene controles convencionales y accesibles; la identidad aparece en el papel cálido, la tipografía serif, las ilustraciones, los detalles científicos y la paleta vegetal.

## Estructura
```text
herbario-vivo-concept/
├── index.html
├── DESIGN-GUIDE.md
└── css/
    ├── tokens-light.css
    ├── tokens-dark.css
    ├── tokens-shared.css
    ├── base.css
    ├── buttons.css
    ├── forms.css
    ├── feedback.css
    ├── surfaces.css
    ├── navs.css
    ├── botanical.css
    └── layout.css
```

## Regla de temas
`tokens-light.css` y `tokens-dark.css` comparten exactamente los mismos nombres de tokens de color. Los componentes no deben contener colores literales.

## Familias
- Acciones: botones y grupos.
- Formularios: campos, checks, radios, switch, buscador, filtros.
- Estado: badges y alertas.
- Superficies: cards y tablas.
- Navegación: navbar, tabs, pills, breadcrumb, paginación y navegación vertical.
- Botánica: ficha de espécimen, card botánica y metadatos.
- Layout: solo composición del catálogo.

## Principios
1. Editorial, no rústico.
2. La botánica es contenido, no decoración constante.
3. Los controles conservan geometría y comportamiento reconocibles.
4. La profundidad se resuelve con borde, contraste y sombras suaves.
5. El modo oscuro se interpreta como jardín nocturno, no como inversión literal.
6. El movimiento ambiental es opcional y se desactiva con `prefers-reduced-motion`.
