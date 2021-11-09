const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/comments', async(req, res) =>{
  console.log('======================================================')
    console.log(req.body.content + 'hey')
    console.log('====================================================')
        try {
          const dbCommentData = await Comment.create({
            creator: req.session.name,
            content: req.body.content
          });
          res.status(200).json(dbCommentData);
      


        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

module.exports = router;