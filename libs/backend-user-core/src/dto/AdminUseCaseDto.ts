import { BaseUseCaseDto } from '@svconnect/backend-common-core';
import { Exclude } from 'class-transformer';

@Exclude()
export class AdminUseCaseDto extends BaseUseCaseDto {}
