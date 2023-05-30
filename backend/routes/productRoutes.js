const {
  getAllProducts,
  getProductsByCategory,
  addAProduct,
  editAProduct,
  deleteAProduct,
} = require("../controllers/productController");

const router = require("express").Router();

router.get("/all", getAllProducts);
router.get("/category/:category", getProductsByCategory);
router.post("/add", addAProduct);
router.put("/edit/:id", editAProduct);
router.delete("/delete/:id", deleteAProduct);

module.exports = router;
