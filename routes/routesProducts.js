import express from 'express'
export const products= express()
products.use(express.json())
import { productDelete,productGet,productGetID,productPost,productsPut } from '../controllers/productsController.js'

products.get('/products', productGet)
products.get('/products/:id', productGetID)
products.post('/products', productPost)
products.put('/products/:id', productsPut)
products.delete('/products/:id', productDelete)