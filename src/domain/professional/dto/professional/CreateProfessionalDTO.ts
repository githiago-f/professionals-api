import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString
} from 'class-validator';
import { ProfessionalType } from '../../entity/ProfessionalType';

export class CreateProfessionalDTO {
  @ApiProperty({
    example: 'Ana'
  })
  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @ApiProperty({
    required: false,
    example: '+55 (51) 99999-0000'
  })
  @IsOptional()
  @IsPhoneNumber('BR')
  public readonly telephone?: string;

  @ApiProperty({
    required: true,
    example: 'email@email.com'
  })
  @IsEmail()
  @IsNotEmpty()
  public readonly email: string;

  @ApiProperty({
    example: 1,
    type: Number
  })
  @IsNotEmpty()
  @IsNumber()
  public readonly typeOfProfessional: ProfessionalType;

  @ApiProperty({
    default: true,
    required: true
  })
  @IsOptional()
  public readonly state: boolean;
}
