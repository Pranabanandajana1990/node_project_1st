// console.log("hello Pranab")

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('generating.txt', 'Hi ' + user.username + '!!\n', () => { console.log('file is created') });

// const nodeData = require('./node.js')

// var age = nodeData.age;
// var result = nodeData.addFun(age, 10)
// console.log(result)

const express = require('express')
const app = express()
const db = require('./db')
const PORT = process.env.PORT || 3000;

// bodyparser take the body object and act as an middleware to process it
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// app.listen(3000)

app.get('/', function (req, res) {
    res.send('Welcom to the server')
})

const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemsRoutes');
app.use('/person', personRoutes)
app.use('/menu', menuItemRoutes)

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

// app.get('/chicken', function (req, res) {
//     res.send('love **chicken**')
// })

// app.post('/items', function (req, res) {
//     res.send('your data is saved!!')
// })

// app.get('/details', function (req, res) {
//     const my_details = {
//         name: 'Pranab',
//         age: '29',
//         address: 'BH-193',
//         phone: '222333',
//         married: true
//     }
//     res.send(my_details)
// })

