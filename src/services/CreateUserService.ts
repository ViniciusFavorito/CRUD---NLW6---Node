import{getCustomRepository} from "typeorm"
import { UserRepositories } from "../repositories/UsersRepositories"
import {hash} from "bcryptjs"


interface IUserRequest{
  name:string;
  email:string;
  adm?: boolean;
  password:string
}

class CreateUserService{
  async execute({name,email,adm = false,password}:IUserRequest){
    const usersRepository = getCustomRepository(UserRepositories)

    if(!email){
      throw new Error("Email incorreto")
    }

    const userjaexiste = await usersRepository.findOne({
      email
    })

    if(userjaexiste){
      throw new Error("Usuário já existe")
    }

    const Criptografa_Senha = await hash(password,8)

    const usuario = usersRepository.create({
      name,
      email,
      adm,
      password : Criptografa_Senha
    })
    await usersRepository.save(usuario)

    return usuario;

  }
}

export{CreateUserService}


/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */
