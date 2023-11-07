const router = require('express').Router();

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

module.exports = router;