
const User = require("../models/User.model");

class UserService{

    async GetByEmail(email: string){
        try{
            const user = await User.findOne({ email: email});
            return user;
        }
        catch(err){
            throw err;
        }
    } 
}

export default UserService;