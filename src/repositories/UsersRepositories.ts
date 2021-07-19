import { EntityRepository,Repository } from "typeorm";
import { usuarios } from "../entities/usuarios";

@EntityRepository(usuarios)
class UserRepositories extends Repository<usuarios>{

}

export {UserRepositories}