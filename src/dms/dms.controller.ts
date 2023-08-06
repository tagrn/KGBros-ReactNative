import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('workspaces/:url/dms')
export class DmsController {
  @Get(':id/chats')
  async getChat(
    @Query('page') page,
    @Query('take') take,
    @Param('id') id,
    @Param('url') url
  ) {}

  @Post(':id/chats')
  async chat(@Body() body, @Param('id') id, @Param('url') url) {}
}
