/* 
What is a callback function?
-> It is a function that is passed as an argument to another function
*/

function fetchData(c) {
    console.log("fetching data...");

    setTimeout(() => {
        c("API successfully fetched");
    }, 2000);
}

fetchData((data) => {
    console.log(data);
});

const mutateArray = (arr, action) => {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = action(arr[i]);
    }
}


let myarr = [1, 2, 3, 4, 5];
mutateArray(myarr, (x) => {
    return x * 2;
});

console.log("This is mutated array", myarr);



// promise (resolve, reject, pending)

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     data: "data from promise"
        // })
        // // reject("Internal server error");

        resolve({
            email: "ramesh@gmail.com",
            password: "12345678"
        })
        reject("Error found");
    }, 5000);
})

promise1.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})