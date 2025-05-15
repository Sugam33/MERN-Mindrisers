let cart = [
    {
        product: "Apple",
        price: 100,
        quantity: 2
    },
    {
        product: "Mango",
        price: 50,
        quantity: 3
    },
    {
        product: "Banana",
        price: 150,
        quantity: 4
    },
    {
        product: "Pineapple",
        price: 250,
        quantity: 5
    }
];

// const total = cart.reduce((acc, curr) => {
//     return acc + curr.price;
// }, 0);

// console.log("The total is: ", total);

const total1 = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
}, 0);
console.log("The total is: ",total1);


let courses = [
    {
        class: "maths",
        completedStatus: false
    },
    {
        class: "science",
        completedStatus: true
    },
    {
        class: "english",
        completedStatus: false
    },
    {
        class: "history",
        completedStatus: true
    },
    {
        class: "geography",
        completedStatus: false
    },
]

let completedCourse = [];
let notCompletedCourse = [];

courses.forEach((item) => {
    if(item.completedStatus) {
        completedCourse.push(item.class);
    }

    else {
        notCompletedCourse.push(item.class);
    }
});

console.log(`The completed course is: ${completedCourse}`);
console.log(`The non completed course is: ${notCompletedCourse}`);

// function addition(x, y) {
//     return x + y;
// }

// console.log(addition(2, 4));


const countries = [
    {
        name: "India",
        countryCode: "IN",
    },
    {
        name: "USA",
        countryCode: "US",
    },
    {
        name: "United Kingdom",
        countryCode: "UK",
    },
    {
        name: "Australia",
        countryCode: "AU",
    },
    {
        name: "Germany",
        countryCode: "DE",
    },
    {
        name: "Nepal",
        countryCode: "NP",
    }
];


function findCountryCode(countryName) {
   let foundCountry = countries.find((country) => {
       return country.name.toLowerCase().trim() === countryName.toLowerCase().trim(); 
   });
   if(foundCountry) {
    console.log(`The country code of ${countryName} is: ${foundCountry.countryCode}`);
   }
   else {
    console.log("Unable to find country code");
   }
  }

  findCountryCode(" india ");


  let user = ["sanjaya", "shyam", "santosh", "ajaya", "bijaya", "sita", "gita", "rita"];

  let registeredUser = (name) => {
    let foundName = user.find((naam) => {
        return naam.toLowerCase() === name.toLowerCase().trim();
    });
    if(foundName) {
        console.log(`User ${foundName} is registered`);
    }
    else {
        console.log("This user is not registered");
    }
  }

  registeredUser("Shyam");
  registeredUser("sugam");
  registeredUser(" rita ");


  let users = [
    {
        name: "Sanjaya",
        age: 25,
        email: "sanjaya@gmail.com",
        password: "sanjaya123"
    },

    {
        name: "Shyam",
        age: 25,
        email: "shyam@gmail.com",
        password: "shyam123"
    },

    {
        name: "Santosh",
        age: 25,
        email: "santosh@gmail.com",
        password: "santosh123"
    },
 
  ];

  let findEmail = (name) => {
    let foundName = users.find((naam) => {
        return naam.name === name;
    });

    if(foundName) {
        console.log(`The email of ${foundName.name} is ${foundName.email}`);
    }
    else {
        console.log("Users not found");
    }
  }

  findEmail("Santosh");

// find 3000 vanda kaam price ko laptop
  const product = [
    {
        title: "laptop",
        price: 4000,
        quantity: 10,
    },

    {
        title: "mobile",
        price: 3000,
        quantity: 20,
    },

    {
        title: "watch",
        price: 2000,
        quantity: 30,
    },

    {
        title: "wallet",
        price: 1000,
        quantity: 30,
    }
  ]

  let filterPrice = product.filter((p) => {
    return p.price < 3000;
  });

  console.log(filterPrice);
  
  
  let filterWithName = filterPrice.map((t) => {
    return t.title;
  });

  console.log(`The name of products with price less than 3000 are: ${filterWithName}`);

  let filterPrice1 = product.filter((p) => {
    return p.price == 3000;
  });

  console.log(filterPrice1);
  
  
  let filterWithName1 = filterPrice1.map((t) => {
    return t.title;
  });

  console.log(`The name of products with price less than 3000 are: ${filterWithName1}`);



  // split method 
  const sentence = "I am a software developer and I am a software developer and I am a software developer";

  const words = sentence.split(" ");
  const totalWords = words.length;
  console.log(totalWords);
  

  

