# Desafío: Lista de Publicaciones con React

## Requerimientos

### 1. Creación del proyecto
- Crear un nuevo proyecto con **Vite + React**
- Verificar que el proyecto arranca correctamente

### 2. Estructura de componentes
- Crear al menos dos componentes:
  - **App.jsx**: componente principal
  - **PostsList.jsx**: mostrará la lista de publicaciones obtenidas desde la API

### 3. Manejo de estado (`useState`)
- En `PostsList.jsx`, definir un estado llamado `posts` que almacenará las publicaciones
- Inicializarlo como un arreglo vacío

### 4. Efectos (`useEffect`) y consumo de API
- Usar `useEffect` para hacer una petición a la API al montar el componente
- Endpoint: `https://jsonplaceholder.typicode.com/posts`
- Guardar los datos en el estado `posts`

### 5. Renderización de datos
- Mostrar en la interfaz los títulos y cuerpos (`title` y `body`) de cada publicación
- Usar una lista `<ul>` con `<li>` o tarjetas con `<div>`

### 6. Extras opcionales
- Agregar un **loading** mientras los datos se cargan
- Agregar un **mensaje de error** si la petición falla
- Limitar la lista a las primeras 10 publicaciones

## Entrega
- Crear un repositorio en **GitHub** con la solución
- Compartir el link del repositorio como entrega final
