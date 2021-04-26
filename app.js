var express = require('express');
var app = express();
const colA = 10, colB = 20;

app.get('/downloadXl', (req, res) => {
    res.attachment('fileTest.xls');
    var header = "Column A" + "\t" + "Column B" + "\t" + "Column C" + "\n";
    var row = colA + "\t" + colB + "\t" + (colA + colB) + "\n";

    var data = header + row;
    return res.send(data);
})

app.get('/', (req, res) => {
    res.send('welcome to node js test !!!');
})


// Url = http://localhost:1200/

app.listen(1200, "localhost", () => {
    console.log(`Server started`);
})

