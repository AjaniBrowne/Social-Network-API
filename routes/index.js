const router = require('express').Router();
const thoughtsRoutes = require('./api/thoughtsroute');
const userRoutes = require('./api/userroutes');


router.use('/users', userRoutes);
router.use('/thoughts',thoughtsRoutes);


module.exports = router;