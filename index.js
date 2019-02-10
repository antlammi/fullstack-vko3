const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
var morgan = require('morgan')


require('dotenv').config()
const Person = require('./models/person')
morgan.token('data', (req, res) => { 
    return `{"name": "${req.body.name}", "number": "${req.body.number}"}`
})
let people = []


app.use(express.static('build'))
app.use(bodyParser.json())
app.use(morgan(function (tokens, req, res) {
    if (tokens.method(req, res) === "POST"){
        return [
       
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens['data'](req,res)
        ].join(' ')
    } else {
        return[
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    }
  }))
app.use(cors())


app.get('/info', (request, response ) => {
    response.send(
        `<div><p>Puhelinluettelossa ${people.length} henkilön tiedot <br/><br/>${new Date()}</p></div>`
        )
})

app.get('/api/people/:id', (request, response, next) => {
    Person.findById(request.params.id).then(person => {
        if (person) {
            response.json(person.toJSON())
        } else {
            response.status(204).end()
        }
      }).catch(error => next(error))
        
})
app.post('/api/people', (request, response) => {
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

    const person = new Person({
        name:body.name,
        number:body.number
    })
    person.save().then(savedPerson=> {
        response.json(savedPerson.toJSON())
        
    })
    people = people.concat(person)
})
app.delete('/api/people/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
    .then(result => {
        response.status(204).end
    })
    .catch(error => next(error))
    
})
app.put('/api/people/:id', (request, response, next) => {
    const body = request.body

    const person = {
        name:body.name,
        number: body.number
    }
    Person.findByIdAndUpdate(request.params.id, person, { new: true})
        .then(updatedPerson=> {
            response.json(updatedPerson.toJSON())
        }).catch(error => next(error))
})
app.get('/', (request, response) => {
    response.send('Hello World!')
})
app.get('/api/people', (request, response) => {
    Person.find({}).then(people => {
        response.json(people.map(people => people.toJSON()))
    })
})
const unknownEndpoint =(request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}
app.use(unknownEndpoint)
const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind == 'ObjectId'){
        return response.status(400).send({error:'malformatted id'})
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

