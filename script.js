window.onload = function () {
    alert("Please ensure you have your marksheet available before proceeding to fill in the required details.");
};

function calculate() {
    // Get inputs
    const oddPoints = parseFloat(document.getElementById('oddPoints').value);
    const evenPoints = parseFloat(document.getElementById('evenPoints').value);
    const oddCredits = parseFloat(document.getElementById('oddCredits').value);
    const evenCredits = parseFloat(document.getElementById('evenCredits').value);
    const numSubjects = parseInt(document.getElementById('numSubjects').value);

    // Validate inputs
    if (isNaN(oddPoints) || isNaN(evenPoints) || isNaN(oddCredits) || isNaN(evenCredits) || isNaN(numSubjects)) {
        document.getElementById('output').innerHTML = "<p style='color: red;'>Please fill all fields with valid numbers.</p>";
        return;
    }

    // Calculate YGPA
    const ygpa = (oddPoints + evenPoints) / (oddCredits + evenCredits);
    const roundedYGPA = Math.round(ygpa * 100) / 100;

    // Calculate Percentage
    const percentage = (ygpa - 0.75) * 10;
    const roundedPercentage = Math.round(percentage * 100) / 100;

    // Calculate Obtain Marks
    const obtainMarks = Math.round(numSubjects * percentage);

    // Display Results
    document.getElementById('output').innerHTML = `
        <p><strong>YGPA:</strong> ${roundedYGPA}</p>
        <p><strong>Percentage:</strong> ${roundedPercentage}%</p>
        <p><strong>Obtained Marks:</strong> ${obtainMarks}</p>
    `;
}
