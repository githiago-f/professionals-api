import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateProfessionalTypeDTO {
  @ApiProperty({
    description: 'Professional type identifyer required to perform UPDATE action'
  })
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Description of the professional type (aka.: profession)',
    example: 'Teacher',
    required: false
  })
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MaxLength(300)
  description: string;

  @ApiProperty({
    required: false,
    default: true
  })
  @IsOptional()
  @IsBoolean()
  state: boolean;
}
