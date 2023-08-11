import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsModule } from './channels/channels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './decorators/user.decorator';
import { Users } from './entities/Users';
import { DMs } from './entities/DMs';
import { WorkspaceMembers } from './entities/WorkspaceMembers';
import { Workspaces } from './entities/Workspaces';
import { Mentions } from './entities/Mentions';
import { Channels } from './entities/Channels';
import { ChannelChats } from './entities/ChannelChats';
import { ChannelMembers } from './entities/ChannelMembers';
import { AuthModule } from './auth/auth.module';

const getThirdPartySecrets = async () => {
  // 서드파티의 환경변수 가져오기. axios 등 사용.
  return {};
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.local', '.env.dev', '.env.prod'],
      load: [getThirdPartySecrets],
    }),
    AuthModule,
    UsersModule,
    WorkspacesModule,
    DmsModule,
    ChannelsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      synchronize: true,
      entities: [
        Users,
        DMs,
        WorkspaceMembers,
        Workspaces,
        Mentions,
        Channels,
        ChannelChats,
        ChannelMembers,
      ],
      // autoLoadEntities: true,
      logging: true,
      charset: 'utf8mb4',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
