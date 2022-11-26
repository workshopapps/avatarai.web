// This is a simple express server intended to expose the dreambooth server
// It executes a script to train and return a response from dreambooth


const express = require('express');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json()

const app = express();

app.use(jsonParser);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to noxus. Our dreambooth server"
    })
});

app.post('/', (req, res) => {

    console.log(req.body)

    var exec = require('child_process').exec;

    const pathToTrainingScript = '/home/ubuntu/beginTraining.sh';

    exec(pathToTrainingScript, (error, stdout, stderr) => {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
            console.log('exec error: ' + error);

            res.status(400).json({
                message: `An error occcured ==> ${error.message}`
            })
        }
    });

    res.status(200).json({
        message: "Your images have begone training"
    })
});

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`)
})