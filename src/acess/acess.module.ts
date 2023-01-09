import { Module } from '@nestjs/common';
import { AcessService } from './acess.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: 'aabb',
      signOptions: { expiresIn: '5h' },
    })
  ],
  providers: [AcessService, JwtStrategy],
  exports: [AcessService]
})
export class AcessModule { }
