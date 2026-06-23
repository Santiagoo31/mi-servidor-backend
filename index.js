// Importación del framework Express
const express = require('express');
const app = express();
const port = 3000;

// Definición de las rutas aca está el ciclo de petición y respuesta
app.get("/", (req, res) => {
  res.send("Mi servidor Santiago Orozco Gomez");
});

// Ruta /saludo Respuesta personalizada
app.get("/saludo", (req, res) => {
  res.send("Buenos dias amiguitos como están MUY BIEN esto es un saludo de amistad QUE BIEN");
});
// Ruta /usuarios Información de usuarios
app.get("/usuarios", (req, res) => {
  res.json({
    cantidad: 2,
    datos: [
      { id: 1, nombre: "Santiago Orozco", rol: "Desarrollador" },
      { id: 2, nombre: "Stiven Meza", rol: "Administrador" },
      { id: 2, nombre: "Kristian Range", rol: "Administrador" }
    ]
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});