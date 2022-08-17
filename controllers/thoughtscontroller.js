const { User, Thoughts, Reaction } = require('../models');

const thoughtsController = {
    addnewThoughts(req,res) {
        Thoughts.create(req.body)
        .then((data) => {
            return User.findOneAndUpdate(
                {_id:req.body.userId},
                {$push: { thoughts: data_id}},
                {new:true});
        })
        .then((user) => {
            if(!user){
                return res.status(404).json({message:"We found a error!"});
            }
            res.json({message:"Message created!"});
        });
    },

    getAllThoughts(req,res) {
        Thoughts.find({})
        .populate({
            path:'user',
            select:('-__v')
        })
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
        .then(thoughtData => res.json(thoughtData))
        .catch(err =>{
            console.log(err);
            res.status(404).json({message:"We found a error!"})
            return;
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
            return;
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
            return;
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
            return;
        })
    }

}

module.exports = thoughtsController;