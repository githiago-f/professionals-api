import { HttpException, HttpStatus } from '@nestjs/common';

export class ProfessionalConflict extends HttpException {
  constructor() {
    super('Professional already exists', HttpStatus.CONFLICT);
  }
}
