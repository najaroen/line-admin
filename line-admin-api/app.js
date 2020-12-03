const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();

const lineRouter = require('./router/line.router');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', lineRouter);
app.use((err, req, res, next)=> {
    if(!err) {
        res.status(err.status ?err.status:500 )
            .json({
                message:'error',
                status:500,
                statusText:'error'
            })
    } else {
        res.status(err.status ?err.status:500 )
            .json({
                message:err.message,
                status:500,
                statusText:'error'
            })
    }
});
app.use((req, res, next) => {
    res.status(404)
        .json({
            message:'path not found',
            status:404,
            statusText:'error'
        })
});

app.listen(process.env.PORT || 3001, () => {
    console.log('running')
});

module.exports = app;
