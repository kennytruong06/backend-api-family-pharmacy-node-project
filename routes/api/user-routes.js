const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const productData = await User.findAll();
    res.status(200).json(productData);
  }catch(err){
    res.status(500).json(err);
  }
  
  console.log('User model:', User); // Kiểm tra xem mô hình có được định nghĩa không

});

router.get('/:id', async (req, res) => {
  // find one user by its `id` value
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: User }] // include its associated Products
    });
    if (!userData) {
      res.status(400).json({
        message: 'No category found with that id!'
      });
      return;
    } else {
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json(err);
  }

});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(200).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!userData) {
      res.status(400).json({ message: 'No user found matching the id. Choose another id.' });
      return
    }
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err);
  };
});

router.delete('/:id',async (req, res) => {
  try{
    const userData = await user.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!userData){
      res.status(400).json({ message: 'No user found matching the id. Choose another id' });
      return;
    } else {
      res.status(200).json({ message: 'user deleted!'});
    }
  } catch(err) {
    res.status(500).json(err);
  }
});

module.exports = router;
