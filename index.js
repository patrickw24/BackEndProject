const express = require('express')
const app = express()
app.use(express.json())
const db = require('./cn.js')

app.get('/users', async function (req, res){

        const sql = 'select * from users'
        const result = await db.default.query(sql)
        res.status(200).json(result)

})

app.get('/users/:id', async function (req, res){

   const id_users= req.params.id

   const sql = `select * from users where id_users = ${id_users}`
   const result = await db.default.query(sql)
   res.json(result)

})

app.post('/users', async function (req, res){

    const tmp= req.body
    const str= 'insert into users (name, email) values ($1, $2)'
    const arr = [tmp.name, tmp.email]
    const result = await db.default.query(str, arr)
    res.status(200).json({message:"User Added"})
})

app.put('/users/:id', async (req, res) =>{

    const id_users = req.params.id
    const tmp= req.body
    
    const arr= [tmp.name, tmp.email, id_users]
    const sql= 'UPDATE users set name = $1, email= $2 where id_users= $3'

    const result= db.default.query(sql, arr)

    res.json({message: "User Updated"})

})

app.delete('/users/:id', async(req, res)=>{

    const id_users= req.params.id
    const sql= 'DELETE from users where id_users= $1'
    const arr= [id_users]

    const result = await db.default.query(sql,arr)
    res.json({message: "User Deleted"})
})


app.get('/products', async(req, res)=>{

    const sql= 'select * from products'
    const result= await db.default.query(sql)
    res.json(result)

})

app.get('/products/:id', async(req, res)=>{

    const id_products= req.params.id

   const sql = `select * from products where id_products = ${id_products}`
   const result = await db.default.query(sql)
   res.json(result)

})

app.post('/products', async(req, res)=>{

    const sql= 'insert into products (name, description, price, stock) values ($1, $2, $3, $4)'
    const tmp= req.body
    const arr= [tmp.name, tmp.description, tmp.price, tmp.stock]

    const result = await db.default.query(sql, arr)

    res.json({message:"Product Created"})

})

app.put('/products/:id', async(req, res)=>{
    const id_products= req.params.id
    const tmp = req.body
    const arr = [tmp.name, tmp.description, tmp.price, tmp.stock, id_products]

    const sql = `update products 
    set name= $1,
        description= $2,
        price = $3,
        stock = $4
        where id_products= $5
     `

     const result = db.default.query(sql, arr)

     res.json({message: "Product Updated"})

})

app.delete('/products/:id', async (req,res)=>{

        const id_products= req.params.id
        const sql = 'delete from products where id_products= $1'
        const arr= [id_products]

        const result = await db.default.query(sql,arr)
        res.json({message: "Product Deleted"})
})

app.get('/orders', async (req, res)=>{

    const sql= 'select * from orders'
    const result= await db.default.query(sql)
    res.json(result)
})

app.get('/orders/:id', async(req, res)=>{

    const id_orders= req.params.id

   const sql = `select * from orders where id_orders = ${id_orders}`
   const result = await db.default.query(sql)
   res.json(result)

})

app.post('/orders', async(req, res)=>{

    const sql= 'insert into orders (order_date, status) values ($1, $2)'
    const tmp= req.body
    const arr= [tmp.order_date, tmp.status]

    const result = await db.default.query(sql, arr)

    res.json({message:"Order Created"})

})

app.put('/orders/:id', async(req, res)=>{
    const id_orders= req.params.id
    const tmp = req.body
    const arr = [tmp.order_date,tmp.status,id_orders]

    const sql = `update orders 
    set order_date= $1,
        status= $2
        where id_orders= $3
     `
     const result = db.default.query(sql, arr)
     res.json({message: "Order Updated"})

})

app.delete('/orders/:id', async (req,res)=>{

    const id_orders= req.params.id
    const sql = 'delete from orders where id_orders= $1'
    const arr= [id_orders]

    const result = await db.default.query(sql,arr)
    res.json({message: "Order Deleted"})
})

app.get('/orders/:id_orders/details', async(req, res)=>{

    const id_orders= req.params.id

   const sql = `select * from order_details where id_orders = ${id_orders}`
   const result = await db.default.query(sql)
   res.json(result)

})

app.post('/orders/:id_orders/details', async(req, res)=>{

    const id_orders= req.params.id

    const sql= `insert into order_details (quantity, price) values ($1, $2) where id_orders= ${id_orders}`
    const tmp= req.body
    const arr= [tmp.quantity, tmp.price]

    const result = await db.default.query(sql, arr)

    res.json({message:"New Product Added"})

})


app.listen(3000)