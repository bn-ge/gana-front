// https://gana-front.vercel.app/api/contracts.js
// GET /api/contracts
//
// Devuelve los contratos/suministros del cliente para pintar el desplegable
// del header ("Luz · Activo · Calle Colón 60, P7, Valencia..." o 
// "Luz · Activo · Avenida Blasco Ibáñez 12, P4, Valencia...").

const data = require("../data/contracts.json");

module.exports = async (req, res) => {
  const { simulateError, delay } = req.query;

  const waitMs = delay ? parseInt(delay, 10) : 400;
  await new Promise((resolve) => setTimeout(resolve, waitMs));

  if (simulateError === "true") {
    res.status(500).json({ error: "Error simulado del servidor" });
    return;
  }

  res.status(200).json(data);
};
