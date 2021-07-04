import { Injectable } from '@nestjs/common';
import { promises } from 'fs';
import { Constants } from 'src/utils/constants';
import {join} from 'path';

@Injectable()
export class PhotosService {
  private readonly tempPath = Constants.filestorage.tempPath;
  async storeTempFile(file: Express.Multer.File) {
    const fileTempPath = join(this.tempPath, file.originalname);
    await promises.writeFile(fileTempPath, file.buffer);
    return fileTempPath;
  }

  async deleteTempFile(fileTempPath: string) {
    return await promises.unlink(fileTempPath);
  }
}
