import express, { Application } from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'

class Server {
  public express: Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
    this.express.use(cors())
    this.express.use(morgan('dev'))
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new Server().express
