# Blogpost-API-with-Get-and-Post-endpoints-Assignment-
Here is the updated, simple README.md file for your assignment project. It includes the simple validation logic we just added to block pure numbers while allowing strings like "Caffe - 23".
You can copy this text directly into your README.md file:
------------------------------
## Blog Post API Management System
A simple Node.js and Express application designed to handle decoupled API workflows. Server 1 handles retrieving blog posts via GET routes under try...catch safety blocks. Server 2 manages new incoming blog data via POST requests, using Joi schema validation alongside native JavaScript checks to keep your data accurate.
------------------------------
## Technical Architecture & Design

| Component | Responsibility | Tech Stack / Tooling |
|---|---|---|
| Main Application Hub (mainapp.js) | Sets up the Express app, handles JSON parsing, and connects the routers. Includes a global catch-all 404 handler. | Node.js, Express |
| GET Request Router (server1.js) | Serves static blog post endpoints securely inside try...catch blocks. | Express Router |
| POST Request Router (server2.js) | Validates incoming data using a Joi Schema and extra JavaScript type checking before confirmation. | Express Router, Joi Validation |

------------------------------
## File Structure

├── server1.js      # GET Request handlers (Mock blog data retrieval)
├── server2.js      # POST Request handlers (Joi validation & simple number block)
├── mainapp.js      # Main entry point & Global 404 fallback message
├── package.json    # Project dependencies
└── README.md       # Project Documentation

------------------------------
## Installation & Setup

   1. Install Dependencies
   Run this command in your project terminal to install Express and Joi:
   
   npm install express joi
   
   2. Start the Server
   Run the main application file:
   
   node mainapp.js
   
   Console output: Server is running on port 3000...

------------------------------
## API Endpoints## 1. GET Requests (server1.js)
Used to fetch individual blog posts.

* Get Blog Post #1
* URL: /posts/id/1
   * Method: GET
   * Success Response (200 OK):
   
   {
     "id": 1,
     "title": "My First Blog Post",
     "content": {
       "Topic": "Journey to the Mountains",
       "Review": "This is a great post about my adventure in the mountains!"
     },
     "author": "Md. Humaian Kabir",
     "CreatedAt": "2026-10-10T06:29:00.000Z"
   }
   
   * Get Blog Post #2
* URL: /posts/id/2
   * Method: GET
* Get Blog Post #3
* URL: /posts/id/3
   * Method: GET

------------------------------
## 2. POST Requests (server2.js)
Used to submit a new blog post. The validation layer enforces strict text constraints.

* Create a New Blog Entry
* URL: /posts/New_Added_Blogs/:id
   * Method: POST
   * Headers: Content-Type: application/json
   * Body Example:
   
   {
     "title": "Caffe - 23",
     "content": "Exploring the beautiful cafe culture and trying out local coffee beans.",
     "author": "Md. Humaian Kabir",
     "CreatedAt": "2026-10-10"
   }
   
   * Success Response (201 Created):
   
   {
     "message": "Blog post created successfully",
     "id": "1",
     "data": {
       "title": "Caffe - 23",
       "content": "Exploring the beautiful cafe culture and trying out local coffee beans.",
       "author": "Md. Humaian Kabir",
       "CreatedAt": "2026-10-10"
     }
   }
   
   
------------------------------
## Validation Rules (Title Field)
The title field goes through a two-step validation check to ensure high data quality:

| Validation Layer | Allowed Title Inputs | Blocked Title Inputs | Error Response |
|---|---|---|---|
| Joi Validation | "Caffe - 23", "My First Post" | "" (Empty), "Hi" (Too short) | { "error": "Title must be at least 3 characters long" } |
| JavaScript Check | "Caffe - 23", "Express 4" | 3432, "3432" (Pure numbers) | { "error": "Title cannot be a pure number" } |

------------------------------
## Error Handling Boundary (404 Failures)
If a user hits an unhandled or incorrect URL (like /posts/id/99 or a wrong route directory), the global 404 middleware in mainapp.js catches it and returns a clean, uniform JSON response instead of a broken HTML layout:

{
  "success": false,
  "error": "404 Not Found",
  "message": "The requested page or route '/posts/invalid-route' does not exist on this server."
}