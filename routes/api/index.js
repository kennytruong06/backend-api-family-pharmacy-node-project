const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRouter = require('./user-routes');
const supplierRouter = require('./supplier-router');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/user', userRouter);
router.use('/supplier', supplierRouter);

module.exports = router;
