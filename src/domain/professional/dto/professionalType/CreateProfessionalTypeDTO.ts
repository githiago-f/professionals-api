import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateProfessionalTypeDTO {
  @ApiProperty({
    description: 'Description of the professional type (aka.: profession)',
    example: 'Teacher',
  })
  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  description: string;

  @ApiProperty({
    required: false,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  state: boolean;
}
