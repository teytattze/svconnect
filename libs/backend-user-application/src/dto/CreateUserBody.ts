import { CreateUserPort, UserRole } from '@svconnect/backend-user-core';

export class CreateUserBody implements CreateUserPort {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles?: UserRole[];
}
