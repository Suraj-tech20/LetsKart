import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/letskart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// app.get('/api/products', (req, res) => {
//     res.send(data.products);
// });

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.get('/api/config/paypal', (req, res) => {
    console.log(process.env.PAYPAL_CLIENT_ID);
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    res.end();
    next();
});

// eslint-disable-next-line no-undef
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});