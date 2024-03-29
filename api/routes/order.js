const express = require('express');

const router = express.Router();


router.get('/', (req, res, next)=> {
	res.status(200).json({
		message: 'Order were fetched'
	});
});


//create order
router.post('/', (req, res , next)=> {
		const order = {
			productId: req.body.productId,
			quantity: req.body.quantity
		}
		res.status(201).json({
			message: 'Order was created',
			order: order
		})
});

// get order details
router.get('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'order details',
		id: req.params.orderId
	});
})

// delete order 
router.delete('/:orderId', (req, res, next) => {
	res.status(200).json({
		message: 'order deleted test',
		id: req.params.orderId
	});
})

module.exports = router;