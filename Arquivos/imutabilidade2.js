const students = [
    {
        name: 'Aline',
        grade: 10
    },

    {
        name: 'Guilherme',
        grade: 9
    },
    {
        name: 'Pedro',
        grade: 4
    },
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 6)
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:')
console.log(students);