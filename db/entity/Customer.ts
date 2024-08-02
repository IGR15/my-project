import { BaseEntity,Column,Entity,PrimaryGeneratedColumn } from "typeorm";
@Entity("cutomer")
export class Customer extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({length:255,nullable:false})
    name: string;
    @Column({length:255,nullable:false,unique:true})
    mobilePhone: string;
    @Column({nullable:true})
    balance: number;
}