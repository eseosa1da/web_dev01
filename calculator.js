const express = require("express");
// const bodyParser = require("body-parser");

const app = express();

// app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({extended: true}));

app.get('/', function(req, res){

    
    res.sendFile(__dirname+"/index.html");

});



app.post('/', function(req, res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;

    res.send("The result is " + result);

})


// BMI Calculator

app.get('/bmicalculator', function(req, res){

    
    res.sendFile(__dirname+"/bmiCalculator.html");
    console.log(__dirname+"/bmiCalculator.html");

});


app.post('/bmicalculator', function(req, res){

    var wt = Number(req.body.weight);
    var ht = Number(req.body.height);
    var bmi = wt / (ht * ht);
    
        res.send("Your BMI is " + bmi);
    
    });


app.listen(4000, function(){
    console.log ("Server started on port 4000")
});