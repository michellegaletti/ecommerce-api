const products = require("../products.json");

const getProduct = (req, res) => {
  //Researched after saw with solution, essentially means to return the product if it finds the product, otherwise it will return undefined
  const product = products.find(
    (element) => element.id === parseInt(req.params.id)
  );
  if (!product) {
    return res.status(500).send("Item not in list");
  }
  res.status(200).send(product);
};

module.exports = getProduct;
