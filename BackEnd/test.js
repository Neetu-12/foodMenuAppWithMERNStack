import bcrypt from "bcryptjs";

let registerfun = async ()=>{
    let haspassword = await bcrypt.hash('test@123',10)
    console.log(haspassword);
    return haspassword;
    
}

let loginfun = async (pass) => {
    let checker = await bcrypt.compare('test@123', pass);
    console.log(checker);   
}

let pass = await registerfun();
loginfun(pass);