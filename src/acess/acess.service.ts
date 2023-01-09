import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AcessService {
  constructor(
    private jwtService: JwtService
  ) { }

  getToken() {
    return this.jwtService.sign({ username: 'john' })
  }
}
