import { Body, Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Professional } from 'src/domain/professional/entity/Professional';
import { ProfessionalService } from 'src/domain/professional/service/ProfessionalService';
import { CreateProfessionalDTO } from 'src/domain/professional/dto/professional/CreateProfessionalDTO';
import { UpdateProfessionalDTO } from 'src/domain/professional/dto/professional/UpdateProfessionalDTO';
import { FilterProfessionals } from 'src/domain/professional/service/dto/FilterProfessionals';

@ApiTags('professionals')
@Controller('professionals')
export class ProfessionalsController {
  constructor(private professionalService: ProfessionalService) {}

  @Get()
  @ApiQuery({
    name: 'page',
    description: 'Professionals page',
    required: false,
    type: Number,
  })
  public async all(
    @Query('page') page?: number,
    @Query() filter?: FilterProfessionals,
  ): Promise<Professional[]> {
    return this.professionalService.findAllPaged(page, filter);
  }

  @Post()
  public createProfessional(
    @Body() professionalDto: CreateProfessionalDTO,
  ): Promise<Professional> {
    return this.professionalService.create(professionalDto);
  }

  @Patch()
  public updateProfessional(
    @Body() professionalDto: UpdateProfessionalDTO,
  ): Promise<Professional> {
    return this.professionalService.update(professionalDto);
  }
}
