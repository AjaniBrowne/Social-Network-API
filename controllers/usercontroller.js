const { User, Thoughts } = require('../models');

const userController = {
    addnewUser(req,res) {
        User.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json(err));
    },
    getAllUsers(req,res){
        User.find({})
        .populate({path:'thoughts', select:'-__v'})
        .populate({path:'friends',select:'-__v'})
        .select('-__v')
        .then(data => res.json(data))
        .catch((err) => {
          console.log(err);
          res.status(500).json({message:"We found no users!"})
        });
    },
    getSingleUser(req,res){
        User.findOne({_id:req.params.userId})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .select('-__v')
        .then(data => res.json(data))
        .catch((err) =>{
            console.log(err);
            res.statuse(500).json({message:"No user matches this id!"})
        });
    },
    updateUsers(req,res){
        User.findOneAndUpdate(
        {_id:req.params.userId},
        {$set: req.body},
        {new: true}
        )
        .then(data => res.json(data))
        .catch((err) =>{
            console.log(err);
            res.statuse(500).json({message:"No user matches this id!"})
        });
    },
    deleteUsers(req,res){
        User.findOneAndDelete({_id:req.params.userId})
        .then(data => res.json(data))
        .catch((err) =>{
            console.log(err);
            res.statuse(500).json({message:"No user matches this id!"})
        });
    },
    addFriends(req,res){
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$set:{friends:req.params.friendsId}},
            {new:true}
        )
        .then(data => res.json(data))
        .catch((err) =>{
            console.log(err);
            res.statuse(500).json({message:"We found a error!"})
        });
    },
    deleteFriends(req,res){
        User.findOneAndDelete(
            {_id:req.params.userId},
            {$pull:{friends:req.params.friendsId}},
            {new:true}
        )
        .then(data => res.json(data))
        .catch((err) =>{
            console.log(err);
            res.statuse(500).json({message:"We found a error!"})
        });
    }

};

module.exports = userController;