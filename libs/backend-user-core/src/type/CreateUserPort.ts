import { UserRole } from '../enum/UserRole';

export type CreateUserPort = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles?: UserRole[];
};
