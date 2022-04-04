import { UserType } from '../entity/userType';

export class UserDto {
  readonly username: string;
  readonly password: string;
  readonly type: UserType;
}
