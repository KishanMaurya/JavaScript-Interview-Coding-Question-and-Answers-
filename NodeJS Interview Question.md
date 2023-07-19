# Event Loop
Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
The event loop allows us to use callbacks and promises.
The event loop executes the tasks starting from the oldest first.

# callback
"I will call back later!"

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished 

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);


# How can you debug a Node.js application?

vs code provides js debug tool
we can use it 
and also npm provide package for handling the  debug
npm install -g node-inspector


# What are Streams in Node.js and how can they be used?

streams is process(read and write) data piece(chunks) without completing the
whole read or write operation, and therefore without keeping all the data in 
memory.
There are four types of streams => readable streams, writable streams, duplex
and transform streams.

# How does Node.js handle multi-threading and concurrency?

Node. js runs JavaScript code in a single thread, which means that your code can only do one task at a time. However, Node. js itself is multithreaded and provides hidden threads through the libuv library, which handles I/O operations like reading files from a disk or network requests.

# What is clustering in Node.js and how can it be used to improve performance?

With the help of clustering, we can create multiple node clusters within the same Node.js application with the help of Node’s cluster module.

The main advantage of using this approach is we can easily scale up our application execution by utilising multiple processor cores. One more advantage is clusters run on the same port — therefore all the request will be routed through a single port.

Clustering is a great way to optimize your Node.js app's overall performance

scale an application execution on multiple processor cores by creating worker processes


# How does Node.js handle asynchronous programming?
NodeJS is an asynchronous event-driven JavaScript runtime environment designed to build scalable network applications. Asynchronous here refers to all those functions in JavaScript that are processed in the background without blocking any other request