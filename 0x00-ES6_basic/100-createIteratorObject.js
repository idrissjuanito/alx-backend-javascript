export default function createIteratorObject(report) {
  const employees = [];
  for (const value of Object.keys(report.allEmployees)) {
    employees.push(...report.allEmployees[value]);
  }
  return employees;
}
