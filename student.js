function printTop3Subjects() {
    const subjects = [
        { name: 'Science', marks: parseInt(document.getElementById('marks_science').value) || 0 },
        { name: 'Maths', marks: parseInt(document.getElementById('marks_maths').value) || 0 },
        { name: 'Social Science', marks: parseInt(document.getElementById('marks_social_science').value) || 0 },
        { name: 'English', marks: parseInt(document.getElementById('marks_english').value) || 0 },
        { name: 'Hindi', marks: parseInt(document.getElementById('marks_hindi').value) || 0 }
    ];
    subjects.sort((a, b) => b.marks - a.marks);
    alert(`Top 3 Subjects:\n1. ${subjects[0].name}\n2. ${subjects[1].name}\n3. ${subjects[2].name}`);
}

function printReportCard() {
    // Retrieve form data
    const name = document.getElementById('name').value;
    const rollNo = document.getElementById('roll_no').value;
    const className = document.getElementById('class').value;
    const section = document.getElementById('section').value;
    const scienceMarks = parseInt(document.getElementById('marks_science').value) || 0;
    const mathsMarks = parseInt(document.getElementById('marks_maths').value) || 0;
    const socialScienceMarks = parseInt(document.getElementById('marks_social_science').value) || 0;
    const englishMarks = parseInt(document.getElementById('marks_english').value) || 0;
    const hindiMarks = parseInt(document.getElementById('marks_hindi').value) || 0;
    const totalMarks = scienceMarks + mathsMarks + socialScienceMarks + englishMarks + hindiMarks;
    const percentage = (totalMarks / (5 * 100)) * 100;
    document.getElementById('reportName').innerText = name;
    document.getElementById('reportRollNo').innerText = rollNo;
    document.getElementById('reportClass').innerText = className;
    document.getElementById('reportSection').innerText = section;
    document.getElementById('reportScience').innerText = scienceMarks;
    document.getElementById('reportSocialScience').innerText = socialScienceMarks;
    document.getElementById('reportMaths').innerText = mathsMarks;
    document.getElementById('reportEnglish').innerText = englishMarks;
    document.getElementById('reportHindi').innerText = hindiMarks;
    document.getElementById('reportPercentage').innerText = percentage.toFixed(2) + '%';
    document.getElementById('reportCard').style.display = 'block';
}