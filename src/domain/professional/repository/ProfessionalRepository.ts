import { Provider } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Connection, Repository } from 'typeorm';
import { Professional } from '../entity/Professional';

export const ProfessionalRepository: Provider<Repository<Professional>> = {
  provide: Constants.providers.professional,
  useFactory: (connection: Connection) => connection.getRepository(Professional),
  inject: [Constants.providers.db]
};
