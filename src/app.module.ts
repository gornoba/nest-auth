import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AcessModule } from './acess/acess.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [UserModule, AuthModule, AcessModule],
})
export class AppModule { }
