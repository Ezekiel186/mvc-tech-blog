const router = require('express').Router();
const userRoute = require('./user-routes');
const postRoute = require('./post-route');
const commentroute = require('./comment-route');

router.use('/users', userRoute);
router.use('/posts', postRoute);
router.use('/comments', commentroute);

module.exports = router;
