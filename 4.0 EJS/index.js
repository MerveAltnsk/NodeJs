import express from 'express';

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {

    const today = new Date();
    const day = today.getDay();

    let Type = 'a weekday';
    let advice = 'Make the most of your day!';
    

    if (day === 0 || day === 6) {
        Type = 'a weekend';
        advice = 'it is time to have fun';
    }


    res.render('index.ejs', { 
        dayType: Type,
        advice: advice, 
    });
});



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});