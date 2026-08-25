// var c = "ultron";
// console.log(a);

// let a = 40;
// let b = 50;
// if (a > b) {
//     console.log("a is greater than b");
// }
// else {
//     console.log("b is greater than a");
// }

// function abes(){
//     console.log("hello");
//     console.log("World");
// }
// abes();

// console.log("\n===== Function with parameter =====");
// function greet(fname, lname){
//     console.log("Hello", fname, lname);
// }
// greet("Abes", "Kumar");

// function add(x, y){
//     return x+y;
// }
// let result = add(20, 30);
// console.log("Sum: ", result);

// function fullname(fname = "ABES", lname = "Engineering College"){
//     return fname + " " + lname;
// }
// console.log(fullname());
// console.log(fullname("Mohd", "Sheeraz"));

// function totalMarks(Maths, Science, English){
//     return Maths + Science + English;
// }
// function add(marks){
//     return (marks/300)*100;
// }
// let total = totalMarks(45, 43, 42);
// let percentage=add(total);
// console.log("Total Marks: ", percentage);

// let count = 10;
// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// let count = 1;
// do {
//     console.log("Node.js Class");
//     count++;
// }while (count <= 5);

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//     sum += arr[i];
// }
// console.log("Sum: ", sum);

// let arr = [10, 20, 30, 40, 50];
// let sum = 0;
// for (let i of arr) {
//     console.log(i);
//     sum += i;
// }
// console.log("Sum: ", sum);

// let students = [
//     ["Alice", 85],
//     ["Bob", 90],
//     ["Charlie", 78]
// ];
// console.log(students[0][0], "scored", students[0][1]);
// console.log(students[1][0], "scored", students[1][1]);
// console.log(students[2][0], "scored", students[2][1]);
// for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < students[i].length; j++) {
//         console.log(students[i][j]);
//     }
// }

const students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 90 },
    { name: "Charlie", marks: 78 }
];
// console.log(students[0].name, "scored", students[0].marks);
// console.log(students[1].name, "scored", students[1].marks);
// console.log(students[2].name, "scored", students[2].marks);
// console.log(students);
for (let key in students) {
    console.log(students[key].name, "scored", students[key].marks);
}