// https://gana-front.vercel.app/api/consumption.js
// GET /api/consumption?contract_id=1
//
// Devuelve TODOS los meses de consumo del contrato indicado (30 meses en 
// el contrato 1 y 20 meses en el contrato 2). La paginación de la gráfica
// (bloques de 12 en 12 meses) es responsabilidad del frontend: como hay 
// 30 meses en el contrato 1, la última página tendrá solo 6 (12 - 12 - 6), 
// así que la gráfica debe contemplar un bloque incompleto sin romperse 
// visualmente. En el caso del contrato 2, la última página tendrá solo
// 4 barras visibles (12 - 8).
//
// Query params:
//   ?contract_id=1   -> obligatorio, id del contrato (1 o 2 en los datos mock)
//   ?simulateError=true
//   ?delay=1500

const data = require("../data/consumption_history.json");

module.exports = async (req, res) => {
  const { contract_id, simulateError, delay } = req.query;

  const waitMs = delay ? parseInt(delay, 10) : 500;
  await new Promise((resolve) => setTimeout(resolve, waitMs));

  if (simulateError === "true") {
    res.status(500).json({ error: "Error simulado del servidor" });
    return;
  }

  if (!contract_id) {
    res.status(400).json({ error: "Falta el parámetro contract_id" });
    return;
  }

  const filtered = data.filter(
    (item) => String(item.contract_id) === String(contract_id)
  );

  res.status(200).json(filtered);
};
