import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async(req, res) => {
    const products = await Product.find({});
    res.send(products);
}))
productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) {
            res.status(404).send({ message: 'Product Not Found' });
        } else {
            res.send(product);
        }
    });
}));

export default productRouter;