import express from 'express';

// db connection
import './db/connection.js';

const app = express();

// middlewares
app.use(express.json());

// testing port
app.get('/', (_, res) => {
  res.send('Welcome to the Express server!');
});

// routes
import workoutRoutes from './routes/workoutRoutes.js';
app.use('/api/workouts', workoutRoutes);


// server listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});