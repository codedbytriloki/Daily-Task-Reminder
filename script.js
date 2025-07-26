const dayMessages = {
  Sunday: "Take rest and recharge !",
  Monday: "New week, new goals !",
  Tuesday: "Keep the momentum going !",
  Wednesday : "Halfway there ! Stay strong. ",
  Thursday: "You're doing great ! Keep it up ",
  Friday : "Finish strong !",
  Saturday : "Enjoy the weeked vibes !"
};

const dayName = document.getElementById("dayName");
const dayMessage = document.getElementById("dayMessage");

const today = new Date()
const day = today.getDay();
// console.log(day );

const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const fullDay = weekDay[day]
dayName.innerHTML = fullDay;

dayMessage.innerHTML = `${dayMessages[fullDay]}`;
