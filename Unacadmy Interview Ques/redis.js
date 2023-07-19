//redis connection 
const redis = require('redis');
// Create a new Redis client with custom configuration
const client = redis.createClient({
  host: 'your-hostname', // Replace with the actual hostname or IP address of your Redis server
  port: 6379, // Replace with the actual port number of your Redis server
});
// Handle connection events
client.on('connect', () => {
  console.log('Connected to Redis successfully');
  // Perform Redis operations here
  // Disconnect from Redis
  client.quit();
});
client.on('error', (error) => {
  console.error('Error connecting to Redis:', error);
});