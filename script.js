document.addEventListener('DOMContentLoaded', () => {
    // Add course row functionality
    document.getElementById('addCourse').addEventListener('click', () => {
        const newRow = document.createElement('div');
        newRow.className = 'course-row';
        newRow.innerHTML = `
            <input type="text" placeholder="Course name" class="course-name">
            <select class="course-grade">
                <option value="">Select Grade</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="F">F</option>
            </select>
        `;
        document.getElementById('courseRows').appendChild(newRow);
    });

    // GPA Calculation functionality
    document.getElementById('calculateBtn').addEventListener('click', () => {
        const gradeElements = document.querySelectorAll('.course-grade');
        const gradeValues = [];
        let isValid = true;

        // Grade conversion map
        const gradePoints = { 'A': 4, 'B': 3, 'C': 2, 'D': 1, 'F': 0 };

        // Validate and collect grades
        gradeElements.forEach(select => {
            if (select.value === '') {
                select.classList.add('invalid');
                isValid = false;
            } else {
                select.classList.remove('invalid');
                gradeValues.push(gradePoints[select.value]);
            }
        });

        if (!isValid) {
            alert('Please select a grade for all courses!');
            return;
        }

        // Calculate GPA
        const total = gradeValues.reduce((sum, value) => sum + value, 0);
        const gpa = total / gradeValues.length;
        
        // Display result
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `
            Calculated GPA: <span style="color: #27ae60;">${gpa.toFixed(2)}</span>
        `;
    });
});
