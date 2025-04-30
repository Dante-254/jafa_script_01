var names = [
  "Hole-in-one",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bougey",
  "Go Home",
];
function caseSwitch(par, strokes) {
  switch (strokes) {
    case 1:
      return names[0];
    case strokes <= par - 2:
      return names[1];
    case par - 1:
      return names[2];
    case par:
      return names[3];
    case par + 1:
      return names[4];
    case par + 2:
      return names[5];
    case strokes >= par + 3:
      return names[6];
  }
}

console.log(caseSwitch(5, 2));
