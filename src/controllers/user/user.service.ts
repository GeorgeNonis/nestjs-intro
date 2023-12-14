import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  users: UserModel[] = [];

  addUser({
    name,
    age,
    address,
  }: {
    name: string;
    age: number;
    address: string;
  }) {
    const id = new Date().toString();
    const user = new UserModel(id, name, age, address);
    this.users.push(user);
    return id;
  }
}
