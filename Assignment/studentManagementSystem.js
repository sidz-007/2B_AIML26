class student{
    static count = 0;
    constructor(name, rollno, marks){
        this.name = name;
        this.rollno = rollno;
        this.marks = marks;
        student.count++;
    }
    display(){
        console.log("Student Name: ", this.name);
        console.log("Student Roll No: ", this.rollno);
        console.log("Student Marks: ", this.marks);
        if(this.marks >= 50){
            console.log("Result: Pass");
        }else{
            console.log("Result: Fail");
        }
    }
}
let s1 = new student("Ali", 101, 75);
let s2 = new student("Ahmed", 102, 45);
let s3 = new student("Ayesha", 103, 85);
s1.display();
s2.display();
s3.display();
console.log(student.count);