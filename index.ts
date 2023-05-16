/******* Basic Classes *******/

/**
 * Object User :
 * - User have personal info such as id, firstname, lastname
 * - User have method such as login(), register()
 * - Max Failed Login = 5
 */

// class -> OOP (Object Oriented Programmi \
// class -> Object instance
// Object literal vs Object Instance

class User {
  id: number;
  firstname: string;
  lastname: string;

  // Method
  login() {}
  register() {}
  constructor(id: number, firstname: string, lastname: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }
}
let myUser = new User(1, 'john', 'dodo');

console.log(myUser)