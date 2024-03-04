export default function createIteratorObject(report) {
  const employees = [];
  for (const value of report.allEmployees) {
    employees.push(...value);
  }
  return employees;
}
