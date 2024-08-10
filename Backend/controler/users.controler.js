const registerUser = async(req,res) => {
    const {userName,fullName,email,password} = req.body
    if(
        [userName,fullName,email,password].some((field) => field?.trim() === "")
    )
}
export {registerUser}