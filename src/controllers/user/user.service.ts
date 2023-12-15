import { Injectable } from '@nestjs/common';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
  private users: UserModel[] = [
    { address: '25 marti ou 22', age: 28, id: '232', name: 'giorgos nonis' },
  ];

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

  getUsers() {
    return [...this.users];
  }
}
