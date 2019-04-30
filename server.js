var express = require('express');
var path = require('path');

var app = express();
var port = process.env.port || 3005;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/reviews/*', (req, res) => {
    axios[req.method.toLowerCase()](`http://localhost:3004${req.originalUrl}`)
    .then(({data}) => {
        res.send(data)})
    .catch(err => res.statusCode(500).send(err))
});

app.use('*', express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
	console.log(`Express proxy server running at http://localhost:${port}`);
});