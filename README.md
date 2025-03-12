# Analizador de Texto

## Descripción

El **Analizador de Texto** es una herramienta web que permite a los usuarios obtener información detallada sobre un texto ingresado.  
Con esta aplicación, los usuarios pueden calcular diversas métricas sobre su texto, como el conteo de palabras, caracteres, números y más.  

Esta aplicación está desarrollada con **HTML, CSS y JavaScript puro (Vanilla JS)**, sin el uso de frameworks o librerías externas.

## Características

- **Interfaz sencilla y amigable:** Un campo de entrada para texto y un panel de resultados.
- **Cálculo de métricas en tiempo real:**
  - Recuento de palabras.
  - Recuento total de caracteres.
  - Recuento de caracteres excluyendo espacios y signos de puntuación.
  - Recuento de números.
  - Suma total de los números en el texto.
  - Longitud media de las palabras.
- **Botón de limpieza:** Permite borrar el contenido del cuadro de texto.
- **Diseño responsivo:** Adaptado para dispositivos de escritorio y móviles.

## Instalación y uso

### 1. Clonar el repositorio

Para obtener el código fuente, clona este repositorio en tu máquina local:

```bash
git clone https://github.com/tu-usuario/analizador-texto.git
cd analizador-texto
```

### 2. Abrir el proyecto

Dado que esta aplicación es una página web estática, puedes abrir el archivo `index.html` en tu navegador directamente.  

Si deseas ejecutarlo con un servidor local, puedes usar **Live Server en VS Code** o iniciar un servidor simple con Python:

```bash
# Para Python 3.x
python -m http.server
```

Luego, abre `http://localhost:8000` en tu navegador.

## Despliegue

Este proyecto se puede desplegar fácilmente utilizando **GitHub Pages**. Para hacerlo:

1. Asegúrate de estar en la rama principal (`main` o `master`).
2. Ejecuta el siguiente comando:
   ```bash
   npm run deploy
   ```
3. Accede a tu aplicación en:  
   `https://tu-usuario.github.io/analizador-texto/`

## Tecnologías utilizadas

- **HTML5** → Estructura de la aplicación.
- **CSS3** → Estilos y diseño responsivo.
- **JavaScript (Vanilla JS)** → Lógica y manipulación del DOM.

✨ ¡Disfruta analizando textos con esta herramienta! ✨
