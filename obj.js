const firstName = "Yagnesh";

const lastName = "Modh";

const user = {
    firstName,
    lastName,
    fullName: function() {
        console.log(this);
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.fullName());