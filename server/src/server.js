import express from 'express';
import {CONNECT_DB} from './config/mongodb'

const START_SERVER = () => {
    const app = express()

    const hostname = 'localhost'
    const port = 1000

    app.get('/', (req, res) => {
        res.end('Loading...')
    })

    app.listen(port, hostname, () => {
        console.log('Server running at http://${ hostname }:${ port }/');
    })
}

CONNECT_DB()
.then(() => console.log('Connected to MongoDB !'))
.then(() => START_SERVER)
.catch(error => {
    console.log(error)
    process.exit(0)
})