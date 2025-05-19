const indexController = {
    index: function(req, res) {
        return res.render('index.ejs');
    },
    show: function(req, res) {
        return res.render('id.ejs');
    }
};

const db = require('../database/models');

module.exports = {
    home: (req, res) {
        db.product.findAll()
            .then(products => {
                res.render('index', { products });
            })
            .catch(error => {
                console.log(error);
                return res.status(500).send('Error');
            });
    },

    detailProduct: (req, res) => {
        db.product.findByPk(req.params.id)
            .then(product => {
                res.render('detailProduct', { product });
            })
    }
};

module.exports = indexController;