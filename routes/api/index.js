const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const supplierRoutes = require('./supplier-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/suppliers', supplierRoutes);

module.exports = router;
