const express = require('express');
const app = express();
const port = 5035;
app.get('/', (request, respond) => {
	respond.status(200).json({
		message: 'Welcome to Project Support',
	});
});

app.listen(port);
