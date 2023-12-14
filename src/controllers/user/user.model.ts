export class UserModel {
  constructor(
    public id: string,
    public name: string,
    public age: number,
    public address: string,
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
  }
}
