interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const std1: Student = {
    firstName: 'Tchoffo',
    lastName: 'Idriss',
    age: 23,
    location: 'Cameroon',
}

const std2: Student = {
    firstName: 'Fru',
    lastName: 'Godwill',
    age: 45,
    location: 'Cameroon',
}

const studentList = [ std1, std2 ];

const tb = document.createElement('table') as HTMLTableElement
const tr = document.createElement('tr') as HTMLTableRowElement
for(let key in studentList) {
    const td = document.createElement('td')
    td.innerText = key
    tr.appendChild(td)
}
studentList.forEach(student => {
   const tbrow = document.createElement('tr') as HTMLTableRowElement
   for (const [ key, value ] of Object.entries(student)) {
       const td = document.createElement('td') as HTMLTableDataCellElement
       td.innerText = value.toString()
       tbrow.appendChild(td)
   }
   tb.appendChild(tbrow)
})
document.body.appendChild(tb)
