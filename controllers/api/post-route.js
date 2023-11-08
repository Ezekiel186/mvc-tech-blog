const router = require('express').Router();
const { Posts } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const user_id = req.session.user_id;

    const postData = await Posts.create({
      title: title,
      description: description,
      user_id: user_id,
    });

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const postId = req.params.id;
    const user_id = req.session.user_id;

    const post = await Posts.findOne({
      where: {
        id: postId,
        user_id: user_id,
      },
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found or you do not have permission to delete it.' });
    }

    await Posts.destroy({
      where: {
        id: postId,
      },
    });

    res.status(204).send(); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the post.' });
  }
});

module.exports = router;