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
  protected save: boolean;
  private token: string;
  // Method
  login() {}
  register() {}
  constructor(id: number, firstname: string, lastname: string) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.save = false;
    this.token = '';
  }
}
let myUser = new User(1, 'john', 'dodo');

console.log(myUser);

/******* Access Modifiers (public, protected, private) *******/

// Subclass
class EnhancementUser extends User {
  location: string;
  constructor(
    id: number,
    firstname: string,
    lastname: string,
    location: string
  ) {
    super(id, firstname, lastname);
    this.location = location;
    this.save;
  }
}

let myNewUser = new EnhancementUser(2, 'Ricky', 'AT', 'Depok');
console.log(myNewUser);
