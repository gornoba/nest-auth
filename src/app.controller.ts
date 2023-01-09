import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './acess/jwt.guard';
import { AuthService } from './auth/auth.service';
import { AcessService } from './acess/acess.service';
import { Roles } from './common/roles.decorator';
import { Role } from './common/role.enum';
import { RolesGuard } from './common/roles.guard';

@Roles(Role.Admin)
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
    private readonly acessService: AcessService,
  ) { }

  @Post('auth/login')
  async login(@Request() req) {
    return { refresh: this.authService.getToken(), access: this.acessService.getToken() }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.User)
  @Get('auth/login')
  async getlogin(@Request() req) {
    return req.user
    // return this.authService.login(req.user);
  }
}
