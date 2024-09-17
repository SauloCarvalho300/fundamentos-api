import { log } from 'console'
import express from 'express'

const app = express()

// http:localhost:3333/
app.get('/', (request, response) => {  
  return response.send("Seja Bem vindo a minha API!")
})

// http:localhost:3333/techs
app.get('/techs', (request, response) => {
  return response.send(['HTML', 'CSS', 'JavaScript', 'Node', 'SQL'])
})

app.get('/CTECH', (request, response) => {
  return response.send("Os melhores estão aqui")
})

// Executa a API em um servidor node na porta 3333
app.listen(3333)