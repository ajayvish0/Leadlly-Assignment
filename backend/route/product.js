const express = require("express");
const authentication = require("../middleware/authentication");
const { productSchema } = require("../validation");
const { Product } = require("../db");
const router = express.Router();

router.post("/create", authentication, async (req, res) => {
  try {
    const { name, price } = req.body;
    const { success } = productSchema.safeParse({ name, price });
    if (!success) {
      return res.status(400).send("Invalid data");
    }
    const product = await Product.create({ name, price });
    if (!product) {
      return res.status(400).send("Product already exists");
    }
    res.status(201).send("Product created successfully");
  } catch (error) {
    res.status(500).send("Error creating product");
  }
});
router.get("/", authentication, async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).send("Error fetching products");
  }
});

module.exports = router;
