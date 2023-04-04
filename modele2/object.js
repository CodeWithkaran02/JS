//empty object 
let obj = {};
console.log(obj);
let objkarn = {
    "Name": "karuna karan",
    "Age": 23,
    "phone no": 9060319668,
    "last name ": "pandey"

};
console.log(objkarn)

let capAmrica = {
    Name: "Strve",
    Age: "9999",
    friend: ["Nastase", "thor", "tony", "buads", "bulu"],
    addres: {
        city: "Ranchi",
        state: "jharkhand",
    },
    isAveger: "false",
    Sayhi: function () {
        console.log("Captain America say hii");
    }

}

// check the code how to work objeck
console.log("After every code the sapret:" + capAmrica);

console.log(capAmrica);

//name of capAmirca
console.log(capAmrica.Name);

//Age of capAmirca
console.log(capAmrica.Age);

//funstion of capAmirca
console.log(capAmrica.friend);

//addres of object
console.log(capAmrica.addres);

//net Access
console.log(capAmrica.result);

//Access the city
console.log(capAmrica.addres.city);

//sayhi
console.log(capAmrica.Sayhi);

// call the function
capAmrica.Sayhi();

console.log("Object before update:" + capAmrica);

//Add a new key to object 
capAmrica.Movis = ["Avenger ", "Civil war", "Endgame"]
console.log("Object after update :" + capAmrica);

//delete the key
//delete.capAmirca.Movis;
//console.log(capAmrica);

// change the adddres 
capAmrica.addres.state = "New York";
console.log(capAmrica);

//change the value 
capAmrica.isAveger = true;
console.log(capAmrica);