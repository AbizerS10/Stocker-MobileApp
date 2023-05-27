const {
  getAllProducts,
  getProductsByCategory,
  addAProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.get("/all", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.post("/add", addAProduct);

module.exports = router;
