import server from './server'

const port = process.env.PORT || 3333

server.listen(port, () => console.log(`Server is running on port ${port}`))
