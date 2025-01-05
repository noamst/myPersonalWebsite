const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


let movies = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// קבלת כל המשתמשים
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// הוספת משתמש חדש
app.post('/api/movies', (req, res) => {
  const movie = req.body;
  movie.id = movies.length + 1;
  movies.push(movie);
  res.status(201).json(movie);
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});