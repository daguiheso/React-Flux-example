/*
 * Module dependences
 */

// Browserify busca reflux en folder node_modules y devolvernos el objeto que exporta
import Reflux from 'reflux';

/*
 * Objeto que tiene todas las acciones de las imagenes y para crearlo llamamos al 
 * metodo Reflux.create actions 
 */
let ImageActions = Reflux.createActions([
	// nombre de la accion
	'fetchList'
])

// Exportamos objeto ImageActions para que cuando importemos este archivo este disponible
export default ImageActions;