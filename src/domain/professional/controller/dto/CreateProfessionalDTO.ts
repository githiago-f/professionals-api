import { ApiProperty } from '@nestjs/swagger';

export class CreateProfessionalDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({
    required: false
  })
  telephone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  typeOfProfessionalId: number;

  @ApiProperty({
    default: true,
    required: false
  })
  state: boolean;
}
