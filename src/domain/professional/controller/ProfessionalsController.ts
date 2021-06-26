import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfessionalDTO } from './dto/CreateProfessionalDTO';
import { UpdateProfessionalDTO } from './dto/UpdateProfessionalDTO';

@ApiTags('professionals')
@Controller('professionals')
export class ProfessionalsController {
  @Get()
  public async all() {
    return [];
  }

  @Post()
  public createProfessional(@Body() professional: CreateProfessionalDTO) {
    return;
  }

  @Patch()
  public updateProfessional(@Body() professional: UpdateProfessionalDTO) {
    return;
  }
}
