const express = require('express');
const app = express();
const port = 8080;

// Ruta principal
app.get("/", (req, res) => {
  res.json({
    mensaje: "Bienvenido al servidor de Santiago Orozco Gomez",
    estado: "Servidor operativo"
  });
});

// Ruta aprendiz
app.get("/aprendiz", (req, res) => {
  res.json({
    nombre: "Santiago Orozco Gomez",
    proyecto: "Mi primer servidor backend",
    rol: "Desarrollador"
  });
});

// Ruta programa
app.get("/programa", (req, res) => {
  res.json({
    cantidad: 1, 
    datos: [
      { id: 1, programa: "ADSO", ficha: "3315656" }
    ]
  });
});

// Servidor escuchando
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor JSON escuchando en http://10.5.225.138:${port}`);
});