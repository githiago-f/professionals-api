import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('professional_types')
export class ProfessionalType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column({ default: true })
  state: boolean;

  @UpdateDateColumn()
  updatedAt: Date | string;

  @CreateDateColumn()
  createdAt: Date | string;
}
