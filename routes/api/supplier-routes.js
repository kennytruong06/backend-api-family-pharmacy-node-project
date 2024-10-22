const router = require('express').Router();
const { Supplier } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const supplierData = await Supplier.findAll({
        });
        res.status(200).json(supplierData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const supplierData = await Supplier.findByPk(req.params.id, {
        });
        if (!supplierData) {
            res.status(400).json({
                message: 'No supplier found with that id!'
            });
        } else {
            res.status(200).json(supplierData);
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, country } = req.body;

        if (!name || !country) {
            return res.status(400).json({ message: 'Both fields are required: name and country' });
        }

        const existingSupplier = await Supplier.findOne({
            where: { name }
        });

        if (existingSupplier) {
            return res.status(400).json({ message: 'Supplier with this name already exists!' });
        }

        const supplierData = await Supplier.create({ name, country });
        res.status(200).json({ message: 'Supplier created successfully!', data: supplierData });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create supplier', details: err });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { name, country } = req.body;

        if (!name && !country) {
            return res.status(400).json({ message: 'No update data provided.' });
        }

        const existingSupplier = await Supplier.findOne({
            where: { name }
        });

        if (existingSupplier) {
            return res.status(400).json({ message: 'Supplier with this name already exists!' });
        }

        let updateData = {};

        if (name) updateData.name = name;

        if (country) updateData.country = country;

        const supplierData = await Supplier.update(updateData, {
            where: { id: req.params.id }
        });

        if (!supplierData[0]) {
            return res.status(400).json({ message: 'No supplier found matching the id. Choose another id.' });
        }

        res.status(200).json({ message: 'Supplier updated successfully!' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update supplier', details: err });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const supplierData = await Supplier.destroy({
            where: {
                id: req.params.id
            }
        });

        if (!supplierData) {
            return res.status(400).json({ message: 'No supplier found matching the id. Choose another id.' });
        } else {
            return res.status(200).json({ message: 'Supplier deleted!' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete supplier', details: err });
    }
});

module.exports = router;
