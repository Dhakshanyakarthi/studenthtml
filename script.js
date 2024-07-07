function storeStudent() {
    const name = document.getElementById('studentName').value;
    const id = document.getElementById('studentID').value;
    const major = document.getElementById('studentMajor').value;

    if (name && id && major) {
        const student = {
            name: name,
            id: id,
            major: major
        };

        let students = localStorage.getItem('students');
        if (students) {
            students = JSON.parse(students);
        } else {
            students = [];
        }

        students.push(student);
        localStorage.setItem('students', JSON.stringify(students));
        displayStudents();
    } else {
        alert('Please fill out all fields.');
    }
}

function displayStudents() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';

    let students = localStorage.getItem('students');
    if (students) {
        students = JSON.parse(students);

        students.forEach((student, index) => {
            const studentDiv = document.createElement('div');
            studentDiv.className = 'student';
            studentDiv.innerHTML = `
                <p>${index + 1}. ${student.name} (ID: ${student.id}) - Major: ${student.major}</p>
            `;
            studentList.appendChild(studentDiv);
        });
    } else {
        studentList.innerHTML = '<p>No students stored.</p>';
    }
}

// Display students on page load
document.addEventListener('DOMContentLoaded', displayStudents);
