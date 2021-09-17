const express = require('express');
const app = express();


app.get('/',(req,res)=>{
    res.send("Welcome to the homepage");
});



app.get('/process',function(req,res){
    var input = req.query.myStr1;
    res.send(input);
});

const port = process.env.port || 3000;
app.listen(port,()=> {
    console.log('listening to server.')
});
