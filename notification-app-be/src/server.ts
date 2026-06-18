import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import notificationRoutes from './routes/notifications.js';
import { Log, setAuthToken } from 'logging-middleware';

setAuthToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYXJpcGVsbGljaG9kaGl0aGFAZ21haWwuY29tIiwiZXhwIjoxNzgxNzcwMTg0LCJpYXQiOjE3ODE3NjkyODQsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI0MzU1M2M1ZS01MmI4LTQ5ZjItYjAyOS1kZTFiZGNlYWM0YjQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJtYXJpcGVsbGkgY2hvZGhpdGhhIiwic3ViIjoiZjM1MDQ5ZTQtOGQzYS00MGYzLThjNmEtMTViMDhjYjNhY2M5In0sImVtYWlsIjoibWFyaXBlbGxpY2hvZGhpdGhhQGdtYWlsLmNvbSIsIm5hbWUiOiJtYXJpcGVsbGkgY2hvZGhpdGhhIiwicm9sbE5vIjoiMjMwM2E1MjAzOSIsImFjY2Vzc0NvZGUiOiJiRHJlQXEiLCJjbGllbnRJRCI6ImYzNTA0OWU0LThkM2EtNDBmMy04YzZhLTE1YjA4Y2IzYWNjOSIsImNsaWVudFNlY3JldCI6InBIUFNZQkJLaFF3bVljUGsifQ.7did9F1efStUiUt-xM8Siulb1PU7PYg7m3t4sgmY5pE');

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
