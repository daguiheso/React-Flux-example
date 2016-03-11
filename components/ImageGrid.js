/*
 * Module dependencies
 */

import React form 'react';
import Reflux form 'reflux';
import ImageStore from '../stores/ImageStore';

/*
 * Para que nuestro component ImageGrid reaccione a los cambios del store utilizamos mixin, 
 * para conectar el ImaggeGrid con los cambios que suceden en el ImageStore utilizamos un mixin,
 * mixin es un array en todos los componentes de react, que por dentro llama a la funcion de Reflux
 * llamada connect()
 */

let ImageGrid = React.createClass({
	// 2 parametros : el store que nos interesa y el atributo del state que queremos que se modifique
	mixins : [Reflux.connect(ImageStore, 'imagestore')],
	render : function () {
		if (this.state.imagestore) {
			return <div>
				{
					this.state.imagestore.map((image) => {
						return <div className="image">
							<a href={image.link}
								<img src={image.media.m}/>
							</a>
						</div>
					})
				}
			</div>
		} else {
			return <p>No hay imagenes disponibles</p>
		}
	}
})

export default ImageGrid;