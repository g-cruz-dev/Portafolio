#React, Vite and Tailwind CSS

> **1. Crear el Proyecto Base**

1.  Abre tu terminal y navega al directorio donde deseas guardar tu proyecto, **Ejemplo**:
    ```bash
    cd C:/Users/andre/Dev/Java/Selleccion/SudamericanaFiltro2/React
    ```

2.  Ejecuta el comando para crear el proyecto de **Vite** y agregas el nombre al proyecto, Tambien le indica a **Vite** que utilice la plantilla de **React** con **JavaScript**:
    ```bash
    npm create vite@latest app-name -- --template react
    ```
3. En **rolldown-vite** selecciona: `No`.

4. Instala **npm** seleccionando: `Yes` o `npm install npm` por si no dio la opción.

5.  Una vez que el proyecto se crea, navega a su directorio 
    ```bash
    cd app-name
    ```

> **2. Configurar Tailwind CSS**

1.  Instala las dependencias de `Tailwind CSS`, `PostCSS` y `Autoprefixer`.
    ```bash
    npm install -D tailwindcss@3.3.3 postcss autoprefixer
    ```

2.  Genera los archivos de configuración de `Tailwind` y `PostCSS`. El flag `-p` crea ambos archivos a la vez.
    ```bash
    npx tailwindcss init -p
    ```

3. Abre la carpeta actual en `VS Code`:
    ```bash
    code .
    ```

4.  Abre `tailwind.config.js` y asegúrar de que el campo `content` escanee tus archivos JSX.

    ```js
    /** @type {import('tailwindcss').Config} */
    export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
    };
    ```

4.  Abre el archivo CSS  `src/index.css` y añade las directivas de Tailwind al inicio y **borrando el resto para que no exista comflicto**.
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

> **3. Iniciar el Servidor**

1. Una vez que todos los pasos de configuración estén completos, puedes iniciar tu aplicación.
    ```bash
    npm run dev
    ```

---

npm install react-icons
npm install react-router-dom
npm install framer-motion
npm install react-scroll
npm install @emailjs/browser
