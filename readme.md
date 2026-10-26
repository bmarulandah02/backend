## paso a paso

- Verificar la version de node
- Inicializar el proyecto
- crea el package.json
- cambiamos esta linea :`"type": "module",`
- Paquetes Basicos : npm i nodemon cors express mysql

  - nodemon: solo para desarrollar!: sirve para cambiar el codigo y que se actualice:
  - cors: setear la setear la seguridad de interactuar con direcciones ip diferentes
  - express: libreria para crear un servidor rest (post , put , get y delete)
  - mysql2 : esto es una libreria que permite hacer consultas **SQL** desde **NODEJS**
- Cambiamos la seccion scritpo en package.json asi :

  ```json
  "dev": "nodemon index.js",
  "start": "node index.js",
  ```
- con el fin de tener dos scrips en ejecucion , uno de desarrollo y uno en produccion (despliegue)
