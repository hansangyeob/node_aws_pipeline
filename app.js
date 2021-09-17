const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to the homepage");
    const a = 1
    const b = 2
    res.send(a+b);
        res.send('yo');
});

app.get('/add', function(req, res) {
    var a = Number(req.query.a);
    var b = Number(req.query.b)
    if (!isNaN(a) && !isNaN(b)) {
        res.send((a + b).toString())
    } else {
        res.send("a, b must be number")
    }
});

app.get('/process',function(req,res){
    var myStr = req.query
    var input = myStr.replace(/  +/g, ' ').trim();
    res.send(input.toString());
});


const port = process.env.port || 3000;
app.listen(port,()=> {
    console.log('listening to server.')
});
