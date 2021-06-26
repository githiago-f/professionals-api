import { Module } from '@nestjs/common';
import { ProfessionalsController } from './professional/controller/ProfessionalsController';
import { ProfessionalTypeController } from './professional/controller/ProfessionalTypeController';

@Module({
  imports: [],
  controllers: [
    ProfessionalsController,
    ProfessionalTypeController
  ],
  providers: [],
})
export class DomainModule { }
