const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/abc/:a', (req, res) => {
    const{a} = req.params;
    const{b} = req.query;
    const sum = parseInt(a) + parseInt(b);
    res.send("MethodPost :" + sum);
  });

app.get("/getData", (req, res) => {
    res.json({
        success: true,
        message: "Data fetched",
        myData: data,
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


const data = [
    {
        id: 1,
        name: "a",
    },
    {
        id: 2,
        name: "b",
    },
    {
        id: 3,
        name: "c",
    },
    {
        id: 4,
        name: "d",
    },
]