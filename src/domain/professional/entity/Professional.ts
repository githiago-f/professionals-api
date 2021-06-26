import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProfessionalType } from './ProfessionalType';

@Entity('professionals')
export class Professional {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  telephone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  typeOfProfessionalId: number;

  @OneToOne(() => ProfessionalType)
  typeOfProfessional: ProfessionalType;

  @Column({ default: true })
  state: boolean;

  @Column({
    type: 'datetime',
    transformer: {
      from:(value)=>new Date(value),
      to: (val) => val
    },
    nullable: true
  })
  updatedAt: Date|string;

  @Column({
    type: 'datetime',
    transformer: {
      from: (value) => new Date(value),
      to: (val) => val
    }
  })
  createdAt: Date|string;
}
