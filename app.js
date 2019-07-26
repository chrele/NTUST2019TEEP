import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main';
import path from 'path';

const app = express();

const http = require('http').Server(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/img',express.static(path.join(__dirname, 'assets/img')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/css',express.static(path.join(__dirname, 'public/css')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(logger('dev'));
app.use('/', mainRoutes);

mongoose.connect('mongodb://localhost/projectsupport')
	.then(()=> {
		console.log('Database connected');
	})
	.catch((error)=> {
		console.log('Error connecting to Database')
	});

const port = 5035;

app.get('/', (req, res) => {
	res.status(200).json({
		message: 'Welcome to Project Support',
	});
});

app.listen(port, () => {
	console.log(`Our server is running on port ${port}`);
});