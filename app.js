const schedule = ["Wake Up", "Eat", "Work", "Listen to Music"];

const music = schedule.indexOf("Listen to Music");

console.log(schedule[music]);

const user = {
    firstName : "Loid",
    age     : 27,
    married  : false,
    purchases: ["phone","car","laptop"],
  

sayName: function() {
console.log(this.name);
}
};

user.sayName();

function saymyAge(){
  console.log('My age is ${this}');
}
saymyAge();  

  let text = Object.values(user)
  document.getElementById("demo").innerHTML = text;

  const games = ["Ace Attorney", "Call of Duty", "Baldur's Gate 3", "Marvel vs. Capcom"];
document.getElementById("demo").innerHTML = games.toString();