const pg = require('pg-promise')
const pgc = pg()

const str = 'postgresql://patrickw:WBle0qyx0anapNf2bu4SghIrYiL2mU3u@dpg-cu9e2lq3esus73b38of0-a.oregon-postgres.render.com/codexpathway4'

const db = pgc(str)

db.connect()
    .then(() => {
        console.log("Success Connection")
    })
    .catch((err) => {
        console.log(` Error Connection ${err} `)
    })

exports.default = db