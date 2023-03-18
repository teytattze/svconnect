import { ClassValidationDetails, ClassValidator } from '../ClassValidator';
import { Exception } from '../Exception';
import { Optional, isNotUndefined } from '../type';

export class BaseUseCaseAdapter {
  async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> =
      await ClassValidator.validate(this);

    if (isNotUndefined(details)) {
      throw Exception.new({ statusCode: 400, data: details });
    }
  }
}
