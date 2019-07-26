import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

const deviceSchema = new mongoose.Schema({
	// _id: mongoose.Schema.Types.ObjectId,
	_id: {
		type: String,
		required: true,
	},
	deviceName: {
		type: String,
		required: true,
	},
	companyName: {
		type: String,
		required: true,
	},
	departmentName: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	principalName: {
		type: String,
		required: true,
	},
});

export default mongoose.model('Device', deviceSchema);