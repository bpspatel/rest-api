const express = require('express');

const router = express.Router();

//get requests
router.get('/', (req,res,next) => {
	res.status(200).json({
		message: 'Handling Get requests  to /product'
	});
});

// post requests
router.post('/', (req, res, next) => {
	const product = {
		name: req.body.name,
		price:req.body.price
	}
	
	res.status(200).json({
		message: 'Handling post requests to /prodcts',
		createdProduct: product
	});
})

//get product Id

router.get('/:productId', (req, res, next) => {
	 const id = req.params.productId;
	if(id === 'special'){
		res.status(200).json({
			message: `You discovered the Special Id`,
			id: id
	 });
	} else {
		res.status(200).json({
			message: `you passed an Id`
		});
	}
	 
});

//Updtae the product
router.patch('/:productId', (req, res, next) => {
	res.status(200).json({
		message: 'This is update the product'
	});
});

//delete product

router.delete('/:productId', (req, res, next)=>{
	res.status(200).json({
		message: 'This delete the product'
	});
});


module.exports = router;