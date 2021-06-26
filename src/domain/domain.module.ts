import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/data/database.module';
import { ProfessionalSubscriber } from './professional/entity/subscribers/ProfessionalSubscriber';
import { ProfessionalTypeSubscriber } from './professional/entity/subscribers/ProfessionalTypeSubscriber';
import { ProfessionalRepository } from './professional/repository/ProfessionalRepository';
import { ProfessionalTypeRepository } from './professional/repository/ProfessionalTypeRepository';
import { ProfessionalService } from './professional/service/ProfessionalService';
import { ProfessionalTypeService } from './professional/service/ProfessionalTypeService';

@Module({
  imports: [ DatabaseModule ],
  providers: [
    ProfessionalTypeRepository,
    ProfessionalRepository,
    ProfessionalService,
    ProfessionalTypeService,
    ProfessionalSubscriber,
    ProfessionalTypeSubscriber
  ],
  exports: [
    ProfessionalService,
    ProfessionalTypeService
  ]
})
export class DomainModule { }
