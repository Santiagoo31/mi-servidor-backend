const express = require('express');
const app = express();
const port = 8080;

// Rutas
app.get("/", (req, res) => {
  res.send("Mi primer servidor backend");
});

app.get("/aprendiz", (req, res) => {
  res.send("Santiago Orozco Gomez");
});

app.get("/programa", (req, res) => {
  res.json({
    cantidad: 1, 
    datos: [
      { id: 1, programa: "ADSO", ficha: "3315656" },
    ]
  });
});

// ESTA es la parte clave para que sea accesible en tu red local
app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://10.5.225.138:${port}`);
})