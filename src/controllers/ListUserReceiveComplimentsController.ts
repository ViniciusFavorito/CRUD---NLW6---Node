// -> Server -> Controller -> Service -> Repositorio -> BD
import{Request,Response} from "express"
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService"

class ListUserReceiveComplimentsController{
  static handle(arg0: string, handle: any) {
    throw new Error("Method not implemented.")
  }
  async handle(request:Request,response:Response){
    const {user_id} = request

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService()

    const compliments = await listUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export{ListUserReceiveComplimentsController}
/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */