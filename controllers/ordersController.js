import { db } from "../database/cn.js";

export const orderGet= async (req, res)=>{

    const sql= 'select * from orders'
    const result= await db.query(sql)
    res.json(result)
}

export const orderGetID= async(req, res)=>{

    const id_orders= req.params.id

   const sql = `select * from orders where id_orders = ${id_orders}`
   const result = await db.query(sql)
   res.json(result)

}

export const orderPost= async(req, res)=>{

    

    const sql= 'insert into orders (order_date, status, id_users) values ($1, $2, $3)'
    const tmp= req.body
    const arr= [tmp.order_date, tmp.status, tmp.id_users]

    const result = await db.query(sql, arr)

    res.json({message:"Order Created"})

}

export const orderPut = async(req, res)=>{
    const id_orders= req.params.id
    const tmp = req.body
    const arr = [tmp.order_date,tmp.status,id_orders]

    const sql = `update orders 
    set order_date= $1,
        status= $2
        where id_orders= $3
     `
     const result = db.query(sql, arr)
     res.json({message: "Order Updated"})

}

export const orderDelete=  async (req,res)=>{

    const id_orders= req.params.id
    const sql = 'delete from orders where id_orders= $1'
    const arr= [id_orders]

    const result = await db.query(sql,arr)
    res.json({message: "Order Deleted"})
}

export const getDetails=  async(req, res)=>{

    const id_orders= req.params.id_orders

   const sql = `select * from order_details where id_orders = ${id_orders}`
   const result = await db.query(sql)
   res.json(result)

}

export const postDetails= async(req, res)=>{

    const id_orders= req.params.id_orders
    

    const sql= `insert into order_details (quantity, price, id_orders, id_products) values ($1, $2, $3, $4)`
    const tmp= req.body
    const arr= [tmp.quantity, tmp.price, id_orders, tmp.id_products]

    const result = await db.query(sql, arr)

    res.json({message:"New Product Added"}) 

}

export const putDetails= async (req, res) =>{

    const id_orders= req.params.id_orders
    const tmp= req.body
    const arr= [tmp.quantity, tmp.price, tmp.id_products, id_orders]


    const sql = `update order_details 
    set quantity= $1,
        price= $2,
        id_products= $3
        where id_orders= $4; `
     const result = await db.query(sql, arr)
     res.json({message: "Order Details Updated"})

}

export const deleteDetails = async (req, res)=>{

    const id_orders= req.params.id_orders
    const id_details= req.params.id_details

    const sql= `delete from order_details where id_orders=$1 and id_details=$2`
    const arr= [id_orders, id_details]

    const result = await db.query(sql,arr)
    res.json({message: "Order Deleted"})
}