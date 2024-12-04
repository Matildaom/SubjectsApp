function generateSubjectInputs() {
    const subjectCount = document.getElementById('subjectCount').value;
    const scoresSection = document.getElementById('scoresSection');
    const scoreInputs = document.getElementById('scoreInputs');
    scoreInputs.innerHTML = '';
    
    if (subjectCount <= 0) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    for (let i = 1; i <= subjectCount; i++) {
        scoreInputs.innerHTML += `
            <label for="score${i}">Subject ${i} Score:</label>
            <input type="number" id="score${i}" min="0" max="100" required><br>
        `;
    }
    scoresSection.classList.remove('hidden');
}

function getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function calculateResults() {
    const subjectCount = document.getElementById('subjectCount').value;
    let scores = [];
    let totalScore = 0;

    for (let i = 1; i <= subjectCount; i++) {
        let score = parseFloat(document.getElementById(`score${i}`).value);
        if (isNaN(score) || score < 0 || score > 100) {
            alert(`Invalid input for subject ${i}. Please enter a number between 0 and 100.`);
            return;
        }
        scores.push(score);
        totalScore += score;
    }

    let average = totalScore / subjectCount;
    let resultOutput = '<h2>Results:</h2>';
    scores.forEach((score, index) => {
        resultOutput += `Subject ${index + 1}: Score = ${score}, Grade = ${getGrade(score)}<br>`;
    });
    resultOutput += `<br><strong>Overall Average:</strong> ${average.toFixed(2)}<br>`;
    resultOutput += `<strong>
