import { join, resolve } from 'path';

export const Constants = {
  providers: {
    db: 'DATABASE_CONNECTION',
    professional: 'ProfessionalRepository',
    professionalType: 'ProfessionalTypeRepository',
    photos: 'PhotosRepository'
  },
  filestorage: {
    tempPath: resolve(join(__dirname, '../../tmp')),
    storagePath: resolve(join(__dirname, '../../storage'))
  }
};
