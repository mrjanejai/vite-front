import { io } from 'socket.io-client';

// เชื่อมต่อ WebSocket server
const socket = io('http://localhost:8000', {
  transports: ['websocket'],
});

// Event handler
socket.on('connect', () => {
  console.log('WebSocket connected:', socket.id);
});

socket.on('disconnect', () => {
  console.log('WebSocket disconnected');
});

export default socket;
