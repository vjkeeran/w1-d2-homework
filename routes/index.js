var express = require('express');
var router = express.Router();

// Homepage
router.get('/', function(req, res, next) {
  res.render('index'); // renders views/index.ejs
});

// About
router.get('/about', function(req, res, next) {
  res.render('about');
});

// Example dynamic post route
router.get('/post/:id', function(req, res, next) {
  const postId = req.params.id;
  // In a real app, fetch post data. For now, mock:
  const posts = {
    '1': { title: 'Spicy Ramen', content: 'Delicious noodles with heat.' },
    '2': { title: 'Avocado Toast', content: 'Healthy and tasty.' }
  };
  const post = posts[postId];
  if (!post) {
    return res.status(404).send('Post not found');
  }
  res.render('post', { post });
});

module.exports = router;
