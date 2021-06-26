import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString
} from 'class-validator';

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
    example: 1
  })
  @IsNotEmpty()
  @IsNumber()
  public readonly typeOfProfessionalId: number;

  @ApiProperty({
    default: true,
    required: true
  })
  @IsOptional()
  public readonly state: boolean;
}
