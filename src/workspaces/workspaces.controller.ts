import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createMyWorkspcaes() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMembersToWorkspcae() {}

  @Delete(':url/members/:id')
  kickMemberFromWorkspcae() {}

  @Get(':url/members/:id')
  getMemberInfoInWorkspace() {}
}
