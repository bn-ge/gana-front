# Prueba técnica — Frontend Developer

Gracias por tu interés en unirte a Gana Energía. Esta prueba busca ver cómo trabajas
en un caso realista: implementar una pantalla a partir de un diseño de Figma,
consumiendo datos de una API.

**Tiempo de dedicación**: no debería llevarte más de 4-5 horas. No valoramos
que le dediques más tiempo del razonable — preferimos algo bien resuelto y
acotado a algo extenso pero incompleto.

**Plazo de entrega**: tienes hasta el martes 21 de julio a las 23:59h para
enviarnos tu solución.

**Después de la prueba**: Te invitaremos a nuestra oficina en Valencia
para una presentación breve (15-20 min) donde nos enseñes tu solución
en directo y nos cuentes las decisiones que tomaste.

## Contexto

Vas a construir una parte del Área Cliente de una comercializadora eléctrica:
la vista donde el cliente ve su historial de facturación, y puede cambiar entre
sus distintos contratos/suministros.

## Diseño

Encontrarás el diseño de referencia en el enlace de Figma del correo.

Queremos que el resultado final sea lo más fiel posible al diseño: espaciados,
tipografías, colores y estados (incluyendo hover si el diseño lo contempla).

En el Figma hay dos páginas: una llamada "A maquetar" con el diseño final, y otra
llamada "Componentes" donde podrás ver el comportamiento de los componentes. 
Podrás ver mejor el comportamiento de la gráfica en la vista de prototipo.

## Qué te pedimos construir

1. **Desplegable de contratos** (en el header): el cliente tiene 2 contratos
   de luz. Al seleccionar uno distinto, debe actualizarse tanto la tarjeta de
   tarifa como la gráfica de historial, sin recargar la página.
   - Este desplegable debe ser un **componente propio**, no un `<select>` nativo del navegador.
2. **Tarjeta "Tu tarifa actual"**: muestra los datos del contrato seleccionado
   (nombre de tarifa, potencias P1/P2, CUPS).
3. **Gráfica "Tu historial de facturación"**:
   - Toggle para cambiar la vista entre € y kWh (esto no requiere nueva llamada
     a la API, ambos valores ya vienen en los datos).
   - Paginación para navegar por los distintos bloques de meses.
   - Al cambiar de contrato en el desplegable, la gráfica debe recargarse con
     los datos del nuevo contrato, empezando de nuevo en la primera página.
   - Los datos más actuales se muestran por la derecha, siendo el mes más reciente
      la última gráfica. Al cambiar de página, las barras se desplazan hacia la derecha 
      (van al revés que una paginación normal).

## API disponible

Base URL: `https://gana-front.vercel.app/`

**Listar contratos:**
```
GET /api/contracts
https://gana-front.vercel.app/api/contracts
```
Devuelve un array con los 2 contratos disponibles, cada uno con su `id`,
dirección, nombre de tarifa, potencias y CUPS.

**Historial de consumo de un contrato:**
```
GET /api/consumption?contract_id=1
https://gana-front.vercel.app/api/consumption?contract_id=1
https://gana-front.vercel.app/api/consumption?contract_id=2
```
Parámetros:
- `contract_id` (obligatorio): id del contrato, tal y como viene en `/api/contracts`.

Devuelve:
```json
{
  "data": [ { "mes": "JUL", "anio": "23", "kwh": 81.18, "eur": 18.3 }, ... ],
}
```

**Para probar el manejo de errores y estados de carga**, puedes forzar:
```
GET /api/consumption?contract_id=1&simulateError=true
GET /api/consumption?contract_id=1&delay=3000
```
Te recomendamos comprobar tú mismo que tu solución maneja bien ambos casos
antes de entregarla.

## Requisitos técnicos

- React + TypeScript.
- Libertad total para elegir gestión de estado, librería de estilos
  (CSS Modules, Tailwind, Styled Components, etc.) y estructura de carpetas.
  **Queremos ver tu criterio**, así que explícanos brevemente el porqué de tus
  decisiones en el README.

## Qué nos tienes que entregar

1. **Repositorio de GitHub** con el código completo.
2. **Proyecto desplegado** (Vercel o Netlify, ambos gratuitos).
3. **Un README breve** que explique:
   - Qué decisiones tomaste y por qué (gestión de estado, CSS, estructura de carpetas).
   - Cómo gestionaste el estado compartido entre el desplegable, la tarjeta de
     tarifa y la gráfica.
   - Qué harías distinto o qué añadirías con más tiempo.
   - Cualquier supuesto que hayas asumido si algo del diseño o los datos no estaba claro.

## Qué NO evaluamos

- No hace falta backend propio ni autenticación.
- No hace falta testing.
- No penalizamos que uses asistentes de IA (Copilot, Claude Code, etc.) — de hecho,
  nos interesa saber si los usas y cómo, coméntalo también en el README.

Cualquier duda antes de empezar, escríbenos. ¡Suerte!
