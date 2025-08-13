function totalFine(fare) {
  // You have to write your code here
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") {
    return "Invalid";
  }
  let character = str.replaceAll(" ", "");
  let charAllUpperCase = character.toUpperCase();
  return charAllUpperCase;
}

function bestTeam(player1, player2) {
  // You have to write your code here
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  }
  let result1 = player1.foul + player1.cardY + player1.cardR;
  let result2 = player2.foul + player2.cardY + player2.cardR;
  if (result2 === result1) {
    return "Tie";
  }
  if (result1 < result2) {
    return player1.name;
  }
  if (result2 < result1) {
    return player2.name;
  }
}

function isSame(arr1, arr2) {
  // You have to write your code here
  if (typeof arr1 !== "object" || typeof arr2 !== "object") {
    return "Invalid";
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
}
