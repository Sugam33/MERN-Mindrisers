const students = [
    {
        name: "John",
        paidStatus: true,
        scholarship: true
    },
    {
        name: "Jane",
        paidStatus: false,
        scholarship: false
    },
    {
        name: "Bob",
        paidStatus: true,
        scholarship: true
    },
    {
        name: "Alice",
        paidStatus: false,
        scholarship: true
    }
]


// students.forEach((student => {
//     if(student.paidStatus && student.scholarship)
//     {
//         console.log(`${student.name} can give the exams`);
//     }
//     else {
//         console.log(`${student.name} is not eligible to give the exams`);
//     }
// }));

students.map((student) => {
    if(student.paidStatus && student.scholarship)
        {
            console.log(`${student.name} can give the exams`);
        }
        else {
            console.log(`${student.name} is not eligible to give the exams`);
        }
});