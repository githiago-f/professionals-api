import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';
import { ProfessionalType } from '../../entity/ProfessionalType';

export class UpdateProfessionalDTO {
  @IsNumber()
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: false })
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  public readonly name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsPhoneNumber('BR')
  public readonly telephone?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;

  @ApiProperty({ required: false, type: Number })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  public readonly typeOfProfessional: ProfessionalType;

  @ApiProperty({
    default: true,
    required: false,
  })
  @IsOptional()
  public readonly state: boolean;
}
