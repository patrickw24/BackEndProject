import express from 'express'
export const users = express()
users.use(express.json())
import { userDelete,userGetID,userPost,userPut,usersGet } from '../controllers/usersController.js'

users.get('/users', usersGet)
users.get('/users/:id', userGetID)
users.post('/users', userPost)
users.put('/users/:id', userPut)
users.delete('/users/:id', userDelete)