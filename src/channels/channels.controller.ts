import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Channels')
@Controller('workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannels() {}

  @Get(':name')
  getSpecificChannel() {}

  @Get(':name/chats')
  getChats() {}

  @Post(':name/chats')
  sendChats() {}

  @Get(':name/members')
  getAllmembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
