import express from 'express'

const app = express()
app.listen(3000)

console.log("ejecutandose en el puerto 3000")

app.get('/empleados', (req, res) => res.send('obteniendo empleados'))
app.post('/empleados', (req, res) => res.send('creando empleados'))
app.put('/empleados', (req, res) => res.send('actualizando empleados'))
app.delete('/empleados', (req, res) => res.send('eliminando empleados'))
