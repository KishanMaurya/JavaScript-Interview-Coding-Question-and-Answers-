const http = require('http')
const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.writeHead(200, { 'contentType' : 'json'})
        res.end("hello this is the home page")
    }
})

server.listen(8000,()=>{
    console.log('server started ')
})


//MongoDb Connection 
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/mydatabase';
// Connect to MongoDB
mongoose.connect(url, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
    console.log('Connected to MongoDB successfully');
    // Disable strict mode for queries
    mongoose.set("strictQuery", false);
    mongoose.disconnect();
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});



  