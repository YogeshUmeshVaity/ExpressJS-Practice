import express, { NextFunction, Request, Response } from 'express'
const app = express()

/**
 * Request: http://localhost:4000/book/author
 * Output:
 * use: /book
 * use: /book/author
 * all: /book/author
 */
app.use('/book', (request: Request, response: Response, next: NextFunction) => {
  console.log('use: /book')
  next()
})

app.use('/book/author', (request: Request, response: Response, next: NextFunction) => {
  console.log('use: /book/author')
  next()
})

app.all('/book', (request: Request, response: Response, next: NextFunction) => {
  console.log('all: /book')
  next()
})

app.all('/book/author', (request: Request, response: Response, next: NextFunction) => {
  console.log('all: /book/author')
  next()
})

app.listen(4000)
