const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


//Here we define our routes as variables and designate the pathways to be followed for each.
module.exports = router;