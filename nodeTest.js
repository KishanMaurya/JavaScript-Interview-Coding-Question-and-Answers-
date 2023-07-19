const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Middleware to parse JSON request body
app.use(bodyParser.json());

// Database initialization
let customerRequests = [];
let expertTasks = [];

// API to raise a request by the customer
app.post('/customer/request', (req, res) => {
  const { customerId, taskDetails, deadline } = req.body;

  // Generate a unique request ID
  const requestId = uuidv4();

  // Add the request to the database
  customerRequests.push({
    requestId,
    customerId,
    taskDetails,
    deadline,
    expertId: null,
  });

  res.json({ requestId });
});

// API to get the status of a request by the customer
app.get('/customer/request/:requestId', (req, res) => {
  const { requestId } = req.params;

  // Find the request in the database
  const request = customerRequests.find(r => r.requestId === requestId);

  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }

  res.json(request);
});

// API to get all requests that are not yet assigned to an expert
app.get('/expert/request', (req, res) => {
  const unassignedRequests = customerRequests.filter(r => r.expertId === null);

  res.json(unassignedRequests);
});

// API to assign a request to an expert
app.put('/expert/request/:requestId', (req, res) => {
  const { requestId } = req.params;
  const { expertId, timeTaken } = req.body;

  // Find the request in the database
  const request = customerRequests.find(r => r.requestId === requestId);

  if (!request) {
    return res.status(404).json({ error: 'Request not found' });
  }

  // Update the request in the database
  request.expertId = expertId;

  // Add a new task to the expert task database
  const taskId = uuidv4();
  expertTasks.push({
    taskId,
    requestId,
    expertId,
    taskDetails: request.taskDetails,
    startTime: new Date(),
    endTime: null,
    timeTaken: null,
  });

  res.json({ taskId });
});

// API to get all tasks assigned to an expert and not yet completed
app.get('/expert/queue/:expertId', (req, res) => {
  const { expertId } = req.params;

  const tasks = expertTasks.filter(t => t.expertId === expertId && t.endTime === null);

  res.json(tasks);
});

// API to mark a task as completed by an expert
app.put('/expert/queue/:taskId', (req, res) => {
  const { taskId } = req.params;
  const { timeTaken } = req.body;

  // Find the task in the database
  const task = expertTasks.find(t => t.taskId === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Update the task in the database
  task.endTime = new Date();
  task.timeTaken = timeTaken;

  res.json({ success: true });
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});