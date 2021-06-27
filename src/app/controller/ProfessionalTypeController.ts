import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfessionalTypeDTO } from 'src/domain/professional/dto/professionalType/CreateProfessionalTypeDTO';
import { UpdateProfessionalTypeDTO } from 'src/domain/professional/dto/professionalType/UpdateProfessionalTypeDTO';
import { ProfessionalType } from 'src/domain/professional/entity/ProfessionalType';
import { ProfessionalTypeService } from 'src/domain/professional/service/ProfessionalTypeService';

@ApiTags('professional-types')
@Controller('professional-types')
export class ProfessionalTypeController {
  constructor(private professionalTypeService: ProfessionalTypeService) {}

  @Get()
  public async all(): Promise<ProfessionalType[]> {
    return this.professionalTypeService.findAll();
  }

  @Post()
  public createProfessionalType(
    @Body() professionalTypeDTO: CreateProfessionalTypeDTO,
  ): Promise<ProfessionalType> {
    return this.professionalTypeService.create(professionalTypeDTO);
  }

  @Patch()
  public async updateProfessionaType(
    @Body() professionalTypeDTO: UpdateProfessionalTypeDTO,
  ): Promise<ProfessionalType> {
    return this.professionalTypeService.update(professionalTypeDTO);
  }
}
