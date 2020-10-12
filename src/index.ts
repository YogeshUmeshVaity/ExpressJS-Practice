import express, { NextFunction, Request, Response } from 'express'
const app = express()

app.use('/', (request: Request, response: Response, next: NextFunction) => {
  console.log('Welcome')
})

app.listen(4000)
