const mongoose = require(`mongoose`);

// define the mongodb connection URL
// const mongoURL = 'mongodb://localhost:27017/mydb1' // we can mydatabasepranab with any other database name
const mongoURL = 'mongodb://127.0.0.1:27017/mydb1'; // Use IPv4 instead of 'localhost'

// setup MongoDB connection
mongoose.connect(mongoURL)
    .then(() => console.log('Initial connection established.'))
    .catch((err) => console.error('Initial connection error:', err));

// get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log("connected...")
})

db.on('error', (err) => {
    console.log("connection error...", err)
})

db.on('disconnected', () => {
    console.log("disconnected...")
})

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB disconnected on app termination.');
    process.exit(0);
});

// export the Database connection
module.exports = db;