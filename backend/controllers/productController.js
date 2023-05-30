const Products = require("../models/Products");

module.exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find({});
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports.addAProduct = async (req, res) => {
  try {
    const {
      article,
      color,
      company,
      costPrice,
      sellingPrice,
      sizes,
      category,
      type,
      sizeFrom,
      sizeTo,
    } = req.body;
    const exists = await Products.findOne({
      category,
      type,
      article,
      color,
    });
    if (exists) return res.status(400).json({ msg: "product already exists" });
    const product = new Products({
      article,
      color,
      company,
      costPrice,
      sellingPrice,
      sizes,
      category,
      type,
      totalPieces: sizeTo - sizeFrom + 1,
    });
    await product.save();
    return res.status(201).json({ product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: error });
  }
};

module.exports.getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.category;
    const products = await Products.find({ category });
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports.editAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const newProd = req.body.newProd;
    const product = await Products.findByIdAndUpdate(id, newProd, {
      new: true,
    });
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports.deleteAProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await Products.findByIdAndDelete(id);
    return res.status(200).json({ msg: "product deleted" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
