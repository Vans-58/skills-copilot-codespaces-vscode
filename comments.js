// Create web server
// Load the express module
const express = require('express');
const app = express();

// Load the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Load the comments module
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// Get comment by id
app.get('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.getComment(id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Add comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  const comment = comments.addComment(newComment);
  res.json(comment);
});

// Update comment
app.put('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedComment = req.body;
  const comment = comments.updateComment(id, updatedComment);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Delete comment
app.delete('/comments/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const comment = comments.deleteComment(id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).send('Comment not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});