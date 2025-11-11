import express from 'express';
import cors from 'cors';
import "dotenv/config";
import { clerkMiddleware } from '@clerk/express'

import connectDB from './config/mongodb.js';
import clerkWebhooks from './controllers/clerkWebhooks.js';

await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware())

app.use("api/clerk", clerkWebhooks)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('tototototototo');
});
