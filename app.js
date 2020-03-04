const express = require('express');
const app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(require('./routes/index.js'))

app.listen(3006, () => {
    console.log('running port ... ')
})