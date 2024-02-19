let isEven: boolean = false;

type User = {
    name: string,
    age: number
}

const peshoUser = {
    name: "Pesho",
    age: 21
}

interface AnotherUser {
    firstName: string,
    id: number,

    getUserName: () => string
}

// API call
const anotherUserList = [
    { firstName: "Ivan", id: 1 },
    { firstName: "Pavel", id: 2 }
] as AnotherUser[];

class AnotherUserClass implements AnotherUser {
    firstName: string;
    id: number;

    getUserName() {
        return this.firstName
    }
}
anotherUserList.forEach((firstName, id) => {
    ////

    console.log(firstName, id);

})

peshoUser.age = 22
class Human {
    speak(){
       console.log("Hello!");
       
    }
}

class Person extends Human {
    private name: string;
    public age: number;

    constructor(name: string, age: number){
        super();
        this.name = name,
        this.age = age
    }
}

const personPesho = new Person('Pesho', 33);
personPesho.speak();


function getIdentity<T>(id: T) {
    console.log(id);
    
}
getIdentity<string>("123");
getIdentity<number>(123);

enum PaymentStatus{
    Failed,
    Successful,
    Pending
}
