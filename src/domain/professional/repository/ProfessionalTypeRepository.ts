import { Provider } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Connection, Repository } from 'typeorm';
import { ProfessionalType } from '../entity/ProfessionalType';

export const ProfessionalTypeRepository: Provider<Repository<ProfessionalType>> = {
  provide: Constants.providers.professionalType,
  useFactory: (connection: Connection) => connection.getRepository(ProfessionalType),
  inject: [Constants.providers.db]
};
