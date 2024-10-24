const Product = require("../models/Product");

//create product -- admin

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

// get products
exports.getAllProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({ message: "working fine", products });
};

//update products
exports.updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({ message: "Product not found" });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({ message: "Updated", product });
};

//delete product

exports.deleteProduct = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  console.log("hi", product);

  if (!product) {
    return res.status(500).json({ message: "Product not deleted" });
  }

  await product.deleteOne();

  res.status(200).json({ message: "Product deleted", product });
};

//Get product details

exports.getProductDetails = async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({ message: "Product not found" });
  }

  res.status(200).json({ message: "Updated", product });
};
