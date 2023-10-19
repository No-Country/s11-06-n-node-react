const express = require('express');

const router = express.Router();
const GroupControllers = require('../controllers/group-controllers');
// const { isAuthenticated } = require('../middleware/middlewares');
// const passport = require('passport')

router.get('/', GroupControllers.getAll);
router.post('/', GroupControllers.createNewGroup);
router.get('/:id', GroupControllers.getById);
router.put('/', GroupControllers.updateGroup);
router.delete('/:id',  GroupControllers.deleteGroupStatus);


module.exports = router;
