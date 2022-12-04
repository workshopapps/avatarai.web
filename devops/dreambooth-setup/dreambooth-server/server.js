// This is a simple express server intended to expose the dreambooth server
// It executes a script to train and return a response from dreambooth


const express = require('express');
const bodyParser = require('body-parser');

const uuid = require('uuid');

var jsonParser = bodyParser.json()

const app = express();

app.use(jsonParser);

const PORT = 8000;

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Welcome to noxus. Our dreambooth server"
    })
});

app.post('/', (req, res) => {

    console.log(req.body)

    var exec = require('child_process').exec;

    const pathToTrainingScript = '/home/ubuntu/beginTraining.sh';

    const {email, img_class} = req.body;

    const uid = uuid.v4().toString().split('-')[0];

    exec(`${pathToTrainingScript} ${email} ${img_class} ${uid}`, (error, stdout, stderr) => {
        console.log('stdout: \n' + stdout);
        console.log('stderr: ' + stderr);
        if (stderr !== null) {
            console.log(stderr)

            return res.status(500).json({
                message: `An error occcured while training your images`
            })
        }
        if (error !== null) {
            console.log('exec error: ' + error);

            return res.status(400).json({
                message: `An error occcured ==> ${error.message}`
            })
        }
    });

    return res.status(200).json({
        message: "Your images have begone training"
    })
});

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`)
})
