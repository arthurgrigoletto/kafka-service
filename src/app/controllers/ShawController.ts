import { Request, Response } from 'express'

class ShawController {
  public index (req: Request, res: Response): Response {
    return res.json({ status: 'ok' })
  }

  public dispatchMessage (req: Request, res: Response): Response {
    return res.json({ msg: 'The message dispatched successfully' })
  }
}

export default new ShawController()
