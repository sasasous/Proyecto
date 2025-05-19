const indexController = {
    index: function(req, res) {
        return res.render('index.ejs');
    },
    show: function(req, res) {
        return res.render('id.ejs');
    }
};

module.exports = indexController;