const router = require('express').Router();
const { Post } = require('../../models');

router.post('/posts', async(req, res) =>{
    try{
        const dbPostData = await Post.create({
            creator: req.session.name,
            content: req.body.content,
            title: req.body.title,

        });
        res.status(200).json(dbPostData);
    
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;