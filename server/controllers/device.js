import mongoose from 'mongoose';
import Device from '../models/device';

export function home(req, res) {
	
	Device.find({}, (err, Device) => {
		if (err) {
			return res.status(500).send(err);
		}
		console.log(Device);
		// res.render('./Device/list-Device', {
		// 	title: "TES",
		// 	header: "TESSS",
		// 	res: Device
		// });
		res.render('index.ejs', {
			title: "TES",
			header: "TESSS",
			res: Device
		});
	});
};

export function getAllDevice(req, res, next) {
	Device.find({}, (err, Device) => {
		if (err) {
			return res.status(500).send(err);
		}
		console.log(Device);
		res.render('./Device/list-Device', {
			title: "TES",
			header: "TESSS",
			res: Device
		});
	});
};

export function addDevice(req, res) {
	res.render('/Device/add-Device', {
		title: "TES",
		header: "TESSS",
	});
}

export function createDevice(req,res) {
	var newDevice = new Device({
		_id: req.body._id,
		deviceName: req.body.deviceName,
		companyName: req.body.companyName,
		departmentName: req.body.departmentName,
		location: req.body.location,
		principalName: req.body.principalName,
	});
	newDevice.save((err, Device) => {
		if (err) {
			return res.status(500).send(err);
		}
		console.log('New device created')
		res.redirect('/');
	});
};

export function getSingleDevice(req, res) {
	const id = req.params._id;
	Device.findById(id, (err, Device) => {
		if (err) {
			res.status(500).send(err);
		}
		res.render('Device/detail-Device', {
			title: "TES",
			header: "TESSS",
			res: Device,
		});
	});
};

export function updateDevice(req, res) {
	Device.findOneAndUpdate({
		_id: req.body._id,
	}, {
		$set: req.body,
	}
	, (err, Device) => {
		if (err) {
			return res.status(500).send(err);
		}
	});
	res.redirect('/');
};

export function deleteDevice(req, res) {
	Device.deleteOne({
		_id: req.body._id,
	}, (err, Device) => {
		if (err) {
			res.status(500).send(err);
		}
		console.log('Device has been deleted!');
		res.redirect('/');
	});
};
