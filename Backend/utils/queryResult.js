import {connection} from'../DB/mysql.db.js'

const queryResult=(query,values)=>{
 return new Promise((reject,resolve)=>{
        connection.query(query,values,(error,result)=>{
            if (error) {
                return reject({
                    statusCode:"400",
                    message: error
                });
            }
            return resolve(result)
        } )
    })
}

export{queryResult}