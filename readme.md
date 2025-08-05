# Servidor WebSocket con Express y Socket.IO

Este proyecto implementa un servidor WebSocket utilizando Express.js y Socket.IO para comunicación en tiempo real.

## 🚀 Características

- Servidor WebSocket en tiempo real
- Operaciones de insertar y eliminar con emisión a todos los clientes conectados
- Configuración CORS para permitir conexiones desde cualquier origen
- Logging de conexiones y desconexiones con timestamps

## 📋 Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)

## 🔧 Instalación

1. Clona o descarga el proyecto:
```bash
git clone [URL_DEL_REPOSITORIO]
cd web-socket
```

2. Instala las dependencias:
```bash
npm install
```

## 📦 Dependencias

Las principales dependencias del proyecto son:

- `express`: Framework web para Node.js
- `socket.io`: Biblioteca para comunicación WebSocket en tiempo real
- `http`: Módulo nativo de Node.js para crear el servidor HTTP

## 🏃‍♂️ Ejecución

Para iniciar el servidor, ejecuta:

```bash
node index.js
```

El servidor se iniciará y verás el mensaje:
```
el socket fue iniciado en el puerto 4005
```

## 🌐 Acceso

Una vez que el servidor esté ejecutándose, puedes acceder a él en:

**URL del servidor:** `http://127.0.0.1:4005/`

## 📡 Eventos WebSocket

El servidor maneja los siguientes eventos:

### Eventos del cliente hacia el servidor:

- **`insertar`**: Recibe datos de usuario y los retransmite a todos los demás clientes conectados
  ```javascript
  socket.emit('insertar', 'datos_del_usuario');
  ```

- **`eliminar`**: Recibe un ID y lo retransmite a todos los demás clientes conectados
  ```javascript
  socket.emit('eliminar', 'id_a_eliminar');
  ```

### Eventos del servidor hacia el cliente:

- **`insert`**: Se emite cuando otro cliente ejecuta la acción "insertar"
  ```javascript
  socket.on('insert', (data) => {
      console.log('Datos insertados:', data);
  });
  ```

- **`delete`**: Se emite cuando otro cliente ejecuta la acción "eliminar"
  ```javascript
  socket.on('delete', (id) => {
      console.log('ID eliminado:', id);
  });
  ```

## 🔗 Ejemplo de cliente JavaScript

```html
<!DOCTYPE html>
<html>
<head>
    <title>Cliente WebSocket</title>
    <script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
</head>
<body>
    <script>
        const socket = io('http://127.0.0.1:4005');
        
        // Escuchar eventos del servidor
        socket.on('insert', (data) => {
            console.log('Datos insertados:', data);
        });
        
        socket.on('delete', (id) => {
            console.log('ID eliminado:', id);
        });
        
        // Enviar eventos al servidor
        socket.emit('insertar', 'mi_usuario');
        socket.emit('eliminar', 'id_123');
    </script>
</body>
</html>
```

## 📁 Estructura del proyecto

```
web-socket/
├── index.js          # Archivo principal del servidor
├── router.js         # Rutas de Express
├── package.json      # Configuración y dependencias
└── README.md         # Documentación del proyecto
```

## ⚙️ Configuración

### Puerto del servidor
El servidor usa el puerto **4005** por defecto. Puedes cambiarlo configurando la variable de entorno `PORT`:

```bash
# Windows
set PORT=3000 && node index.js

# Linux/Mac
PORT=3000 node index.js
```

### CORS
El servidor está configurado para permitir conexiones desde cualquier origen (`origin: "*"`). Para producción, considera restringir esto a dominios específicos.

## 🐛 Resolución de problemas

### Error: "app.use() requires a middleware function"
- Asegúrate de que el archivo `router.js` exporte correctamente un router de Express
- Verifica que no haya errores de sintaxis en `router.js`

### Error: "Cannot GET /"
- Este es normal si no tienes rutas definidas en tu router
- El servidor WebSocket seguirá funcionando correctamente

### Puerto en uso
Si recibes un error de puerto en uso, puedes:
1. Usar un puerto diferente con la variable de entorno `PORT`
2. Cerrar la aplicación que está usando el puerto 4005

## 👨‍💻 Desarrollo

Para desarrollo, puedes usar `nodemon` para reiniciar automáticamente el servidor:

```bash
# Instalar nodemon globalmente
npm install -g nodemon

# Ejecutar con nodemon
nodemon index.js
```

## 📝 Logs

El servidor registra los siguientes eventos:
- Nuevas conexiones con timestamp
- Ejecución de eventos 'insertar' y 'eliminar' con timestamp
- Desconexiones de clientes con timestamp

## 🤝 Contribución

Si deseas contribuir al proyecto:
1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ve el archivo [LICENSE.md](LICENSE.md) para más detalles.