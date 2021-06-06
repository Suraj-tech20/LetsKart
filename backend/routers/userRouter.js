import express from 'express';
import data from '../data.js';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

//because mongoose operation are async that why we define async
userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    // remvoe all user
    // await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

// module.exports = userRouter;
export default userRouter;