import { Entity, PrimaryGeneratedColumn, Column , CreateDateColumn , UpdateDateColumn } from "typeorm";
import { UserInterface } from "./user.interface";

@Entity()
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt?: Date | undefined;

  @UpdateDateColumn()
  updatedAt?: Date | undefined;
}


