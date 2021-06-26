import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professional_types')
export class ProfessionalType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  situation: boolean;

  @Column()
  updatedAt: Date;

  @Column()
  createdAt: Date;
}
