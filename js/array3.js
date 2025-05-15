let cartItems = [
    {
        name: "Ramesh",
        products: [
            {
                title: "laptop",
                price: 1000
            },
            {
                title: "mobile",
                price: 500
            },
            {
                title: "watch",
                price: 200
            }
        ]
    },

    {
        name: "Dinesh",
        products: [
            {
                title: "phone",
                price: 3000
            },
            {
                title: "mobile",
                price: 500
            },
            {
                title: "watch",
                price: 200
            }
        ]
    },

    {
        name: "Hitesh",
        products: [
            {
                title: "tv",
                price: 2000
            },
            {
                title: "mobile",
                price: 500
            },
            {
                title: "watch",
                price: 200
            }
        ]
    }
];


cartItems.map((item) => {
    const total = item.products.reduce((acc, current) => acc + current.price, 0);
    console.log(`${item.name} has total ${total}`);
 });


 

 const cartItems1 = [
    {
        name: "jeans",
        price: 2000
    },

    {
        name: "tshirt",
        price: 3000
    },

    {
        name: "jacket",
        price: 4000
    },

    {
        name: "pants",
        price: 5000
    },

    {
        name: "gloves",
        price: 6000
    }
 ]

const total1 = cartItems1.reduce((acc, current) => acc + current.price, 0);
console.log(total1); 