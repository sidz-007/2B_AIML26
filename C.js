// // class Hello{
// //     // constructor (){
// //     //     console.log("Hello, World!");
// //     // }
// //     constructor (name){
// //         this.empname = name;
// //         console.log(this.empname);
// //         this.faculty = "Computer Science";
// //     }

// // }
// // let h = new Hello("Sheeraz");
// // console.log(h.faculty);
// class student {

//     // constructor(name, roll, year){
//     //     this.rollNumber = roll;
//     //     this.Name = name;
//     //     this.Year = year;
//     // }
//     //     display(){
//     //         console.log("Student Name: ", this.Name);
//     //         console.log("Student Roll No: ", this.rollNumber);
//     //         console.log("Student Year: ", this.Year);
//     //     }
//     static fname = "Ali";
//     static lname = "Khan";
//      display(){
//         console.log(student.fname);
//         console.log(student.lname);
// }
// }

// // student.display();
// let s1 = new student();
// s1.display();
// // let  s2 = new student ("Ali", 101, 2023);
// // s2.display();
// // let  s3 = new student ("Ahmed", 102, 2022);
// // s3.display();
class Hello{
//     constructor (){
//         console.log("Hello, constructor");
//     }
// }
// class Hi extends Hello{
// constructor (){
//     super(); // super() is used to call the constructor of the parent class (Hello) from the child class (Hi). It allows the child class to inherit properties and methods from the parent class. In this case, it ensures that when an instance of Hi is created, the constructor of Hello is also executed, printing "Hello, constructor" to the console.
//     console.log("Hi, constructor");
// }
info(){
    console.log("Info Hello");
}
}
class Hi extends Hello{
    info(){
        super.info();
        console.log("Info Hi");
    }
}
let h1 = new Hi();
h1.info();