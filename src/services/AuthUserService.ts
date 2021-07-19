import{getCustomRepository} from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import {compare} from "bcryptjs"
import {sign} from "jsonwebtoken"

interface IAuthRequest{
  email:string;
  password:string;
}

class AuthUserService{
  async execute({email,password}:IAuthRequest){
    const usersRepositories = getCustomRepository(UserRepositories)

    //Verifica email no banco de dados
    const usuario_localizado = await usersRepositories.findOne({
      email,
    })

    if(!usuario_localizado){
      throw new Error("Email/Password incorreto!")
    }
    // Verifica se senha está correta
    const password_certo = await compare(password,usuario_localizado.password)
    if(!password_certo){
      throw new Error("Email/Password incorreto!")
    }
    //Gerar Token
    const token = sign({
      email:usuario_localizado.email,
    },"4f93ac9d10cb751b8c9c646bc9dbccb9",{
      subject : usuario_localizado.id,
      expiresIn : "2d"
    })
    return token;
  }
}
export{AuthUserService}


/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */
