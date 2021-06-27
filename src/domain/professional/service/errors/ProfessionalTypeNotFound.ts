import { HttpException, HttpStatus } from '@nestjs/common';

export class ProfessionalTypeNotFound extends HttpException {
  constructor() {
    super('Professional type not found!', HttpStatus.NOT_FOUND);
  }
}
