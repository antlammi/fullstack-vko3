const express = require('express')
const app = express()
//const bodyParser = require('body-parser')

const PORT = 3001

const notes = [
    {
        id:1,
        name:"Arto Hellas",
        number:"045-1236543"
    },
    {
        id: 2,
        name:"Arto Järvinen",
        number:"045-2143123"
    },
    {
        id:3,
        name:"Lea Kutvonen",
        number:"040-4323234"
    },
    {
        id:4,
        name:"Martti Tienari",
        number:"09-784232"
    }
]
app.get('/', (request, response) => {
    response.send('Hello World!')
})
app.get('/api/persons', (request, response) => {
    response.json(notes)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})