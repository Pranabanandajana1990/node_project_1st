const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/Menu');

// POST route to add a MenuItem
router.post('/', async (req, res) => {
    try {
        const data = req.body

        // create a new Menu document using the Mongoose Model
        const newMenuItem = new MenuItem(data)

        // Save the newPerson to the database
        const response = await newMenuItem.save();
        console.log('Data saved...', response)
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// GET method to get the MenuItem
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Data fetched...');
        res.status(200).json(data);

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// GET Menu as per taste type
router.get('/:taste', async (req, res) => {
    try {
        const taste = req.params.taste; // extract the work typefrom the URL parameter
        if (taste == 'sweet' || taste == 'spicy' || taste == 'sour') {
            const response = await MenuItem.find({ taste: taste })
            console.log('reponse fetched...')
            res.status(200).json(response);
        } else {
            res.status(404).json({ error: 'Invalid taste type' });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

module.exports = router;
