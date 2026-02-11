let user = {
    name: "John",
    age: 30
};
let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name")

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}
let user = makeUser("John", 30);
alert(user.name); // John

let user = { name: "John" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };
// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);
// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);
alert( user.sizes === clone.sizes ); // true, same object
// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;
    return {
        father: man,
        mother: woman
    }
}
let family = marry({
    name: "John"
}, {
    name: "Ann"
});

let user = {
    name: "John",
    age: 30
};
user.sayHi = function() {
    alert("Hello!");
};
user.sayHi(); // Hello!

let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
    alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;
// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)
admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

function BigUser() {
    this.name = "John";
    return { name: "Godzilla" };  // <-- returns this object
}
alert( new BigUser().name );  // Godzilla, got that object

let user = {}; // user has no address
alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)

let key = "firstName";
let user1 = {
    firstName: "John"
};
let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

let user = { // belongs to another code
    name: "John"
};

let id = Symbol("id");
user[id] = 1;
alert( user[id] ); // we can access the data using the symbol as the key

let id = Symbol("id");
let user = {
    name: "John",
    age: 30,
    [id]: 123
};
for (let key in user) alert(key); // name, age (no symbols)
// the direct access by the symbol works
alert( "Direct: " + user[id] ); // Direct: 123

let user = {
    name: "John",
    money: 1000,
    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },
    // for hint="number" or "default"
    valueOf() {
        return this.money;
    }
};
alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500

