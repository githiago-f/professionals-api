import { HttpException, HttpStatus } from '@nestjs/common';

export class ProfessionalNotFound extends HttpException {
  constructor() {
    super(
      'Professional not found!',
      HttpStatus.NOT_FOUND
    );
  }
}
