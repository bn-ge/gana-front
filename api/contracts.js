// https://gana-front.vercel.app/api/contracts.js
// GET /api/contracts
//
// Devuelve los contratos/suministros del cliente para pintar el desplegable
// del header ("Luz · Activo · Calle Colón 60, P7, Valencia..." o 
// "Luz · Activo · Avenida Blasco Ibáñez 12, P4, Valencia...").

const data = require("../data/contracts.json");

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const { simulateError, delay } = req.query;

  const waitMs = delay ? parseInt(delay, 10) : 400;
  await new Promise((resolve) => setTimeout(resolve, waitMs));

  if (simulateError === "true") {
    res.status(500).json({ error: "Error simulado del servidor" });
    return;
  }

  res.status(200).json(data);
};
