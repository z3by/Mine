const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsCtrl');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('posts');
});


// @route   POST /posts/post
// @desc    create new post
router.post('/post', postsController.createPost);


// @route   PUT /posts/post
// @desc    edit one post
router.put('/post', postsController.updatePost);


// @route   DELETE /posts/post:id
// @desc    delete post
router.delete('/post/:id', postsController.deletePost);


// @route   GET /posts/psot/:id
// @desc    retrieve one post
router.get('/post/:id', postsController.retrievePost);


// @route   GET /posts/:user
// @desc    retrieve all the posts for one user
router.get('/:user', postsController.retrieveUserPosts);


// @route   GET /posts/like/
// @desc    retrieve all the posts for one user
router.get('/like/:id', postsController.toggleLike);


// @route   POST /posts/comment
// @desc    add comment to a post;
router.post('/comment/:id', postsController.createComment);


// @route   DELETE /posts/comment/:id
// @desc    delete comment from a post;
router.delete('/comment/:post/:comment', postsController.deleteComment);


module.exports = router;
