const express = require('express');
const path = require('path');
const app = express();

// Route root to your specific HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'stacktrace-formatter.html')); 
});

// Serve the rest of your static files normally
app.use(express.static(__dirname));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

module.exports = app;
