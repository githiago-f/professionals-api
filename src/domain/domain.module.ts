import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/data/database.module';
import { ProfessionalRepository } from './professional/repository/ProfessionalRepository';
import { ProfessionalTypeRepository } from './professional/repository/ProfessionalTypeRepository';
import { ProfessionalService } from './professional/service/ProfessionalService';
import { ProfessionalTypeService } from './professional/service/ProfessionalTypeService';

@Module({
  imports: [DatabaseModule],
  providers: [
    ProfessionalTypeRepository,
    ProfessionalRepository,
    ProfessionalService,
    ProfessionalTypeService,
  ],
  exports: [ProfessionalService, ProfessionalTypeService],
})
export class DomainModule {}
