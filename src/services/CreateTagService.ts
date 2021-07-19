import{getCustomRepository} from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"

class CreateTagService{
  async execute(name:string){
    const tagsRepositories = getCustomRepository(TagsRepositories)

    if(!name){
      throw new Error("Nome incorreto na tag!")
    }

    // select * from tags where name='name'
    const TagJaExiste = await tagsRepositories.findOne({
      name
    })

    if(TagJaExiste){
      throw new Error("Tag já existe!")
    }

    const tag = tagsRepositories.create({
      name
    })
    await tagsRepositories.save(tag)

    return tag;

  }
}
export{CreateTagService}


/**
 * server -> routes -> Controller -> Service (throw new error)
 * 
 */
