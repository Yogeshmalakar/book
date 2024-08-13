import { queryResult } from "../utils/queryResult.js"


const register_User=async(data)=>{
 
   try {
     const {first_Name,last_Name,email,password} = req.body
 
     const query="INSERT INTO user (first_Name,last_NAME,email,password)valus(?,?,?,?)"
     const value=[first_Name,last_Name,email,password]
 
     const result=await queryResult(query,value);
     if (!result) {
         throw new ApiError("Result not found");
       }
     return result;
   } catch (error) {
    throw error;
   }
}
export{register_User}