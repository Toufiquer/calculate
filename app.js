let totalStudent = document.getElementById("totalStudent");
let presentStudent = document.getElementById("presentStudent");
const runFunction = () => {
  let totalStudentValue = Number(totalStudent.value);
  let presentStudentValue = Number(presentStudent.value);
  let result = (presentStudentValue * 100) / totalStudentValue;
  document.getElementById("percentageOfStudent").value = result;
};

const keyUpFunction = () => {
  let totalStudentValue = Number(totalStudent.value);
  let presentStudentValue = Number(presentStudent.value);
  let result = (presentStudentValue * 100) / totalStudentValue;
  document.getElementById("percentageOfStudent").value = result;
};
