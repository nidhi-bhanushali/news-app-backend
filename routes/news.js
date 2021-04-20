const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const News = require('../models/News')

// @route  GET api/contacts
// @desc   Get all users saved news
// @access Private
router.get('/', auth, async (req , res) => {
    try {
        const news = await News.find({ user: req.user.id })
                                .sort({publishedAt: -1});
                                res.json(news)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/contacts
// @desc   Save new news
// @access Private
router.post('/', [ 
    auth, 
    [
        check('title', 'Title is required')
        .not()
        .isEmpty()
    ]
 ],
  async (req , res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const { sourceName , author , title , 
            description , urlToSource , 
            urlToImage, publishedAt, content } = req.body;

    try {
        const newArticle = new News({
            sourceName ,
            author ,
            title , 
            description ,
            urlToSource , 
            urlToImage, 
            publishedAt, 
            content,
            user: req.user.id
        });

        const news = await newArticle.save();

        res.json(news);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error')
    }
});

// @route  DELETE api/contacts
// @desc   Delete news
// @access Private
router.delete('/:id', (req , res) => {
    res.send('Delete a saved news article');
});

module.exports = router;