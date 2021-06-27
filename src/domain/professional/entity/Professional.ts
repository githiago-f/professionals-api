import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
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

  @OneToOne(() => ProfessionalType, {
    eager: true,
  })
  @JoinColumn({
    name: 'typeOfProfessionalId',
    referencedColumnName: 'id',
  })
  typeOfProfessional: ProfessionalType;

  @Column({ default: true })
  state: boolean;

  @UpdateDateColumn()
  updatedAt: Date | string;

  @CreateDateColumn()
  createdAt: Date | string;
}
