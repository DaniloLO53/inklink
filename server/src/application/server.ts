import http from 'http';
import { app } from './app';

const server = http.createServer(app);

const PORT = process.env.API_PORT || 5000;

server.listen(PORT, () => console.log(`Listening at port ${PORT}`));
