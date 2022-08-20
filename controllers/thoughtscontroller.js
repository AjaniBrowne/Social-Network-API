const { User, Thoughts, Reaction } = require('../models');

const thoughtsController = {
    addNewThoughts(req,res) {
        Thoughts.create(req.body)
        .then((thoughtData) => {
            return User.findOneAndUpdate(
                {_id:req.params.userId},
                {$push: { thoughts: thoughtData._id}},
                {new:true});
        })
        .then((thoughtData) => {
            res.json({message:"Message created!"});
        });
    },

    getAllThoughts(req,res) {
        Thoughts.find({})
        .select('-__v')
        .then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
        });
    },
    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtsId })
          .select('-__v')
          .then(thoughtData => res.json(thoughtData))
          .catch((err) => {
            console.log(err);
            res.status(404).json({message:"We found a error!"})
          });
            
    },         
    deleteThought(req,res){
        Thoughts.findOneAndDelete({_id:req.params.thoughtsId})
        .then(thoughtData => {
            return User.findOneAndUpdate({thoughts:req.params.thoughtsId},{$pull:{thoughts:req.params.thoughtsId}},{new:true})
        }).then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
        });
    },
    updateThoughts(req,res){
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtsId },
            { $set: req.body },
            {  new: true }
        )
        .then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
        })
    },
    addReaction(req,res){
        Thoughts.findOneAndUpdate(
            {_id: req.params.thoughtsId},
            {$set:{reaction:req.body}},
            {new:true}
        )
        .then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
        })
    },
    deleteReaction(req,res){
        Thoughts.findOneAndUpdate(
            {_id:req.params.thoughtsId},
            {$pull:{reactions:req.params.reactionId}},
            {new:true}
        )
        .then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
        })
    }

};

module.exports = thoughtsController;