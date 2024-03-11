export default function getStudentIdsSum(students) {
  return students.reduce((cml, current) => cml + current, 0);
}
