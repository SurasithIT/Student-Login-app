var Student = require("../model/model");
console.log(Student);

module.exports = {
  student_login: (req, res) => {
    let student = req.body;
    Student.login(student, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  },
  get_dashboard: (req, res) => {
    Student.dashboard((err, result) => {
      if (!err) {
        res.json(result);
      }
    });
  }
};
