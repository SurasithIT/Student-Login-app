let studentData = require("./data");

class Student {
  constructor(student) {
    this.SID = student.SID;
    this.password = student.password;
    this.firstname = student.firstname;
    this.lastname = student.lastname;
    this.status = student.status;
  }
}

Student.login = (student, result) => {
  //   console.log(student);
  console.log(student.email.substring(8, 22));
  if (student.email.substring(8, 23) === "@cskmitl.ac.th") {
    let SID = parseInt(student.email.substring(0, 8));
    let password = student.password;
    // console.log(SID);
    // console.log(password);
    let res = studentData.map((val, sid) => {
      if (val.status == "logged in") {
        val.status = "logged in";
        console.log("logged in");
        // result(null, "You are already logged in");
        return "You are already logged in";
      }
      if (SID === val.SID) {
        if (password === val.password) {
          console.log("Login true");
          val.status = "logged in";
          //   result(null, "logged in");
          return "logged in";
        } else {
          return "Wrong password!";
        }
      } else {
        return "Email or password was wrong!";
      }
    });
    result(null, res);
  } else {
    let err = { error: true, message: "Email in invalid!" };
    result(err, null);
  }
};
Student.dashboard = result => {
  result(null, studentData);
};
// Student.creatStudent = (newStudent, result) => {};
module.exports = Student;
