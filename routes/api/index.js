const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRouter = require('./user-routes')

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/user', userRouter);

module.exports = router;
