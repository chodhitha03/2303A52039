import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import notificationRoutes from './routes/notifications.js';
import { Log } from 'logging-middleware';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Log incoming requests
app.use((req, res, next) => {
    Log('backend', 'info', 'route', `Received ${req.method} request to ${req.url}`);
    next();
});

app.use('/api/notifications', notificationRoutes);

app.listen(PORT, () => {
    Log('backend', 'info', 'route', `Server is running on port ${PORT}`);
});
