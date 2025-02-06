import { db } from "../database/cn.js";


export const productGet= async(req, res)=>{

    const sql= 'select * from products'
    const result= await db.query(sql)
    res.json(result)

}

export const productGetID= async(req, res)=>{

    const id_products= req.params.id

   const sql = `select * from products where id_products = ${id_products}`
   const result = await db.query(sql)
   res.json(result)

}

export const productPost= async(req, res)=>{

    const sql= 'insert into products (name, description, price, stock) values ($1, $2, $3, $4)'
    const tmp= req.body
    const arr= [tmp.name, tmp.description, tmp.price, tmp.stock]

    const result = await db.query(sql, arr)

    res.json({message:"Product Created"})

}

export const productsPut= async(req, res)=>{
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

     const result = db.query(sql, arr)

     res.json({message: "Product Updated"})

}

export const productDelete= async (req,res)=>{

        const id_products= req.params.id
        const sql = 'delete from products where id_products= $1'
        const arr= [id_products]

        const result = await db.query(sql,arr)
        res.json({message: "Product Deleted"})
}