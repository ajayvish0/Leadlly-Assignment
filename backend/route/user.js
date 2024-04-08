const express = require("express");
const { User, Blacklisted } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../Secret");

const router = express.Router();
const { userSchema, SignSchema, updateSchema } = require("../validation");
const authentication = require("../middleware/authentication");
const productRouter = require("./product");

router.use("/product", productRouter);

router.post("/register", async (req, res) => {
  const data = req.body;
  const { success } = userSchema.safeParse(data);
  if (!success) {
    return res.status(400).send("Invalid data");
  }
  const user = await User.findOne({ username: data.username });
  console.log(user);
  if (user) {
    return res.status(400).send("User already exists");
  }
  const newUser = User.create(data);
  res.json({
    message: "User created successfully",
  });
});
router.post("/login", async (req, res) => {
  const data = req.body;
  const { success } = SignSchema.safeParse(data);

  if (!success) {
    return res.status(400).send("Invalid data");
  }
  const user = await User.findOne({
    username: data.username,
    password: data.password,
  });

  if (!user) {
    return res.status(400).send("Invalid username or password");
  }

  const token = jwt.sign(
    {
      userId: user._id,
    },
    JWT_SECRET
  );
  console.log(token);
  res.json({
    message: "User logged in successfully",
    token: token,
  });
});

router.put("/edit", authentication, async (req, res) => {
  const data = req.body;
  const { success } = updateSchema.safeParse(data);
  console.log(data);
  console.log(req.userId);
  if (!success) {
    return res.status(400).send("Invalid data");
  }
  const updateUser = await User.updateOne({ _id: req.userId }, data);
  console.log(updateUser);
  res.json({
    message: "User updated successfully",
    data: updateUser,
  });
});
router.post("/logout", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).send("Token is missing");
  }
  try { 
   const decode =  jwt.verify(token, JWT_SECRET), 
    if(!decode){
      return res.status(400).send("Invalid token");
    }
    const blacklisted = await Blacklisted.create({ token });
    res.json({
      message: "User logged out successfully"})
  } catch (error) {
    console.error('Error logging out:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
