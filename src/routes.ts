import { Router } from 'express'

import ShawController from './app/controllers/ShawController'

const routes = Router()

routes.get('/', ShawController.index)
routes.post('/', ShawController.dispatchMessage)

export default routes
