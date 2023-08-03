import { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { ConnectOptions } from 'mongoose'; // Correct import for ConnectOptions
import authRoutes from './routes/authRoutes';
import clubsRoutes from './routes/clubsRoutes';
import eventsRoutes from './routes/eventsRoutes';

const app: Express = express();
const port = 8080; // Change this as per your requirement

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
const dbOptions: ConnectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost/clubs_portal_db', dbOptions);
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB database.');
});

// Routes
app.use('/auth', authRoutes);
app.use('/clubs', clubsRoutes);
app.use('/events', eventsRoutes);

// Index route
app.get('/', (req, res) => {
  res.json({ success: true });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
