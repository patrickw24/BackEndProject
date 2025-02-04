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

app.listen(3000)