const User = require("../models/User");

const usersController = {};

usersController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersController.createUser = async (req, res) => {
  // req.body retorna un objeto con el json enviado en el POST request.
  //Lo desestructuro para obtener los valores.
  try {
    const { username } = req.body;
    const newUser = new User({ username });
    await newUser.save();
    res.json("User created");
  } catch(error) {
    console.log(error);
    res.json(error.errmsg);
  }
};

usersController.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
};

module.exports = usersController;
