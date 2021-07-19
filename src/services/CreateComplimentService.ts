import{getCustomRepository} from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UserRepositories } from "../repositories/UsersRepositories"

interface IComplimentRequest{
  tag_id:string;
  user_sender:string;
  user_receiver: string;
  message:string
}

class CreateComplimentService{
  async execute({tag_id,user_sender,user_receiver,message}:IComplimentRequest){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UserRepositories)

    if(user_sender === user_receiver){
      throw new Error("Vc não pode mandar elogios para vc mesmo!")
    }

    const userReceiver_Exists = await userRepositories.findOne(user_receiver)
    
    if(!userReceiver_Exists){
      throw new Error("Usuário nao existe!!")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositories.save(compliment);

    return compliment;

  }
}
export{CreateComplimentService}


/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */
