const router = require('express').Router();
const { Product, Image } = require('../../models');
const upload = require('../../service/imageService');
const path = require('path');
const fs = require('fs');
const { Op, fn, col } = require('sequelize');

router.get('/search', async (req, res) => {
  try {
    const { name, sort } = req.query;

    if (!name) {
      return res.status(400).json({ message: 'Please provide product name to search.' });
    }

    let sortOrder = sort === 'desc' ? 'DESC' : 'ASC';

    const searchData = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`
        }
      },
      order: [
        ['price', sortOrder]
      ]
    });

    if (searchData.length === 0) {
      return res.status(404).json({ message: 'No products found.' });
    }

    res.status(200).json(searchData);
  } catch (e) {
    res.status(500).json({ message: 'An error occurred during the search.' });
  }
});

router.get('/products-by-price', async (req, res) => {
  try {
    const { sort } = req.query;

    let sortOrder = sort === 'desc' ? 'DESC' : 'ASC';

    const products = await Product.findAll({
      order: [
        ['price', sortOrder]
      ]
    });

    res.status(200).json(products);
  } catch (e) {
    res.status(500).json({ message: 'An error occurred while retrieving the product list.' });
  }
});

router.get('/filter-products', async (req, res) => {
  try {
    const { minPrice, maxPrice, supplier_id } = req.query;

    const filterConditions = {};

    if (minPrice !== undefined && maxPrice !== undefined) {
      filterConditions.price = {
        [Op.between]: [minPrice, maxPrice],
      };
    }

    if (supplier_id) {
      filterConditions.supplier_id = supplier_id;
    }

    const products = await Product.findAll({
      where: filterConditions,
    });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error filtering products',
    });
    res.status(500).json({
      success: false,
      message: 'An error occurred while filtering products',
    });
  }
});

router.get('/find-by-name', async (req, res) => {
  try {
    const productName = await Product.findOne({
      where: { name: req.query.name }
    });

    if (!productName) {
      return res.status(404).json({ message: 'No product found with that name!' });
    }

    res.status(200).json(productName);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve product', details: err });
  }
});

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve products', details: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
    });

    if (!productData) {
      res.status(400).json({ message: 'No product found with that id!' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve product', details: err });
  }
});

router.post('/', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, price, category_id, supplier_id, is_new, stock_quantity } = req.body;

    const existingProduct = await Product.findOne({
      where: { name }
    });

    if (existingProduct) {
      return res.status(400).json({ message: 'Product name already exists!' });
    }

    if (!name || !description || !price || !category_id || !supplier_id || !stock_quantity) {
      return res.status(400).json({ error: 'Missing required information' });
    }

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No files have been uploaded !' });
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      category_id,
      supplier_id,
      is_new,
      stock_quantity
    });

    const uploadImagePaths = req.files.map((file, index) => ({
      url: path.join('uploads', path.basename(file.path)),
      isMain: index === 0    }));

    try {
      for (const image of uploadImagePaths) {
        await Image.create({
          product_id: newProduct.id,
          url: image.url,
          is_main: image.isMain
        });
      }
    } catch (imageError) {
      return res.status(400).json({ message: imageError });
    }

    res.status(200).json({ message: 'The product has been created successfully!', product: newProduct, images: uploadImagePaths });
  } catch (err) {
    res.status(500).json({ error: `Don't to create new products`, details: err });
  }
});

router.put('/:id', upload.array('images', 5), async (req, res) => {
  try {
    const { name, description, price, category_id, supplier_id, is_new, stock_quantity, deletedImages, addedImages } = req.body;

    if (!name && !description && !price && !category_id && !supplier_id && !is_new && !stock_quantity) {
      return res.status(400).json({ message: 'There is no data to update.' });
    }

    const updateData = {};

    if (name) updateData.name = name;

    if (description) updateData.description = description;

    if (price) updateData.price = price;

    if (category_id) updateData.category_id = category_id;

    if (supplier_id) updateData.supplier_id = supplier_id;

    if (is_new !== undefined) updateData.is_new = is_new;

    if (stock_quantity) updateData.stock_quantity = stock_quantity;

    const updatedProduct = await Product.update(updateData, { where: { id: req.params.id } });

    if (!updatedProduct[0]) {
      return res.status(404).json({ message: 'No products found.' });
    }

    if (deletedImages) {
      let parsedDeletedImages;

      try {
        parsedDeletedImages = JSON.parse(deletedImages);
      } catch (error) {

        return res.status(400).json({ message: 'The data to be deleted is corrupted', error });
      }

      if (Array.isArray(parsedDeletedImages)) {
        for (const image of parsedDeletedImages) {
          const { id, isMain } = image;
          try {
            const imageRecord = await Image.findOne({ where: { id } });

            if (imageRecord) {
              await Image.destroy({ where: { id } });
              const imagePath = path.join(__dirname, '../../uploads', path.basename(imageRecord.url))
              fs.unlink(imagePath, (err) => {

                if (err) {
                  return res.status(400).json({ message: 'Error deleting image', error });

                }
              });

              if (isMain) {
                const isNewIsMainProvided = addedImages && JSON.parse(addedImages).some(img => img.isMain);

                if (!isNewIsMainProvided) {

                  return res.status(400).json({ message: 'Need to add new image with isMain once deleted isMain image.' });
                }
              }
            } else {

              return res.status(400).json({ message: 'No images found' });
            }
          } catch (error) {

            return res.status(500).json({ message: `Photos cannot be deleted`, error });
          }
        }
      } else {

        return res.status(400).json({ message: 'The image to be deleted is invalid' });
      }
    }

    if (addedImages) {
      let parsedAddedImages;

      try {
        parsedAddedImages = JSON.parse(addedImages);
      } catch (error) {
        return res.status(400).json({ message: 'The image to be added is invalid', error });
      }

      if (Array.isArray(parsedAddedImages)) {
        // Loop over req.files to ensure the correct file handling
        const uploadedFiles = req.files;

        if (uploadedFiles && uploadedFiles.length > 0) {
          for (let i = 0; i < parsedAddedImages.length; i++) {
            const image = parsedAddedImages[i];
            const { isMain } = image;

            // Ensure that the file corresponds to the correct index
            const file = uploadedFiles[i];

            try {
              await Image.create({
                product_id: req.params.id,
                url: path.join('uploads', path.basename(file.path)), // Get the file path from uploaded file
                is_main: isMain ? 1 : 0,
              });

            } catch (error) {
              return res.status(500).json({ message: 'Error adding photo', error });
            }
          }
        } else {
          return res.status(400).json({ message: 'No files uploaded' });
        }
      } else {
        return res.status(400).json({ message: 'Unable to add images' });
      }
    }

    return res.status(200).json({ message: 'Product update successful!' });

  } catch (error) {

    return res.status(500).json({ message: 'Product update failed.', error });
  }
});

router.delete('/:id', (req, res) => {
  try{
    const productData = Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(!productData){
      res.status(404).json({ message: 'No products found matching that id!' });
    }else {
      res.status(200).json({ message: 'Product successfully deleted!' })
    }
  } catch(err){
    res.status(500).json(err);
  }
});

module.exports = router;