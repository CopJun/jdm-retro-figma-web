# Requisitos: Página web retro KAZE GARAGE (Toyota AE86)

- **Autor:** Arana jimenez julian
- **Fecha:** 23/11/2026
- **Diseño en Figma:** https://www.figma.com/design/Djo5ipeAxwoaKVsqy6z0uN

---

## RF-01 · Portada tipo póster
- **Requisito:** Mostrar una portada con estética de póster retro japonés de los años 80 y 90.
- **Especificación:** Sección `hero` con proporción 1440×1024, fondo desenfocado, panel diagonal menta (`clip-path`), título burbuja "AE86"? en Titan One, foto principal e inserto con marco blanco y ligera rotación, texto histórico en serif, katakana (トヨタ), año y código de barras. Se añade grano de película con un filtro SVG.
- **Criterio de aceptación:** Al abrir la página se ve el póster completo sin scroll horizontal, con el título legible, las dos fotos con marco y el katakana visible sin tapar la foto principal.
- **Historia de usuario:** Como visitante quiero ver un póster retro del AE86 para sentir la estética JDM de los 80s y 90s.

## RF-02 · Ficha técnica
- **Requisito:** Presentar los datos técnicos del Toyota Sprinter Trueno AE86.
- **Especificación:** Sección `#ficha` con una foto de detalle y una lista de definición (`dl`) con modelo, años, motor, potencia, tracción, transmisión y peso.
- **Criterio de aceptación:** Se muestran los 7 datos, cada uno con su etiqueta en rojo y su valor en negrita, y la sección se alcanza desde el menú.
- **Historia de usuario:** Como aficionado quiero ver motor, potencia, año y peso para conocer los datos del carro.

## RF-03 · Galería con visor ampliado
- **Requisito:** Permitir ver las fotos del carro en tamaño grande.
- **Especificación:** Sección `#galeria` con 3 fotos en botones accesibles. Al hacer clic, JavaScript abre la imagen en un elemento `<dialog>`; se cierra con el botón ×, con la tecla Esc o al hacer clic fuera.
- **Criterio de aceptación:** Al pulsar cualquier foto se abre ampliada con fondo oscuro, y las tres formas de cerrarla funcionan.
- **Historia de usuario:** Como visitante quiero ampliar las fotos para verlas en detalle.

## RF-04 · Efectos retro con JavaScript
- **Requisito:** Dar sensación de póster vivo con movimiento sutil.
- **Especificación:** Efecto parallax en las fotos del póster según la posición del mouse (`mousemove`), con profundidad distinta por foto. Se desactiva si el usuario tiene activado "reducir movimiento".
- **Criterio de aceptación:** Al mover el mouse sobre la portada las fotos se desplazan ligeramente y al salir vuelven a su posición; con "reducir movimiento" no se mueven.
- **Historia de usuario:** Como visitante quiero una experiencia inmersiva para que la página se sienta como un póster vivo.

## RF-05 · Navegación entre secciones
- **Requisito:** Moverse con facilidad por la página.
- **Especificación:** Barra superior con la marca KAZE GARAGE y enlaces a Inicio, Ficha técnica y Galería, con desplazamiento suave (`scroll-behavior: smooth`).
- **Criterio de aceptación:** Cada enlace lleva a su sección con desplazamiento suave y los enlaces tienen estado visible al pasar el cursor o al enfocar con teclado.
- **Historia de usuario:** Como visitante quiero moverme fácil por la página para encontrar la información rápido.

## RF-06 · Diseño responsive
- **Requisito:** Que la página se vea bien en escritorio y en móvil.
- **Especificación:** Diseño base de 1440 px con tamaños en porcentajes y `vw`; a 720 px o menos cambia a la composición móvil de 390×844 (panel, fotos y tipografías reubicados) y la ficha pasa a una sola columna.
- **Criterio de aceptación:** Entre 360 px y 1440 px de ancho no hay scroll horizontal, el texto se lee y ninguna foto queda cortada.
- **Historia de usuario:** Como usuario móvil quiero que la página se adapte a mi pantalla para leerla sin esfuerzo.
