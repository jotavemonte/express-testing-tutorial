module.exports = {
    hello: function(req, res) {
        if (!req.body.name) {
            res.send('An error ocurred: Name is required parameter');
        }
        else if (
            !(req.body.language in ['en', 'es', 'pt'])
        ) {
            res.send('Error: Invalid Language')
        }
    }
}