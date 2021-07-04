import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/data/database.module';
import { ProfessionalRepository } from './professional/repository/ProfessionalRepository';
import { ProfessionalTypeRepository } from './professional/repository/ProfessionalTypeRepository';
import { PhotosService } from './professional/service/PhotosService';
import { ProfessionalService } from './professional/service/ProfessionalService';
import { ProfessionalTypeService } from './professional/service/ProfessionalTypeService';

@Module({
  imports: [DatabaseModule],
  providers: [
    ProfessionalTypeRepository,
    ProfessionalRepository,
    ProfessionalService,
    ProfessionalTypeService,
    PhotosService,
  ],
  exports: [
    ProfessionalService,
    ProfessionalTypeService,
    PhotosService
  ],
})
export class DomainModule {}
