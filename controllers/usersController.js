import { db } from "../database/cn.js";

export const usersGet= async (req, res) => {

        const sql = 'select * from users'
        const result = await db.query(sql)
        res.status(200).json(result)

}

export const userGetID = async (req, res)=>{

   const id_users= req.params.id

   const sql = `select * from users where id_users = ${id_users}`
   const result = await db.query(sql)
   res.json(result)

}

export const userPost = async (req, res)=> {

    const tmp= req.body
    const str= 'insert into users (name, email) values ($1, $2)'
    const arr = [tmp.name, tmp.email]
    const result = await db.query(str, arr)
    res.status(200).json({message:"User Added"})
}

export const userPut = async (req, res) =>{

    const id_users = req.params.id
    const tmp= req.body
    
    const arr= [tmp.name, tmp.email, id_users]
    const sql= 'UPDATE users set name = $1, email= $2 where id_users= $3'

    const result= db.query(sql, arr)

    res.json({message: "User Updated"})

}

export const userDelete = async(req, res)=>{

    const id_users= req.params.id
    const sql= 'DELETE from users where id_users= $1'
    const arr= [id_users]

    const result = await db.query(sql,arr)
    res.json({message: "User Deleted"})
}