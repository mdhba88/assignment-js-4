function resultReport(marks) {
  if (!Array.isArray(marks)) {
    return "Invalid";
  }
  if (marks.length === 0) {
    return {
      finalScore: 0,
      pass: 0,
      fail: 0,
    };
  }

  let avg = 0;
  let pass = 0;
  let fail = 0;
  for (let i = 0; i < marks.length; i++) {
    avg = avg + marks[i];

    if (marks[i] < 40) {
      fail++;
    }
    if (marks[i] >= 40) {
      pass++;
    }
  }
  let avgCalculate = avg / marks.length;
  let finalScoreInt = Math.round(avgCalculate);

  return {
    finalScore: finalScoreInt,
    pass: pass,
    fail: fail,
  };
}
console.log(resultReport([99, 87, 67, 12, 87]));
