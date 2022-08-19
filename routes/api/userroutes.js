const router = require('express').Router();

const{
    addNewUser,
    getAllUsers,
    getSingleUser,
    updateUsers,
    deleteUsers,
    addFriends,
    deleteFriends,
} = require('../../controllers/usercontroller');

router.route('/')
.get(getAllUsers)
.post(addNewUser);


router.route('/:userId')
.get(getSingleUser)
.put(updateUsers)
.delete(deleteUsers);

router.route('/:userId/friends/:friendsId')
.post(addFriends)
.delete(deleteFriends);

module.exports = router;
