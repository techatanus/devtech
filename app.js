const express = require('express');
const app = express();







app.set('view engine','ejs');

app.use(express.static('public'));
app.get('/index',(req,res)=>{
    res.render('./index');
});


app.listen(3008,()=>{
    console.log('access http://localhost:3008')
})