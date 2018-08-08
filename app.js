const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World from Jps Express Test App Uno!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
