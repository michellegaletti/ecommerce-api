const products = require("../products.json");

const getProducts = (req, res) => {
  if (req.query.price) {
    const items = products.filter(
      (element) => parseInt(req.query.price) <= element.price
    );
    return res.status(200).send(items);
  }
  res.status(200).send(products);
};

module.exports = getProducts;
