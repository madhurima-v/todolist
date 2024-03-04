import express from 'express'
import bodyParser from 'body-parser'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname+'\\public'))

app.use(bodyParser.urlencoded({ extended: true }))

var count = 0;
var a = [];
var b = [];

app.get('/', function(req,res){
    res.render('index.ejs',{
        'count': count,
        'fname': a,
        'lname': b
    })
})

app.post('/', function(req,res){

    count++;

    a.push(req.body.fname)
    b.push(req.body.lname)
   

    res.render('index.ejs', {
        'count': count,
        'fname': a,
        'lname': b
      })
})


app.listen(4000, function(req,res){
    console.log('server started')
})