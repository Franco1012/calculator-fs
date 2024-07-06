import multiplicacion from "./operaciones/multiplicacion.js";
import suma from "./operaciones/suma.js";
import resta from "./operaciones/resta.js";
import division from "./operaciones/division.js";
const module = { multiplicacion, suma, resta, division }//exportar el objeto me facilita la desestructuracion
export { multiplicacion, suma, resta, division }
export default module