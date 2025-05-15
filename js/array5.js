let users = [
    {
        name: "John",
        product: [
            {
                name: "macbook",
                price: 1000
            },
             {
                name: "iphone",
                price: 500
            },
            {
                name: "ipad",
                price: 800
            }
        ],
    },
     {
        name: "Ramesh",
        product: [
            {
                name: "macbook",
                price: 100
            },
             {
                name: "iphone",
                price: 500
            },
            {
                name: "ipad",
                price: 800
            }
        ],
    },
     {
        name: "Sujan",
        product: [
            {
                name: "macbook",
                price: 1000
            },
             {
                name: "iphone",
                price: 500
            },
            {
                name: "ipad",
                price: 800
            }
        ],
    }
]

users.map((user) => {
    user.product.map((p) => {
        if (p.name === "macbook") {
            console.log(`${user.name} bought ${p.name} for Rs. ${p.price}`);
        }
    });
});
 
const user1 = [
    {
        name: "ramesh",
        age: 25,
        address: "kathmandu",
        email: "ramesh@gmail.com",
        password: "ramesh123"
    },
    "ram",
    "shyam",
    "krishna",
    "suresh",
    "hari",
]

const registeredUser = (name) => {
   let foundUser = user1.find((u) => {
        return u.name === name;
    });

    if(foundUser) {
        console.log(`${foundUser.name} is registered`);
    }

    else {
        console.log(`${name} is not registered`);
        
    }
}

registeredUser("sugam");


const user2 = [
    "ramesh",
    "suresh",
    "ram",
    "shyam",
    "hari",
    "mohan",
    "rohan"
];

const registeredUser2 = (name2) => {
    let foundUser2 = user2.find((u) => {
        return u.toLowerCase() === name2.toLowerCase();
    });
    if(foundUser2) {
        console.log(`${foundUser2} is a registered user`);
    }
    else {
        console.log(`${name2} is NOT a registered user`);
    }
}

registeredUser2("mohan");


let accountNumber = "123456789123456789";

function maskedAcc(accNumber) {
    let lastfour = accNumber.slice(-4);
    let maskedPart = "X".repeat(accNumber.length - 4);
    return maskedPart + lastfour;
}

let finalMaskedNumber = maskedAcc(accountNumber);
console.log(finalMaskedNumber);
