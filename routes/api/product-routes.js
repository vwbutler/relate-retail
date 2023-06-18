const router = require("express").Router();
const { Product, Category, Tag, ProductTag } = require("../../models");

// The `/api/products` endpoint

router.get("/", async (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findAll({
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{ model: Category }, { model: Tag, through: ProductTag }],
    });
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new product
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a product by its `id`
  try {
    const updateProductData = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (updateProductData[0] === 0) {
      res
        .status(404)
        .json({ message: "We are unable to find a product with this ID." });
      return;
    }
    res.json({ message: "We have updated the product." });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a product by its `id`
  try {
    const deletedProduct = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProduct) {
      res
        .status(404)
        .json({ message: "We are unable to find a product with this ID." });
      return;
    }
    res.json({ message: "We have deleted the product." });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
