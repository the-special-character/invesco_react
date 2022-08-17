// const user1 = {
//     firstName: 'Yagnesh',
//     lastName: 'Modh',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const user2 = {
//     firstName: 'Virat',
//     lastName: 'Kohli',
//     fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

class User {
    // call only once while creating instance
    constructor(firstName, lastName, isEmployee = false) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.isEmployee = isEmployee;
    }

    set firstName(value) {
        this._firstName = User.nameUpperCase(value)
    }

    get firstName() {
        return this._firstName
    }

    set lastName(value) {
        this._lastName = User.nameUpperCase(value)
    }

    get lastName() {
        return this._lastName
    }

    static nameUpperCase(value) {
        return `${value[0].toUpperCase()}${value.slice(1)}`;
    }

    #fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    getUserInfo() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            fullName: this.#fullName(),
            isEmployee: this.isEmployee
        };
    }

    changeFirstName(name) {
        this.firstName = name;
    }
}

class SuperUser extends User {
    constructor() {
        super("Mighty", "God")
    }

    getUserInfo() {
        const data = super.getUserInfo()
        return {
            ...data,
            isAdmin: true
        }
    }

}

const su = new SuperUser()
console.log(su.getUserInfo());
console.log(su);

const name = "rohit"

console.log(User.nameUpperCase(name));


const user1 = new User("yagnesh", "modh");


const user2 = new User("virat", "kohli");
user2.changeFirstName("virrat")
console.log(user2.getUserInfo());
