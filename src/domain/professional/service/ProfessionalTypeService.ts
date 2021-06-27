import { Inject, Injectable } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Repository } from 'typeorm';
import { CreateProfessionalTypeDTO } from '../dto/professionalType/CreateProfessionalTypeDTO';
import { UpdateProfessionalTypeDTO } from '../dto/professionalType/UpdateProfessionalTypeDTO';
import { ProfessionalType } from '../entity/ProfessionalType';
import { ProfessionalTypeNotFound } from './errors/ProfessionalTypeNotFound';

@Injectable()
export class ProfessionalTypeService {
  constructor(
    @Inject(Constants.providers.professionalType)
    private professionalTypeRepository: Repository<ProfessionalType>,
  ) {}

  findAll() {
    return this.professionalTypeRepository.find();
  }

  create(professionalTypeDto: CreateProfessionalTypeDTO) {
    const professionalType = this.professionalTypeRepository.create(
      professionalTypeDto,
    );
    return this.professionalTypeRepository.save(professionalType);
  }

  async update(
    professionalTypeDto: UpdateProfessionalTypeDTO,
  ): Promise<ProfessionalType> {
    const professionalType = this.professionalTypeRepository.create(
      professionalTypeDto,
    );

    const exists = await this.professionalTypeRepository.count({
      where: {
        id: professionalType.id,
      },
    });

    if (!exists || exists < 1) {
      throw new ProfessionalTypeNotFound();
    }
    await this.professionalTypeRepository.update(
      professionalType.id,
      professionalType,
    );
    return this.professionalTypeRepository.findOne(professionalType.id);
  }
}
