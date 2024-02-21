import express from 'express'
import {pool} from './db.js'
import employeesRoutes from './routes/employees.route.js'
import indexRoutes from './routes/index.route.js'

const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api', employeesRoutes)
app.listen(3000)