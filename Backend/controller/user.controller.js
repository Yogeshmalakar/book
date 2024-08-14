import { register_User , login_User} from '../model/user.model.js'
import {ApiError }from '../utils/ApiError.js'

const registerUser = async(req,res) => {
   try {
     const {first_Name,last_Name,email,password} = req.body
      
     if(!first_Name){
       throw new ApiError(400,"First name is required")
     }
     if(!last_Name){
        throw new ApiError(400,"Last name is required")
      }
     if(!email){
        throw new ApiError(400,"Email is required")
      }
     if(!password){
        throw new ApiError(400,"Password is required")
      }
      const result= await register_User(req);
     if(!result){
        throw new ApiError(400, "user register failed")
     }
     console.log("result :",result)
     return  res.status(200).send({
        message: "Register user successfully",
        data: result,
        status: 200,
      });
   } catch (error) {
      console.log("error:",error)
      return res.status(error.statusCode|| 500)
      .send({
        error:error.message||"Internal server error",
        data:error.data||"",
        status:error.statusCode|| 500
      })
  }
}

const loginUser = async(req,res) => {
  try {
    const{email,password} = req.body
    if(!(email && password)){
      throw new ApiError(400,"each field is required")
    }
  
    const result = await login_User(req)
    
    if(!result){
      
    }

    if(email !== result[0].email){
      return res.status(200)
      console.log("result",result)
      .send({
          message: "No record found",
          data: result,
          status: 200,
      })
    }
    return  res.status(200).send({
      message: "Register user successfully",
      data: result,
      status: 200,
    });
  
  } catch (error) {
    console.log(error)
      return res.status
      (error.statusCode|| 500)
      .send({
        error:error.message||"Internal storage error",
        error:error.data||"",
        status:error.statusCode
      })
  }
}


export{registerUser , loginUser}


