import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professional_types')
export class ProfessionalType {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  state: boolean;

  @Column({
    nullable: true,
    type: 'datetime',
    transformer: {
      from: (value) => new Date(value),
      to: (val) => val
    }
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
