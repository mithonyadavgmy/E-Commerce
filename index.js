const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname,'/dist/ecommerce-store')));

app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname,'/dist/ecommerce-store/index.html'));
});

app.listen(3000, () => {
    // console.log("Node serve is running");
});