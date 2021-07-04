import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { DatabaseModule } from 'src/data/database.module';
import { ProfessionalsController } from './controller/ProfessionalsController';
import { ProfessionalTypeController } from './controller/ProfessionalTypeController';
import { PhotoController } from './controller/PhotoController';

@Module({
  imports: [
    DatabaseModule,
    DomainModule
  ],
  controllers: [
    ProfessionalsController,
    ProfessionalTypeController,
    PhotoController
  ],
})
export class AppModule {}
