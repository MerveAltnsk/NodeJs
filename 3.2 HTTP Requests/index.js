import express from 'express';

const app = express(); 
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello');
});



app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1> <p>My name is Merve</p> <a href="/">Home</a>');
});



app.get('/contact', (req, res) => {
    res.send('<h1>Contact Me</h1> <p>Phone: 123456789</p> <a href="/about">about</a>');
});



app.listen(port, () => {
    console.log('Server is running on port ' + port);
});