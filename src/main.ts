// Давайте побудуємо будинок.

// Створіть абстрактний клас House, в ньому повинна бути наступна логіка
// властивість door – вона може бути закрита, або відкрита.
// властивість key – об'єкт класу Key.
// конструктор приймає аргумент класу Key та зберігає його у властивість key.
// метод comeIn, який додає об'єкт класу Person у властивість tenants і це спрацьовує лише, якщо door відкрита.
// абстрактний метод openDoor приймає аргумент класу Key

abstract class House {
  public door: boolean = false; 
  public tenants: Person[] = [];

  constructor(private key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (!this.door) {
      console.log("Something bad with your key");
      return;
    }
    this.tenants.push(person);
    console.log("Tenant with name " + person.name + " was added");
  }
 
}

// Створіть клас MyHouse, який реалізує клас House
// створюємо метод openDoor, оскільки він приймає ключ, звіряємо збережений ключ у властивості key чи дорівнює він ключу з аргументу, якщо так, відкриваємо двері.


class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now opened!');
    } else {
      console.log("Bad key");
    }
  }
}

class Key {
  public readonly signature: number;
  constructor() {
    this.signature = Math.floor(Math.random() * (60000 - 10000 + 1)) + 10000;
    console.log("The key was created with signature: " + this.signature);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private readonly key: Key;
  public readonly name: string;
  constructor(key: Key, name: string) {
    this.key = key;
    this.name = name;
    console.log("Person is created, key: " + key.signature);
  }

  getKey(): Key {
    return this.key;
  }
}

const key: Key = new Key();
const key2: Key = new Key();

const andrey: Person = new Person(key, "Andrey");
const pasha: Person = new Person(key, "Pasha");

const house: MyHouse = new MyHouse(andrey.getKey());
house.openDoor(andrey.getKey());
house.comeIn(andrey);

console.log(house.tenants, house.door, house.key);

const house2: MyHouse = new MyHouse(key2);
house2.openDoor(andrey.getKey());
house2.comeIn(andrey);

// Створіть об'єкт Key

// є тільки властивість signature
// під час створення об'єкта генерує випадкове число та зберігає його у signature
// метод getSignature повертає випадкове число з signature
// Створіть об'єкт Person

// конструктор приймає ключ класу Key і зберігає його у властивість key
// метод getKey повертає key
// Зробіть так, щоб мешканець потрапив додому.