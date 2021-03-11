export default class User {
  userId?: number;
  id: number;
  title: string;
  completed?: boolean;
  //   _name?: string;
  //   _age?: number;
  constructor(title: string, id: number, userId?: number, completed?: boolean) {
    this.title = title;
    this.userId = userId;
    this.id = id;
    this.completed = completed;
  }

  //   public set age(age: number | undefined) {
  //     this._age = age;
  //   }

  //   public get age(): number | undefined {
  //     return this._age;
  //   }

  speak() {
    console.log("I speak User");
  }
}
