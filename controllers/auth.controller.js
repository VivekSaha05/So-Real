const User = require("../models/user");

exports.ShowRegisterPage = (req, res) => {
  return res.render("register", {
    message: "",
  });
};

exports.ValidateRegister = async (req, res) => {
  const { name, username, email, password, cpassword } = req.body;
  console.log(name, username, email, password, cpassword);
  if (!name || !username || !email || !password || !cpassword) {
    return res.render("register", {
      message: "Fill complete information!",
    });
  }
  if (cpassword !== password) {
    return res.render("register", {
      message: "enter similar password!",
    });
  }
  try {
    await User.create({
      name,
      username,
      email,
      password,
    });
    return res.render("home");
  } catch (error) {
    return res.render("register", {
      message: "Some error occured!",
    });
  }
};