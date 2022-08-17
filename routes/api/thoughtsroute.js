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

router.route('/thoughtsId')
.get(getSingleThought)
.put(updateThoughts)
.delete(deleteThought)
.get(getAllThoughts)
.post(addNewThoughts);

router.route('/thoughtsId/reactions')
.post(addReaction)
.delete(deleteReaction);

module.exports = router