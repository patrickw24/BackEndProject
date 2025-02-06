import express from 'express'
export const orders = express()
orders.use(express.json())
import { orderDelete, orderGet, orderGetID, orderPost, orderPut,deleteDetails,getDetails,putDetails,postDetails } from '../controllers/ordersController.js'

orders.get('/orders', orderGet)

orders.get('/orders/:id', orderGetID)

orders.post('/orders', orderPost)

orders.put('/orders/:id', orderPut)

orders.delete('/orders/:id', orderDelete)

orders.get('/orders/:order_id/details', getDetails)

orders.post('/orders/:order_id/details', postDetails)

orders.put('/orders/:order_id/details/:detail_id', putDetails)

orders.delete('/orders/:order_id/details/:detail_id', deleteDetails)


