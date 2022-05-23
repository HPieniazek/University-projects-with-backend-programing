import express from "express";
const router = express.Router();

const {
  getProduct,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require("./productController")


router.route('/').get(getProducts).post(createProduct).delete(deleteProduct).put(updateProduct)
router.route('/:id').get(getProduct)

module.exports = router; 