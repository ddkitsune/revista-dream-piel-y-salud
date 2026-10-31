# Design System: Revista Dream Piel y Salud (Official Palette Edition)

Este documento contiene la especificación completa de tokens semánticos, tipografía, paleta cromática oficial, arquitectura de layout y componentes para Google Stitch y el código HTML/Tailwind.

---

## 1. Brand Core & Identidad del Logotipo

- **Isotipo Oficial (Letra `d` con Media Luna Creciente envolvente):**
  - Arco exterior envolvente con degradado de **Azul Eléctrico a Cian (`#00B4D8` a `#0077B6`)**. Tono brillante del arco y reflejos, aportando contraste dinámico, tecnológico y transmitiendo frescura, hidratación acuosa y luz láser en tratamientos dermatológicos.
  - Centro: Glifo estilizado de la letra **`d`**.
- **Variantes de Logotipo Disponibles:**
  - `assets/img/logo.png`: Logotipo oficial con fondo transparente, letra `d` en Azul Marino Profundo (`#0B1325`) y arco en degradado cian-azul para cabeceras y tarjetas sobre fondo blanco o claro.
  - `assets/img/logo-white.png`: Logotipo oficial con fondo transparente, letra `d` en Blanco Puro (`#FFFFFF`) y arco en degradado cian-azul para cabeceras y tarjetas sobre fondo oscuro / noche (`#0B1325`).
  - `assets/img/logo-original.jpg`: Copia original master en alta resolución.
  - `assets/img/favicon-32.png`, `favicon-64.png`, `favicon-192.png`, `favicon.ico`: Favicons para pestañas y dispositivos móviles.
- **Personalidad:** Innovación dermatológica, rigor clínico de alta gama, biotecnología celular, elegancia cosmecéutica y serenidad médica.
- **Enfoque Visual:** Fondo puro y limpio (`#FFFFFF`), contenedores clínicos suaves (`#F8FAFC`), bordes de alta definición (`#E2E8F0`), y acentos interactivos en degradado cian-azul eléctrico (`#00B4D8` - `#0077B6`).

---

## 2. Paleta de Colores (Tokens Semánticos Oficiales)

| Token | Hex | Rol / Uso en la Plataforma |
|---|---|---|
| `color.brand.cyan` | `#00B4D8` | Cian brillante para el arco, reflejos, badges luminosos, ondas de audio, acentos láser |
| `color.brand.accent` | `#0077B6` | Azul eléctrico tecnológico, botones de acción primaria, badges activos, enlaces clave |
| `color.brand.accentHover` | `#005F92` | Hover states interactivos para botones y enlaces |
| `color.brand.dark` | `#0B1325` | Azul marino profundo / negro azulado. Color dominante en tarjetas de podcast, sustituto de negro plano en textos largos, fondos de portada y secciones nocturnas/premium con legibilidad impecable |
| `color.brand.surface` | `#FFFFFF` | Blanco puro. Espacio negativo, limpieza visual y cajas de texto de la revista |
| `color.brand.surfaceLow` | `#FFFFFF` | Contenedores primarios, cards elevadas, fondos de sección |
| `color.brand.surfaceSubtle` | `#F8FAFC` | Fondos secundarios suaves, cards de contraste leve |
| `color.brand.surfaceTint` | `#EBF8FF` | Tintes cian/hielo sutiles para chips activos y badges secundarios |
| `color.brand.surfaceHigh` | `#E2E8F0` | Bordes clínicos nítidos, divisores y líneas de separación |
| `color.text.muted` | `#5A6B82` | Subtítulos, metadatos, fechas de publicación, autoría |
| `color.status.success` | `#059669` | Estado de verificación médica, disponibilidad de citas |

### Degradados Distintivos

```css
/* Arco y Reflejos Tecnológicos (Cian / Azul Eléctrico) */
background: linear-gradient(135deg, #00B4D8 0%, #0077B6 100%);

/* Tarjetas Nocturnas / Secciones Premium (Azul Marino Profundo) */
background: linear-gradient(135deg, #0B1325 0%, #101d36 100%);

/* Eclipse Dual */
background: linear-gradient(135deg, #0B1325 0%, #0077B6 50%, #00B4D8 100%);
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
- **Border Strokes:** `1px solid #E2E8F0` con acabado nítido y limpio.
- **Sombras:**
  - Suave: `0 4px 20px -2px rgba(11, 19, 37, 0.05)`
  - Flotante / Modales: `0 12px 32px -4px rgba(11, 19, 37, 0.12)`
