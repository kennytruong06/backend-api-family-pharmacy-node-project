const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
    });
    if (!categoryData) {
      res.status(400).json({
        message: 'No category found with that id!'
      });
    } else {
      res.status(200).json(categoryData);
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  try {
    const existingCategory = await Category.findOne(
        {
            where: { category_name: req.body.category_name }
          }
        );

    if (existingCategory) {
      return res.status(400).json({ message: 'Category name already exists!' });
    }

    const categoryData = await Category.create(req.body);
    res.status(200).json({ message: 'Category created successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create category', details: err });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { category_name, parent_id } = req.body;

    if (category_name) {
      const existingCategory = await Category.findOne({
        where: { category_name }
      });

      if (existingCategory) {
        return res.status(400).json({ message: 'Category name already exists. Please choose another name.' });
      }
    }

    let updateData = {};
    if (category_name) updateData.category_name = category_name;
    if (parent_id) updateData.parent_id = parent_id;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'No update data provided.' });
    }

    const categoryData = await Category.update(updateData, {
      where: { id: req.params.id }
    });

    if (!categoryData[0]) {
      return res.status(400).json({ message: 'No category found matching the id. Choose another id.' });
    }

    res.status(200).json({ message: 'Category updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update category', details: err });
  }
});


router.delete('/:id',async (req, res) => {
  try{
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!categoryData){
      res.status(400).json({ message: 'No category found matching the id. Choose another id' });
    } else {
      res.status(200).json({ message: 'Category deleted!'});
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
