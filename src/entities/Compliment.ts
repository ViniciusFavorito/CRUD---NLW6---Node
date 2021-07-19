import {Entity,PrimaryColumn,Column, CreateDateColumn, JoinColumn, ManyToOne} from "typeorm";
import{ v4 as uuid } from "uuid"
import { Tag } from "./Tag";
import { usuarios } from "./usuarios";

@Entity("compliments")
class Compliments {
  @PrimaryColumn()
  readonly id:string;

  @Column()
  user_sender:string;
  @JoinColumn({name:"user_sender"})
  @ManyToOne(() => usuarios)
  userSender:usuarios

  @Column()
  user_receiver: string;
  @JoinColumn({name:"user_receiver"})
  @ManyToOne(() => usuarios)
  userReceiver:usuarios

  @Column()
  tag_id:string
  @JoinColumn({name:"tag_id"})
  @ManyToOne(() => Tag)
  tag:Tag

  @Column()
  message:string
  
  @CreateDateColumn()
  criado_em:Date

  constructor(){
    if(!this.id){
      this.id  =uuid()
    }
  }
}

export{Compliments}