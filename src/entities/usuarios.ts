import {Entity,PrimaryColumn,Column, CreateDateColumn, UpdateDateColumn} from "typeorm";
import{ v4 as uuid } from "uuid"

@Entity("usuarios")
class usuarios {
  @PrimaryColumn()
  readonly id:string;
  @Column()
  name:string;
  @Column()
  email: string;
  @Column()
  adm: boolean;
  @Column()
  password: string;
  @CreateDateColumn()
  criado_em: Date;
  @UpdateDateColumn()
  att_em:Date;
  constructor(){
    if(!this.id){
      this.id  =uuid()
    }
  }
}

export{usuarios}

