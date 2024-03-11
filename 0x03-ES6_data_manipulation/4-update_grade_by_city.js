export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((stud) => stud.location === city)
    .map((stud) => {
      const student = stud;
      newGrades.forEach((grade) => {
        if (grade.studentId === student.id) student.grade = grade.grade;
        else student.grade = 'N/A';
      });
      return student;
    });
}
