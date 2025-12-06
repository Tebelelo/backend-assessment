import express from 'express';
import dotenv from "dotenv"
import cors from 'cors';
import studentRoutes from './routes/students';

dotenv.config()

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


export default app;
