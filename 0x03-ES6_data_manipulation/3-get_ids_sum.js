export default function getStudentIdsSum(students) {
  return students.reduce((cml, current) => cml + current.id, 0);
}
