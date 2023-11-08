const router = require('express').Router();
const {User, Posts }= require('../models');

router.get('/', async (req, res)=> {
    const dbPosts= await Posts.findAll();
    const posts = dbPosts.map((post) => post.get({plain: true}));
    res.render('homepage', {posts} );
});

router.get('/login', async (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

router.get('/createpost', (req, res) => {
  res.render('createpost');
});

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('*',async (req, res)=> {
  const dbPosts = await Posts.findAll();
  const posts = dbPosts.map((post) => post.get({plain: true}));
  res.render('homepage', {posts} );
})
module.exports = router;