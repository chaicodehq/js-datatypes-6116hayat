/**
 * 📝 School Report Card Generator
 *
 * Sharma ji ke bete ka report card generate karna hai! Student ka naam aur
 * subjects ke marks milenge, tujhe pura analysis karke report card banana hai.
 *
 * Rules:
 *   - student object: { name: "Rahul", marks: { maths: 85, science: 92, ... } }
 *   - Calculate using Object.values() and array methods:
 *     - totalMarks: sum of all marks (use reduce)
 *     - percentage: (totalMarks / (numSubjects * 100)) * 100,
 *       rounded to 2 decimal places using parseFloat(val.toFixed(2))
 *     - grade based on percentage:
 *       "A+" (>= 90), "A" (>= 80), "B" (>= 70), "C" (>= 60), "D" (>= 40), "F" (< 40)
 *     - highestSubject: subject name with highest marks (use Object.entries)
 *     - lowestSubject: subject name with lowest marks
 *     - passedSubjects: array of subject names where marks >= 40 (use filter)
 *     - failedSubjects: array of subject names where marks < 40
 *     - subjectCount: total number of subjects (Object.keys().length)
 *   - Hint: Use Object.keys(), Object.values(), Object.entries(),
 *     reduce(), filter(), map(), Math.max(), Math.min(), toFixed()
 *
 * Validation:
 *   - Agar student object nahi hai ya null hai, return null
 *   - Agar student.name string nahi hai ya empty hai, return null
 *   - Agar student.marks object nahi hai ya empty hai (no keys), return null
 *   - Agar koi mark valid number nahi hai (not between 0 and 100 inclusive),
 *     return null
 *
 * @param {{ name: string, marks: Object<string, number> }} student
 * @returns {{ name: string, totalMarks: number, percentage: number, grade: string, highestSubject: string, lowestSubject: string, passedSubjects: string[], failedSubjects: string[], subjectCount: number } | null}
 *
 * @example
 *   generateReportCard({ name: "Rahul", marks: { maths: 85, science: 92, english: 78 } })
 *   // => { name: "Rahul", totalMarks: 255, percentage: 85, grade: "A",
 *   //      highestSubject: "science", lowestSubject: "english",
 *   //      passedSubjects: ["maths", "science", "english"], failedSubjects: [],
 *   //      subjectCount: 3 }
 *
 *   generateReportCard({ name: "Priya", marks: { maths: 35, science: 28 } })
 *   // => { name: "Priya", totalMarks: 63, percentage: 31.5, grade: "F", ... }
 */
export function generateReportCard(student) {
  // Your code here

  if (
    typeof student !== "object" ||
    student === null ||
    typeof student.name !== "string" ||
    student.name.trim() === "" ||
    typeof student.marks !== "object" ||
    student.marks === null
  ) return null

  const subjects = Object.entries(student.marks);

  if (subjects.length === 0) return null;

  for (let i = 0; i < subjects.length; i++) {
    const mark = subjects[i][1];
    if (typeof mark !== "number" || mark < 0 || mark > 100) return null;
  }

  const marksArray = Object.values(student.marks);

  const totalMarks = marksArray.reduce((acc, marks) => acc + marks, 0);

  const numSubjects = marksArray.length;

  const percentage = parseFloat(
    ((totalMarks / (numSubjects * 100)) * 100).toFixed(2)
  );

  function getGrade(percentage) {
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else if (percentage >= 40) return "D";
    else return "F";
  }

  const grade = getGrade(percentage);

  const highestMark = Math.max(...marksArray);
  const lowestMark = Math.min(...marksArray);

  const highestSubject = Object.keys(student.marks)
    .find(subject => student.marks[subject] === highestMark)

  const lowestSubject = Object.keys(student.marks)
    .find(subject => student.marks[subject] === lowestMark);


  const passedSubjects = subjects
    .filter(([subject, mark]) => mark >= 40)
    .map(([subject]) => subject);

  const failedSubjects = subjects
    .filter(([subject, mark]) => mark < 40)
    .map(([subject]) => subject);


  return {
    name: student.name,
    totalMarks,
    percentage,
    grade,
    highestSubject,
    lowestSubject,
    passedSubjects,
    failedSubjects,
    subjectCount: numSubjects
  }

}



