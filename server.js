import { createServer } from 'http';
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();

const server = createServer(app);
const PORT = process.env.PORT || 9000;
server.listen(PORT);

console.log(`Server Listening on  http://localhost:${PORT} 🚀`);