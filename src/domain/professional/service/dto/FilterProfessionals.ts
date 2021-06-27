import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional } from 'class-validator';
import { ProfessionalType } from '../../entity/ProfessionalType';

export class FilterProfessionals {
  @ApiProperty({
    required: false,
    default: true,
  })
  public readonly state: boolean;

  @ApiProperty({
    required: false,
  })
  @IsEmail()
  @IsOptional()
  public readonly email?: string;

  @ApiProperty({
    required: false,
  })
  public readonly name?: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  public readonly professionalType: ProfessionalType;
}
