class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;

    console.log(`User created: ${name}`);
  }
}

const user1 = new User("Antonio", 30);
const user2 = new User("Maria", 25);
const user3 = new User("João", 28);
const user4 = new User("Ana", 22);
const user5 = new User("Carlos", 35);
