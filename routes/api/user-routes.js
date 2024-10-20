const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const { otpServices } = require('../../service/otpServies');
require('dotenv').config();
const jwt = require('jsonwebtoken');

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password'] }
    });

    if (!userData) {
      return res.status(404).json({ message: 'No users found with this ID!' });
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while retrieving user information.', error: err });
  }
});

router.get('/', async (req, res) => {
  try{
    const userData = await User.findAll({
      attributes: { exclude: ['password'] }
    });
    res.status(200).json(userData);

  }catch(err){
    res.status(500).json(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    const email = req.body.email.trim();

    const existingUserByEmail = await User.findOne({
      where: { email: email }
    });

    if (existingUserByEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    var otp999 = await otpServices(req.body.email)
    req.session.otp = otp999
    req.session.name = req.body.name
    req.session.email = req.body.email
    req.session.password = req.body.password
    req.session.phone = req.body.phone

    return res.status(200).json(otp999);

  }
  catch (err) {
    return res.status(500).json({ message: 'Error in creating user', error: err });
  }
});

router.post('/verify-otp', async (req, res) => {
  const { otp } = req.body;

  if (req.session.otp !== otp) {
    let user = new User({
      name: req.session.name,
      email :req.session.email,
      password: bcrypt.hashSync(req.session.password, 10),
      phoneNumber: req.session.phone,
    });

    user = await user.save();

    if (!user) {
      return res.status(404).send('User cannot be created');
    }

    return res.status(200).json({message: 'registered successfully'});

  } else {
    return res.status(400).json({ message: 'Invalid OTP' });
  }
});

router.post('/login', async (req, res) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  const secret = process.env.JWT_SECRET;

  if (!user) {
    return res.status(400).send('User with given Email not found');
  }
  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

  if (user && isPasswordValid) {
    const token = jwt.sign({
      userID: user.id,
      isAdmin: user.role === 1
    }, secret, { expiresIn: '1d' });

    return res.status(200).send({ user: user.email, token:token , message: 'Login successfully'});
  } else {
    return res.status(400).send('Password is incorrect');
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const updateData = {};
    const user = await User.findOne({ where: { id: req.params.id } });

    if (!user) {
      return res.status(400).json({ message: 'User with given id not found.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Password is incorrect.' });
    }

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (address) updateData.address = address;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ message: 'There is no data to update.' });
    }

    if (email) {
      const emailExists = await User.findOne({
        where: {
          email: email,
        }
      });

      if (emailExists) {
        return res.status(400).json({ message: 'Email already exists, please select another email.' });
      }
    }

    const userData = await User.update(updateData, {
      where: {
        id: req.params.id
      },
      silent: true
    });

    if (!userData[0]) {
      return res.status(400).json({ message: 'User with given id not found. Please choose another id.' });
    }

    res.status(200).json({ message: 'User information has been updated successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'An error occurred while updating user information.', error: err });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id
      }
    });

    if (userData === 0) {
      return res.status(400).json({ message: 'No user found matching the id. Choose another id' });
    } else {
      return res.status(200).json({ message: 'User deleted!' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while deleting the user', error });
  }
});

module.exports = router;
