// This server is handling the post requests and sending the response to the client

const express = require('express');
const router = express.Router();
const Joi = require('joi');


class Blogpost {
    constructor({ title, content, author, CreatedAt }) {
        this.title = title;
        this.content = content;
        this.author = author;
        this.CreatedAt = new Date(CreatedAt);
    }
}

const blogPost_schema = Joi.object({
    title: Joi.string().min(3).max(50).required().messages({
        'string.base': 'Title must be a text string',
        'string.empty': 'Title cannot be empty',
        'string.min': 'Title must be at least 3 characters long',
        'string.max': 'Title cannot exceed 50 characters'
    }).custom((value, helpers) => {
        // If the title is just a string of pure digits, reject it
        if (/^\d+$/.test(value.trim())) {
            return helpers.message('Title cannot be a pure number');
        }
        return value;
    }),
    content: Joi.string().min(10).max(500).required().messages({
        'string.base': 'Content must be a text string',
        'string.empty': 'Content cannot be empty',
        'string.min': 'Content must be at least 10 characters long',
        'string.max': 'Content cannot exceed 500 characters'
    }),
    author: Joi.string().required().pattern(/^[a-zA-Z\s]+$/).messages({
        'string.base': 'Author must be a string',
        'string.empty': 'Author cannot be empty',
        'string.pattern.base': 'Author can only contain letters and spaces'
    }),
    CreatedAt: Joi.date().required().messages({
        'date.base': 'Created At must be a valid date'
    })
})

router.post('/posts/New_Added_Blogs/:id', async (req, res) => {
    const { error } = blogPost_schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: error.details[0].message
        })
    }

    const data = new Blogpost(req.body);
    res.status(201).json({
        message: "Blog post created successfully",
        id: req.params.id,
        data: data
    })
})

module.exports = router;