const router = require('express').Router();

const {
    addNewThoughts,
    getAllThoughts,
    getSingleThought,
    deleteThought,
    updateThoughts,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtscontroller');

router.route('/')
.get(getAllThoughts);

router.route('/:thoughtsId')
.get(getSingleThought)
.post(addNewThoughts)
.put(updateThoughts)
.delete(deleteThought);


router.route('/:thoughtsId/reactions')
.post(addReaction)
.delete(deleteReaction);

module.exports = router