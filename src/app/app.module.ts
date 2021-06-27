import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { DatabaseModule } from 'src/data/database.module';
import { ProfessionalsController } from './controller/ProfessionalsController';
import { ProfessionalTypeController } from './controller/ProfessionalTypeController';

@Module({
  imports: [DatabaseModule, DomainModule],
  controllers: [ProfessionalsController, ProfessionalTypeController],
})
export class AppModule {}
