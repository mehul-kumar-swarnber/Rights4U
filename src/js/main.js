const express = require('express');
const path = require('path'); // Import path module
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/index.html')); // Correctly specify file path
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
