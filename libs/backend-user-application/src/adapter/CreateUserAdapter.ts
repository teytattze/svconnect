import { BaseUseCaseAdapter } from '@svconnect/backend-common-core';
import { CreateUserPort, UserRole } from '@svconnect/backend-user-core';
import { Exclude, Expose, plainToClass } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

@Exclude()
export class CreateUserAdapter
  extends BaseUseCaseAdapter
  implements CreateUserPort
{
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  firstName: string;
  @Expose()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  lastName: string;
  @Expose()
  @IsEmail()
  email: string;
  @Expose()
  @IsString()
  @MinLength(8)
  password: string;
  @Expose()
  @IsEnum(UserRole, { each: true })
  @IsArray()
  @IsOptional()
  roles?: UserRole[];

  static async new(payload: CreateUserPort): Promise<CreateUserAdapter> {
    const adapter = plainToClass(CreateUserAdapter, payload);
    await adapter.validate();
    return adapter;
  }
}
