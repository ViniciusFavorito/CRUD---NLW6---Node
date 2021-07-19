// -> Server -> Controller -> Service -> Repositorio -> BD
import{Request,Response} from "express"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"

class ListUserSendComplimentsController{
  static handle(arg0: string, handle: any) {
    throw new Error("Method not implemented.")
  }
  async handle(request:Request,response:Response){
    const {user_id} = request

    const listUserSendComplimentsService = new ListUserSendComplimentsService()

    const compliments = await listUserSendComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export{ListUserSendComplimentsController}
/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */