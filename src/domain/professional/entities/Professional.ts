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

  @Column()
  email: string;

  @Column()
  typeOfProfessionalId: number;

  @OneToOne(() => ProfessionalType)
  typeOfProfessional: ProfessionalType;

  @Column()
  state: boolean;

  @Column()
  updatedAt: Date;

  @Column()
  createdAt: Date;
}
