const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Auth backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
