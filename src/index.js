import express from 'express'
import {pool} from './db.js'
import employeesRoutes from './routes/employees.route.js'
import indexRoutes from './routes/index.route.js'

const app = express()


console.log("ejecutandose en el puerto 3000")


app.use(indexRoutes)
app.use(employeesRoutes)
app.listen(3000)