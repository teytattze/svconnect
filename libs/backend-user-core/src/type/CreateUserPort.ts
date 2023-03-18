import { UserRole } from '../enum/UserRole';

export type CreateUserPort = {
  firstName: string;
  lastName: string;
  email: string;
  emailVerified?: boolean;
  password: string;
  roles?: UserRole[];
};
