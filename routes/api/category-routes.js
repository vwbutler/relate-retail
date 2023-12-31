const router = require("express").Router();
const { Category, Product } = require("../../models");
const { update } = require("../../models/Category");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// router.put("/:id", async (req, res) => {
//   // update a category by its `id` value
//   try {
//     const categoryData = await Category.update(req.body, {
//       where: { id: req.params.id },
//     });
//     if (updateCategoryData[0] === 0) {
//       res
//         .status(404)
//         .json({ message: "We are unable to find a category with this ID." });
//       return;
//     }
//     res.json({ message: "We have updated the category." });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (categoryData[0] === 0) {
      res
        .status(404)
        .json({ message: "We are unable to find a category with this ID." });
      return;
    }
    res.json({ message: "We have updated the category." });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!deletedCategory) {
      res
        .status(404)
        .json({ message: "We are unable to find a category with this ID." });
      return;
    }
    res.json({ message: "We have deleted the category." });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
