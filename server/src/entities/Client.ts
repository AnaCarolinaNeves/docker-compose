import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:"client"})
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length: 80})
    nome: string;

    @Column({nullable: false, length: 10})
    cpf: string;

    @Column({nullable: false, length: 15})
    telefone: string;
}