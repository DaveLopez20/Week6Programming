const schedule = ["Wake Up", "Eat", "Work", "Listen to Music"];

const music = schedule.indexOf("Listen to Music");

console.log(schedule[music]);

const person = {
    firstName : "Loid",
    lastName  : "Forger",
    age     : 27,
    eyeColor  : "blue"
  };
  
  let text = Object.values(person)
  document.getElementById("demo").innerHTML = text;

  const games = ["Ace Attorney", "Call of Duty", "Baldur's Gate 3", "Marvel vs. Capcom"];
document.getElementById("demo").innerHTML = games.toString();