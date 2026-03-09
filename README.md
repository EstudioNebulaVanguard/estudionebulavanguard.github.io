# Estudio Nebula Vanguard - Website Oficial

Nebula Vanguard es una plantilla de sitio web profesional para agencias de diseño creativo, estudios digitales y freelancers. Presenta una estética modern dark (oscura moderna) con animaciones fluidas y un diseño totalmente responsivo.

## Características principales

- **Diseño Dark Modern**: Uso de paleta de colores profesional (#0a0a0a y #6366f1) con efectos de glassmorphism.
- **Carrusel de Proyectos**: Slider interactivo para mostrar trabajos destacados.
- **Sección de Portafolio**: Integración visual con Behance, Figma y Google Drive.
- **Optimización de Velocidad**: Sin frameworks pesados; construido con HTML5, CSS3 y Vanilla JavaScript.
- **Animaciones al Scroll**: Implementadas con Intersection Observer API para un rendimiento optimizado.
- **Formulario de Contacto**: Validación integrada y feedback visual para el usuario.
- **Totalmente Responsivo**: Adaptado para móviles, tablets y monitores 4K.

## Requisitos Previos

No se requieren pre-procesadores ni servidores backend complejos. Solo necesitas un navegador web moderno (Chrome, Firefox, Edge, Safari).

## Instalación y Configuración

1. **Clonar o descargar el repositorio**:
    Si usas Git:
    `git clone https://github.com/tu-usuario/estudio-nebula-vanguard.git`

2. **Estructura de carpetas**:
    Asegúrate de mantener la siguiente estructura para que los archivos se vinculen correctamente:
    
    root/
    ├── index.html
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── README.md

3. **Ejecución Local**:
    Simplemente abre el archivo `index.html` en tu navegador favorito haciendo doble clic sobre él.

## Despliegue (GitHub Pages)

Para publicar el sitio en GitHub Pages:
1. Sube los archivos a un repositorio de GitHub.
2. Ve a **Settings** > **Pages**.
3. En la sección "Build and deployment", selecciona la rama `main` y la carpeta `/root`.
4. Haz clic en **Save** y tu sitio estará vivo en pocos minutos.

## Personalización

- **Colores**: Puedes cambiar el color de acento modificando la variable `--accent-color` en la parte superior del archivo `css/style.css`.
- **Contacto**: El formulario está configurado visualmente. Para recibir correos reales, se recomienda integrar servicios como [Formspree](https://formspree.io/) o [Netlify Forms](https://www.netlify.com/products/forms/).
- **Imágenes**: Se han utilizado imágenes de Unsplash vía CDN. Puedes reemplazarlas por tus propios archivos locales en la carpeta `assets/` (debes crearla) o cambiar las URLs en el HTML.

## Solución de Problemas

- **Las animaciones no se activan**: Asegúrate de que JavaScript esté habilitado y que no haya errores en la consola (F12).
- **El carrusel no responde**: Verifica que el archivo `js/script.js` esté cargando correctamente al final del `body`.
- **Iconos no visibles**: Se requiere conexión a internet para cargar Font Awesome vía CDN.

## Créditos
- Tipografía: Inter (Google Fonts)
- Iconos: Font Awesome 6
- Imágenes: Unsplash
