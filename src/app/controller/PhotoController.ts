import { Controller, Get, Header, Param, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { PhotosService } from 'src/domain/professional/service/PhotosService';

type File = Express.Multer.File;

/**
 * User will need to be in a session to submit,
 * but not to read the professional photo
 */
@ApiTags('professionals-photo')
@Controller('professionals/:professional/photo')
export class PhotoController {
  constructor(
    private photosService: PhotosService
  ) {}

  @Get('/:slug')
  @Header('Content-Type', 'image/png')
  public async getPhoto(@Param('slug') slug: string, @Res() res: Response) {
    // TODO
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo'))
  public async sendPhoto(@UploadedFile() file: File) {
    const fileTempPath = await this.photosService.storeTempFile(file);
    return {
      fileTempPath
    };
  }
}
