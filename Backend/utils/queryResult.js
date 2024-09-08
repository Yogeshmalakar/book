import {connection} from'../DB/mysql.db.js'

const queryResult=async(query,values)=>{
 return  new Promise(async(resolve,reject)=>{
        connection.query(query,values,(error,result)=>{
            if (error) {
                console.log( "query result :",error)
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

