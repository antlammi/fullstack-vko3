const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var morgan = require('morgan')



morgan.token('data', (req, res) => { 
    return `{"name": "${req.body.name}", "number": "${req.body.number}"}`
})
app.use(morgan(function (tokens, req, res) {
    if (tokens.method(req, res) === "POST"){
        return [
       
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['data'](req,res)
        ].join(' ')}
    else {
        return[
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')}
  }))
app.use(cors())
app.use(bodyParser.json())
let people = [
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

app.get('/info', (request, response ) => {
    response.send(
        `<div><p>Puhelinluettelossa ${people.length} henkilön tiedot <br/><br/>${new Date()}</p></div>`
        )
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = people.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})
app.post('/api/persons', (request, response) => {
    const body = request.body
    if (body.name === undefined || body.number === undefined){
        return response.status(400).json({
            error: 'content missing'
        })
    } 
    if (people.map(person => person.name).includes(body.name)){
        return response.status(400).json({
            error: 'name must be unique'
        })
    }
    const generateId = () => {
        min = Math.ceil(1)
        max = Math.floor(10000)
        return Math.floor(Math.random() * (max-min)) + min
    }
    const person = {
        id:generateId(),
        name:body.name,
        number:body.number
    }
    people = people.concat(person)
    response.json(person)
})
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    people = people.filter(person=> person.id !== id)

    response.status(204).end()
})
app.get('/', (request, response) => {
    response.send('Hello World!')
})
app.get('/api/persons', (request, response) => {
    response.json(people)
})
const PORT = process.env.PORT||3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

