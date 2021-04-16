import { Controller, Get, Param, Res } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('uploads/:fileId')
  async serveAvatar(@Param('fileId') fileId, @Res() res): Promise<any> {
    res.sendFile(fileId, { root: 'uploads'});
  }
}
