import { Body, Controller, Inject, Post } from '@nestjs/common';
import { HttpResponse } from '@svconnect/backend-common-application';
import { CreateUserUseCase, DIToken } from '@svconnect/backend-user-core';

import { CreateUserAdapter } from '../adapter/CreateUserAdapter';
import { CreateUserBody } from '../dto/CreateUserBody';
import { UserDto } from '../dto/UserDto';

@Controller()
export class UserController {
  constructor(
    @Inject(DIToken.CREATE_USER_USE_CASE)
    private readonly createUserUseCase: CreateUserUseCase,
  ) {}

  @Post()
  async createUser(
    @Body() body: CreateUserBody,
  ): Promise<HttpResponse<UserDto>> {
    const adapter = await CreateUserAdapter.new(body);
    const user = await this.createUserUseCase.execute(adapter);
    return HttpResponse.success({ data: user });
  }
}
