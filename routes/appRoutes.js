const router = require('express').Router();
const loginController =require('../controllers/loginControllers');
router.use('/login',loginController);

module.exports = router;