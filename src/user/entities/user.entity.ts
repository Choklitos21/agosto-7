import { AfterUpdate, BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";

@Entity('users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: "varchar", length: 100, nullable: false, name: 'first_name' })
  firstName: string;

  @Column({ type: "varchar", length: 100, nullable: false, name: 'last_name' })
  lastName: string;

  @Column({ type: "varchar", length: 20, nullable: false  })
  gender: string;

  @Column({ type: "varchar", nullable: false  })
  email: string;

  @Column({ type: "varchar", nullable: false })
  password: string;

  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @BeforeInsert()
  async hashPassword(){
    this.password = await bcrypt.hash(this.password, 10)
  }

  @AfterUpdate()
  logEntity() {
    console.log(this)
  }

}