const studentRollNumber = 'MEC';

function studentRollNumberAG(oldStudentRollNumber) {
    let num;

    if (!oldStudentRollNumber) {
        num = 1;
    } else {
        num = parseInt(oldStudentRollNumber.replace(studentRollNumber, '')) + 1;
    }

    num = `0000${num}`.slice(-5);

    return `${studentRollNumber}${num}`;
}

module.exports = studentRollNumberAG;