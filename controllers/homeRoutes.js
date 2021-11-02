const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const checkAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try{
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });

        const posts = dbPostData.map((e) => 
            e.get({plain: true})
        );
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login')
})

router.get('/dashboard', (req, res) => {
    if (req.session.loggedIn) {
        res.render('dashboard')
        return
    } else res.render('login')
})


router.get('/comment', (req, res) => {
    if (req.session.loggedIn) {
        res.render('comment')
        return
    } else res.render('login')
})

router.post('/comment', (req, res) =>{
        try {
          const dbCommentData = await Comment.create({
            creator: req.body.creator,
            content: req.body.content,
            createdOn: req.body.createdOn
          });
          res.status(200).json(dbCommentData);
      
          // Set up sessions with a 'loggedIn' variable set to `true`

        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      });

module.exports = router;