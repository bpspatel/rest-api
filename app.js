const express = require('express');
const app  = express();
const morgan = require('morgan');
const bodyParser  = require('body-parser');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');

// log the request
app.use(morgan('dev'));

//bodyParser 

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//Routes which should handle the request
app.use('/products',productRoutes);
app.use('/orders',orderRoutes);

//handling erros

app.use((req, res, next) => {
	const error = new Error('Not Found');
	error.status = 404;
	next(error);
});

app.use((error, req, res, next)=>{
		res.status(error.status || 5000);
		res.json({
			error: {
				message: error.message
			}
		});
})

module.exports = app;