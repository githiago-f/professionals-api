import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateProfessionalDTO {
  @IsNumber()
  @ApiProperty({required: true})
  id: number;

  @ApiProperty({required: false})
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

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  public readonly typeOfProfessionalId: number;

  @ApiProperty({
    default: true,
    required: false
  })
  @IsOptional()
  public readonly state: boolean;
}
