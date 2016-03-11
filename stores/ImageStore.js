/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
// Importamos ImageActions creado anteriormente
import ImageActions from '../actions/ImageActions';


/*
 * Para decirle al store que escuche las acciones de las imagenes debemos incluir el atributo 
 * listenables dentro del store, el cual recibe un array que por dentro incluye a ImageActions,
 * dentro de listenables le decimos al store que actions queremos que escuche y va a ejecutar el
 * metodo llamado al igual que la accion que se dispare, definido en el. En este caso definimos el 
 * metodo llamado fetchList o tambien Reflux soporta el 'on' antes, osea onfetchList
 */
let ImageStore = Reflux.createStore({
	url : 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
	listenables : [ImageActions],
	imagelist : [],
	// cuando se inicialize llame a la function fetchList 
	init : function () {
		this.fetchList();
	},
	// fetchList al igual que esta en ImageActions, es el nombre de la accion que queremos que escuche
	fetchList : function () {
		let tags = ['animals', 'nature', 'food', 'travel', 'cars', 'sport'];
		let randomTag = tags[Math.floor(Math.random()*tags.length)];
		// request ajax  hacia la API de flickr
		$.ajax({
			// url, el ${} se remplaza por el valor de randomTag
			url : this.url + `&tag=${randomTag}`,
			dataType : 'jsonp',
			jsonpCallback : 'jsonFlickrFeed',
			cache : false,
			// context this para que dentro de nuestro callback cuando vuelva del request, this este seteado como imageStore
			context : this,
			success : function (data) {
				console.log('fecth ok');
				this.imagelist = data.items;
				/* metodo trigger de ImageStore que hace que se dispare la actualizacion de las vistas 
				 * y le pasamos this.omagelist que es el nuevo listado de imagenes
				 */
				this.trigger(this.imagelist)
			}			
		})
	}
})

// Creabdo objeto ImageStore con metodo Reflux.createStore() 
export default ImageStore;