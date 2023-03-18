import { BaseHttpDto } from '@svconnect/backend-common-application';

export class LecturerDto extends BaseHttpDto {
  specialityIds: string[];
  supervisingProjectIds: string[];
}
