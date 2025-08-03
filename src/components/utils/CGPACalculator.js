

const gradePoints = {
  'A': 4.0,
  'B+': 3.5,
  'B-': 3.0,
  'C+': 2.5,
  'C': 2.0,
  'D': 1.0,
  'F': 0.0,
};

export function calculateCGPA(subjects) {
  let totalPoints = 0;
  let totalCredits = 0;

  subjects.forEach(subject => {
    const gradePoint = gradePoints[subject.grade] || 0;
    const credit = parseFloat(subject.creditHours);
    if (!isNaN(gradePoint) && !isNaN(credit)) {
      totalPoints += gradePoint * credit;
      totalCredits += credit;
    }
  });

  if (totalCredits === 0) return 0;
  return (totalPoints / totalCredits).toFixed(2);
}
