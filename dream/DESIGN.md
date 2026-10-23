# Design System: Revista Dream Piel y Salud (Stitch Spec - Blue Eclipse Edition)

Este documento contiene la especificación completa de tokens semánticos, tipografía, paleta cromática basada en el logotipo oficial (**dream** con media luna creciente en degradado azul zafiro/índigo nocturno), arquitectura de layout y componentes para Google Stitch y el código HTML/Tailwind local.

---

## 1. Brand Core & Identidad del Logotipo

- **Isotipo:** Media luna creciente envolvente con degradado de **Azul Zafiro / Acero Clínico (`#456b8d`)** a **Azul Noche Profundo / Eclipse Índigo (`#152538`)**.
- **Logotipo:** Tipografía sans-serif geométrica minimalista moderna con kerning equilibrado en azul marino oscuro (`#111c2a`).
- **Personalidad:** Innovación dermatológica, rigor clínico de alta gama, biotecnología celular, elegancia cosmecéutica y serenidad médica.
- **Enfoque Visual:** Fondo puro/clínico iluminado (`#f8fafd` / `#ffffff`), contenedores con leve tinte perla azulado (`#f0f4f8`), acentos interactivos en azul zafiro brillante (`#1e4b75` / `#2563eb`) y degradados eclipsados.

---

## 2. Paleta de Colores (Tokens Semánticos Actualizados)

| Token | Hex | Rol / Uso en Stitch y Web |
|---|---|---|
| `color.brand.accent` | `#1e4b75` | Acento principal (Azul Eclipse / Zafiro Clínico), botones primarios, badges de sección |
| `color.brand.accentLight` | `#356d9c` | Azul celeste clínico para estados activos, links destacados y degradados |
| `color.brand.accentHover` | `#143553` | Hover states, botones activos |
| `color.brand.dark` | `#111c2a` | Texto principal, titulares, elementos de alto contraste (Color tipografía del logo) |
| `color.brand.surface` | `#f8fafd` | Background global (Blanco Hielo / Alabastro Clínico Suave) |
| `color.brand.surfaceLow` | `#ffffff` | Contenedores primarios, cards elevadas, fondos de sección |
| `color.brand.surfaceTint` | `#edf3f8` | Fondos secundarios, badges sutiles, hover de items |
| `color.brand.surfaceHigh` | `#dbe5ee` | Bordes sutiles, divisores, líneas de tabla y separadores |
| `color.text.muted` | `#586c82` | Subtítulos, metadatos, fechas de publicación, autoría |
| `color.status.success` | `#1f8a65` | Estado de verificación médica, disponibilidad de citas |

### Degradado Distintivo del Isotipo (Eclipse Gradient)
```css
background: linear-gradient(135deg, #111c2a 0%, #1e4063 50%, #45739c 100%);
```

---

## 3. Tipografía

| Rol | Familia | Pesos | Uso |
|---|---|---|---|
| **Logo & UI Controls** | `Plus Jakarta Sans` o `Inter` | 400, 500, 600, 700 | Logotipo "dream", navegación, botones, formularios y tablas clínicas |
| **Display / Editorial Headings** | `Bodoni Moda` o `Plus Jakarta Sans` | 600, 700, Normal | Titulares principales de revista, citas destacadas y headers de casos |
| **Metadata & Códigos** | `JetBrains Mono` / `ui-monospace` | 400, 600 | Códigos de lote farmacéutico, colegiatura médica, horas y datos INCI |

---

## 4. Spacing, Bordes & Sombras

- **Border Radius:**
  - `radius-sm`: `6px` (tags, badges)
  - `radius-md`: `10px` (inputs, botones)
  - `radius-lg`: `16px` (cards de artículos, visor interactivo y productos)
  - `radius-full`: `9999px` (pills, avatares, isotipo circular)
- **Border Strokes:** `1px solid #dbe5ee` con acabado nítido y limpio.
- **Sombras:**
  - Suave: `0 4px 20px -2px rgba(17, 28, 42, 0.05)`
  - Flotante / Modales: `0 12px 32px -4px rgba(17, 28, 42, 0.12)`
