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

router.route('/users')
.get(getAllUsers)
.get(getSingleUser)
.post(addNewUser)
.put(updateUsers)
.delete(deleteUsers);

router.route('/api/users/:usersId/friends/:friendsId')
.post(addFriends)
.delete(deleteFriends);

module.exports = router;
