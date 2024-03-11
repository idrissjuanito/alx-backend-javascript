export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentList = students;
  return studentList.filter((student) => student.location === city)
    .map((student) => {
      newGrades.forEach((grade) => {
        if (grade.studentId === student.id) student.grade = grade.grade;
        else student.grade = 'N/A';
      });
      return student;
    });
}
