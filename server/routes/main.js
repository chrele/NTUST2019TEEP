import express from 'express';
import { addDevice, createDevice, 
	getAllDevice, getSingleDevice, 
	updateDevice, deleteDevice, home } 
	from '../controllers/device';

const app = express();

app.route('/device/add').get(addDevice);
app.route('/')
	.post(createDevice)
	.get(home);
app.route('/edit')
	.post(updateDevice);
app.route('/delete')
	.post(deleteDevice);
	// .get(getAllDevice);
// app.route('/:DeviceId')
// 	.get(getSingleDevice)
// 	.patch(updateDevice)
// 	.delete(deleteDevice);

export default app;