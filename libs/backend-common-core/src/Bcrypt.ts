import * as bcrypt from 'bcrypt';

export class Bcrypt {
  static async hash(value: string): Promise<string> {
    return bcrypt.hash(value, 12);
  }

  static async compare(
    value: string,
    encryptedValue: string,
  ): Promise<boolean> {
    return bcrypt.compare(value, encryptedValue);
  }
}
