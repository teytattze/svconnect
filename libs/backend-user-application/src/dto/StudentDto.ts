import { BaseHttpDto } from '@svconnect/backend-common-application';

export class StudentDto extends BaseHttpDto {
  projectIds: string[];
}
