import mongoose from 'mongoose';
import Cause from '../models/cause';

export function createCause(req, res) {
	const cause = new Cause({
		_id: mongoose.Types.ObjectId(),
		title: req.body.title,
		description: req.body.description,
	});

	return cause
		.save()
		.then((newCause) => {
			res.redirect('/');
			return res.status(201).json({
				success: true,
				message: 'New cause created successfully',
				Cause: newCause,
			});

		})
		.catch((error) => {
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: error.message,
			});
		});
	
}

// export function getAllCause(req, res) {
// 	Cause.find({}, (err, Cause) => {
// 		if (err) {
// 			res.status(500).send(err);
// 		}
// 		console.log(Cause);
// 		res.render('/', {
// 			res: Cause
// 		});
// 	});
// };

export function getAllCause(req, res){
	Cause.find()
		.select('_id title description')
		.then((allCause) => {
			// res.render('/', {
			// 	res: allCause,
			// });
			return res.status(200).json({
				success: true,
				message: 'A list of all causes',
				Cause: allCause,

			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.',
				error: err.message,
			});
		});
};

export function getSingleCause(req, res) {
	const id = req.params.causeId;
	Cause.findById(id)
		.then((singleCause) => {
			res.status(200).json({
				success: true,
				message: `More on ${singleCause.title}`,
				Cause: singleCause,
			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				message: 'This cause does not exist',
				error: err.message,
			});
		});
}

export function updateCause(req, res) {
	const id = req.params.causeId;
	const updateObject = req.body;
	Cause.update({ _id: id }, { $set: updateObject })
		.exec()
		.then(() => {
			res.status(200). json({
				success: true,
				message: 'Cause is updated',
				updateCause: updateObject,
			});
		})
		.catch((err) => {
			res.status(500).json({
				success: false,
				message: 'Server error. Please try again.'
			});
		});
}

export function deleteCause(req, res) {
	const id = req.params.causeId;
	Cause.findByIdAndRemove(id)
		.exec()
		.then(() => res.status(204).json({
			success: true,
		}))
		.catch((err) => res.status(500).json({
			success: false,
		}));
	res.redirect('/');
}

export function home(req, res) {
	res.render('index.ejs', {
		title: "TEST",
		header: "TEST APP",
	});
}