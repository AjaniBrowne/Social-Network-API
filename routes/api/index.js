const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsroute');
const userRoutes = require('./userroutes');


router.use('/users', userRoutes);
router.use('/thoughts',thoughtsRoutes);


module.exports = router;