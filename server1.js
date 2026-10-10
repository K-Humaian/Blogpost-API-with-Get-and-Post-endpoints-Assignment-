// Server 1 is designed for handling GET requests 



const express = require('express');
const router = express.Router();


// Route to get all blog posts

router.get('/posts/id/1', async (req, res) => {
    try {
        const date = new Date();
        const postnfo = {
            id: 1,
            title: "My First Blog Post",
            content: {
                "Topic": "Journey to the Mountains",
                "Review": "This is a great post about my adventure in the mountains!"
            },
            author: "Md. Humaian Kabir",
            CreatedAt: date
        }

        res.status(200).json(postnfo);

    } catch (error) {
        res.status(404).json({
            success: false,
            error: "404 Not Found",
            message: `The requested page or route '${req.originalUrl}' does not exist on this server.`
        })
    }
})

router.get('/posts/id/2', async (req, res) => {
    try {
        const date = new Date();
        const postnfo = {
            id: 2,
            title: "My Second Blog Post",
            content: {
                "Topic": "My Hometown",
                "Review": "This is a great post about my hometown and its culture!"
            },
            author: "Eham",
            CreatedAt: date
        }

        res.status(200).json(postnfo);

    } catch (error) {
        res.status(404).json({
            success: false,
            error: "404 Not Found",
            message: `The requested page or route '${req.originalUrl}' does not exist on this server.`
        })
    }
})
router.get('/posts/id/3', async (req, res) => {
    try {
        const date = new Date();
        const postnfo = {
            id: 3,
            title: "My Third Blog Post",
            content: {
                "Topic": "A Day in the Life of a Software Developer",
                "Review": "This is a great post about the daily routine and challenges faced by software developers."
            },
            author: "Moumita",
            CreatedAt: date
        }

        res.status(200).json(postnfo);

    } catch (error) {
        res.status(404).json({
            success: false,
            error: "404 Not Found",
            message: `The requested page or route '${req.originalUrl}' does not exist on this server.`
        })
    }
})
module.exports = router;