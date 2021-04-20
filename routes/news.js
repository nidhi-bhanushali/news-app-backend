const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users saved news
// @access Private
router.get('/', (req , res) => {
    res.send('Get all saved news');
});

// @route  POST api/contacts
// @desc   Save new news
// @access Private
router.post('/', (req , res) => {
    res.send('Save news');
});

// @route  DELETE api/contacts
// @desc   Delete news
// @access Private
router.delete('/:id', (req , res) => {
    res.send('Delete a saved news article');
});

module.exports = router;