import { Inject, Injectable } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Repository } from 'typeorm';
import { CreateProfessionalDTO } from '../dto/professional/CreateProfessionalDTO';
import { UpdateProfessionalDTO } from '../dto/professional/UpdateProfessionalDTO';
import { Professional } from '../entity/Professional';
import { FilterProfessionals } from './dto/FilterProfessionals';
import { ProfessionalConflict } from './errors/ProfessionalConflict';
import { ProfessionalNotFound } from './errors/ProfessionalNotFound';

@Injectable()
export class ProfessionalService {
  constructor(
    @Inject(Constants.providers.professional)
    private professionalRepository: Repository<Professional>
  ) {}

  public findAllPaged(page = 0, filterOptions?: FilterProfessionals) {
    return this.professionalRepository.find({
      order: {createdAt: 'DESC'},
      loadRelationIds:false,
      // relations: ['typeOfProfessional'],
      where: filterOptions ? filterOptions : {
        state: true
      },
      take: 10,
      skip: page > 1 ? ((page-1)*10) : 0
    });
  }

  async create(professionalDto: CreateProfessionalDTO): Promise<Professional> {
    const professional = this.professionalRepository.create(professionalDto);
    const exists = await this.professionalRepository.count({
      where: {
        email: professional.email
      }
    });
    if(!exists||exists>0) {
      throw new ProfessionalConflict();
    }
    return this.professionalRepository.save(professional);
  }

  async update(professionalDto: UpdateProfessionalDTO) {
    const professional = this.professionalRepository.create(professionalDto);
    const exists = await this.professionalRepository.count({
      where: {
        id: professional.id
      }
    });
    if(!exists||exists<1){
      throw new ProfessionalNotFound();
    }
    await this.professionalRepository.update(professional.id, professional);
    return this.professionalRepository.findOne(professional.id);
  }
}
