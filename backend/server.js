const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post("/data", (req, res) => {
    const { name } = req.body;
    res.json({ message: `¡Hola, ${name}! Datos recibidos correctamente.` });
});

app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
