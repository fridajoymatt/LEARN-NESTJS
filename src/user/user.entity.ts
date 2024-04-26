import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({nullable:true})
  username: string;

  @Column({unique : true})
  readonly email: string;

  @Column({ default: true })
  readonly password: string;
}