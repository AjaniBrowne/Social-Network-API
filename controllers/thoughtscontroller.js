const { User, Thoughts } = require('../models');

const thoughtsController = {
    addnewThoughts(req,res) {
        Thoughts.create(req.body)
        .then((data) => {
            return User.findOneAndUpdate({
                _id:req.body.User
            })
        })
        .catch((err) => res.status(500).json(err));
    }
}