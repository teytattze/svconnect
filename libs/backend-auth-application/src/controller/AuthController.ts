import { Controller, Inject, Post, Request, UseGuards } from '@nestjs/common';
import { AuthToken, GetAccessTokenUseCase } from '@svconnect/backend-auth-core';
import {
  LocalAuthGuard,
  RequestWithUser,
} from '@svconnect/backend-common-application';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AuthToken.GET_ACCESS_TOKEN_USE_CASE)
    private readonly getAccessTokenUseCase: GetAccessTokenUseCase,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request: RequestWithUser): Promise<string> {
    return await this.getAccessTokenUseCase.execute({
      user: request.user,
    });
  }
}
