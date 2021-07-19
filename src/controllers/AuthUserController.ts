// -> Server -> Controller -> Service -> Repositorio -> BD
import{Request,Response} from "express"
import { AuthUserService } from "../services/AuthUserService"

class AuthUserController{
  async handle(request: Request, response: Response) {
      const { email, password } = request.body;

      const authUserService = new AuthUserService();
  
      const token = await authUserService.execute({
        email,password
      })
  
      return response.json(token)
    }
}
export{AuthUserController}
/**
 * Server -> Routes -> Controller -> Service (throw new error)
 * 
 */