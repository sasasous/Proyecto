const db = require("../database/models");

module.exports = {
  home: (req, res) => {
    db.Product.findAll()
      .then((products) => {
        return res.render("index.ejs", { products });
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send("Error");
      });
  },

  detailProduct: (req, res) => {
    db.Product.findByPk(req.params.id)
      .then((product) => {
        if (product) {            
          return res.render("detailProduct.ejs", { product });
        } else {
          res.send("producto no encontrado");
        }
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).send("Error");
      });
  },
};
