const { User, Thoughts } = require('../models');

const userController = {
    addnewUser(req,res) {
        User.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    }
}