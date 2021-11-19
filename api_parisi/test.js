const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql2');

app.use(express.json());
const connection = mysql.createConnection({ 
    host: 'localhost',
    database: 'parisi',
    user: 'root',
    password : '1598753'
});
app.set ('port', 3000);
app.set('view engine', 'ejs');
app.use(morgan('dev'));
var someVar = [];
function setValue(value) {
    someVar = value;
    console.log(someVar);
  }
connection.query( "select * from parisi;", function(err,rows) {
        if (err) {
            throw err;           
        }
        else{
            setValue(rows);
        }
    }
);

app.get('/', (req, res) => {
    const data = [{name: 'hola'},{name: 'chao'},{name: 'juan'}];
    console.log("Aqui esta la solicitud del /")
    res.render('index.ejs', {datos: someVar});
});

app.use(express.static('public'));

app.listen(app.get('port'), ()=>{
    console.log('Server en el puerto ',app.get('port'));
});