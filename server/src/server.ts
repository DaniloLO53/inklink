import http from 'http';
import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.API_PORT;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server running at port ${PORT}`));
