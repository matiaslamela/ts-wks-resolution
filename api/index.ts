import {sequelize} from './src/db';
import app from './src/app';
sequelize
	.sync({force: true, logging: false})
	.then(() => {
		console.log('base de datos conectada');
		app.listen(3001, () => {
			console.log('El server esta andando en el puerto 3001');
		});
	})
	.catch((error) => console.error(error));
