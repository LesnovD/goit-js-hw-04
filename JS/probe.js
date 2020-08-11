// const friends = ["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"];
// const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// const logItems = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(i, array[i]);
//   }
// };

// logItems(friends);
// logItems(numbers);

// Task 2

// const calculateEngravingPrice = function (message, pricePerWord) {
//   const words = message.split(" ");
//   const result = words.length * pricePerWord;
//   return result;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// Task 3
// const findLongestWord = function (string) {
//   const words = string.split(" ");
//   let longestWord = words[0];
//   for (let i = 1; i < words.length; i += 1) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// Task 4
// const formatString = function (string) {
//   if (string.length > 40) {
//     let shortString = string.split("");
//     shortString.length = 40;
//     shortString = shortString.join(" ");
//     const rezult = shortString + "...";
//     return rezult;
//   }
//   return string;
// };

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // вернется оригинальная строка

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

// console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
// // вернется форматированная строка

// Task 5
// const checkForSpam = function (message) {
//   message = message.toLowerCase();
//   if (message.includes("sale")) {
//     return true;
//   } else if (message.includes("spam")) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// Task 6

// let total = 0;
// const numbers = [];
// do {
//   let input = prompt("введите число");
//   if (input === null) {
//     break;
//   }
//   input = Number(input);
//   numbers.push(input);
// } while (true);

// const add = function (numbers) {
//   if (numbers.length === 0) {
//     alert("Вы не ввели число");
//     return;
//   }
//   for (const number of numbers) {
//     total += number;
//   }
//   console.log(`Общая сумма чисел равна ${total}`);
// };
// add(numbers);

// task 7
// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// const isLoginValid = function (login) {
//   if (login.length >= 4) {
//     return true;
//   }
//    if (login.length <= 16) {
//     return true;
//   }
//   return false;
//   console.log(isLoginValid);
// };
// isLoginValid("Rissa");
// const isLoginUnique = function (allLogins, login) {
//   // твой код
// };

// const addLogin = function (allLogins, login) {
//   // твой код
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
// console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
// console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
// console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'

// Module 3
// Task1
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// console.table(user);
// const entries = Object.entries(user);
// for (const entrie of entries) {
//   const key = entrie[0];
//   const value = entrie[1];
//   console.log(`${key}: ${value}`);
// }

// Task2
// const countProps = function (obj) {
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// Task3

// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   let bestEmployeeName = keys[0];
//   const values = Object.values(employees);
//   let bestEmployeeValue = values[0];
//   for (let i = 0; i < values.length; i += 1) {
//     if (values[i] > bestEmployeeValue) {
//       bestEmployeeValue = values[i];
//       bestEmployeeName = keys[i];
//     }
//   }
//   return bestEmployeeName;
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// Task 4

// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let total = 0;
//   for (const value of values) {
//     total += value;
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// Task 5

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];
// // for (const product of products) {
// //   console.log(product);
// // }

// const getAllPropValues = function (products, prop) {
//   const allProv = [];
//   for (const product of products) {
//     allProv.push(product[prop]);
//   }
//   return allProv;
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// Task 6

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProdcuts, productName) {
//   let totalPrice = 0;
//   for (const product of allProdcuts) {
//     if (product.name === productName) {
//       totalPrice = product.price * product.quantity;
//     }
//   }
//   return totalPrice;
// };

// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроид")); // 2800

// // Modyle4
// Task1

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// Task2
// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);
//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// Module 5
// Task1
// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };
// Account.prototype.getInfo = function () {
//   console.log(this.login);
//   console.log(this.email);
// };
// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: "Mangozedog",
//   email: "mango@dog.woof",
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: "Poly",
//   email: "poly@mail.com",
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

// Task2
// class User {
//   constructor({ name, age, followers }) {
//     this.name = name;
//     this.age = age;
//     this.followers = followers;
//   }
//   getInfo() {
//     console.log(
//       `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
//     );
//   }
// }

// const mango = new User({
//   name: "Mango",
//   age: 2,
//   followers: 20,
// });

// mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//   name: "Poly",
//   age: 3,
//   followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers

// Task3
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     console.log(this.items);
//     return this.items;
//   }
//   addItem(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       if (this.items.includes(item)) {
//         this.items.splice(item[i], 1);
//       }
//     }
//   }
// }

// // Добавь методы класса:

// //     getItems() - возвращает массив текущих товаров
// //     addItem(item) - получает новый товар и добавляет его к текущим
// //     removeItem(item) - получет товар и, если он есть, удаляет его из текущих

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

// storage.addItem("Дроид");
// console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]

// task4
// class StringBuilder {
//   constructor([value]) {
//     this._value = [value];
//   }
//   get value() {
//     return this._value.join(" ");
//   }
//   append(str) {
//     this._value.push(str);
//     return this._value.join(" ");
//   }
//   prepend(str) {
//     this._value.unshift(str);
//     return this._value.join(" ");
//   }
//   pad(str) {
//     this._value.push(str);
//     this._value.unshift(str);
//     return this._value.join(" ");
//   }
// }

// // Добавь классу следующий функционал:

// //     Геттер value - возвращает текущее значение поля _value
// //     Метод append(str) - получает парметр str (строку) и добавляет ее в конец _value
// //     Метод prepend(str) - получает парметр str (строку) и добавляет ее в начало value
// //     Метод pad(str) - получает парметр str (строку) и добавляет ее в начало и в конец _value

// const builder = new StringBuilder(".");

// builder.append("^");
// console.log(builder.value); // '.^'

// builder.prepend("^");
// console.log(builder.value); // '^.^'

// builder.pad("=");
// console.log(builder.value); // '=^.^='

// Task5
class Car {
  //  static getSpecs(car) = `${maxSpeed} , ${speed} , ${isOn} , ${distance} , ${price}`

  // // * Добавь статический метод `getSpecs(car)`,
  // * который принимает объект-машину как параметр и выводит
  // * в консоль значения свойств maxSpeed, speed, isOn, distance и price.
  // */

  /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, изначально 0
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль, значения true или false. Изначально false
   *  distance - общий киллометраж, изначально 0
   */
  constructor({}) {
    this.speed = 0;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = false;
    this.distance = distance;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }

  /*
   * Добавь геттер и сеттер для свойства price,
   * который будет работать с свойством цены автомобиля.
   */

  /*
   * Добавь код для того чтобы завести автомобиль
   * Записывает в свойство isOn значение true
   */
  turnOn() {
    this.isOn = true;
  }

  /*
   * Добавь код для того чтобы заглушить автомобиль
   * Записывает в свойство isOn значение false,
   * и сбрасывает текущую скорость в 0
   */
  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  /*
   * Добавялет к свойству speed полученное значение,
   * при условии что результирующая скорость
   * не больше чем значение свойства maxSpeed
   */
  accelerate(value) {
    if (value < this.maxSpeed) {
      this.speed = value;
    }
  }

  /*
   * Отнимает от свойства speed полученное значение,
   * при условии что результирующая скорость не меньше нуля
   */
  decelerate(value) {
    if (value > 0) {
      this.speed = this.speed - value;
    }
  }

  /*
   * Добавляет в поле distance киллометраж (hours * speed),
   * но только в том случае если машина заведена!
   */
  drive(hours) {
    if ((this.isOn = true)) {
      this.distance = hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
