const express = require('express');
const app = express();


app.use(express.json());

// Importing the routers from server1.js and server2.js
const getRouter = require('./server1');
const postRouter = require('./server2');

// Mounting the routers to the main application
app.use(getRouter);
app.use(postRouter);

// Handling 404 errors for undefined routes
app.use((req, res) => {
    return res.status(404).json({
        success: false,
        error: "404 Not Found",
        message: `The requested page or route '${req.originalUrl}' does not exist on this server.`
    })
});




app.listen(3000, () => {
    console.log("Server is running on port 3000...");
})
