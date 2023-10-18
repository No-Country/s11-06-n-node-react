const express = require('express');

const router = express.Router();
const NewsControllers = require('../controllers/news-controllers');
const { isAuthenticated } = require('../middleware/middlewares');

router.get('/', NewsControllers.getAllNews);
router.get('/dashboard', NewsControllers.getAllNewsToDashboard);
router.post('/', isAuthenticated, NewsControllers.postNews)
router.put('/:id', isAuthenticated,  NewsControllers.editNews);
router.put('/:id/comment', isAuthenticated, NewsControllers.postComment)
router.get('/:id', NewsControllers.getNewsById);
router.delete('/:id', isAuthenticated, NewsControllers.deleteNews)
router.get('/user/:id',  NewsControllers.getAllNewsFromUser);
module.exports = router;
