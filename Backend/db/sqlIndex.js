import mysql from "mysql";

export const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"practiceproject"
})

connection.connect(function(error)  {
    if (error) {
        console.log("Database is not connected :", error);
    }
    console.log("Database connected succesfull");
})