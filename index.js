import express from 'express'
const app = express()
app.use(express.json())
import { users } from './routes/routesUsers.js'
import { orders } from './routes/routesOrders.js'
import { products } from './routes/routesProducts.js'

app.use(users)
app.use(orders)
app.use(products)



app.listen(3000)