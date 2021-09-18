const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
const radios = document.querySelectorAll('input[type="radio"]');
const cardTitle = document.querySelectorAll(".card-title");
const cardTime = document.querySelectorAll(".card-time");
const cardHistory = document.querySelectorAll(".card-history");
radios[1].checked = true;
let time = "";

/* RADIO BTN */
for (let radio of radios) {
  radio.onclick = render;
}

/* Pick TIME type */
function radioCheck() {
  for (let i of radios) {
    if (i.checked) {
      time = i.value;
    }
  }
}

function render() {
  radioCheck();
  for (let i = 0; i < data.length; i++) {
    if (time === "daily") {
      cardTitle[i].innerText = data[i].title;
      cardTime[i].innerText = `${data[i].timeframes.daily.current}hr`;
      if (data[i].timeframes.daily.current > 0) {
        cardTime[i].innerText += "s";
      }
      cardHistory[
        i
      ].innerText = `Last Week - ${data[i].timeframes.daily.previous}hr`;
      if (data[i].timeframes.daily.previous > 0) {
        cardHistory[i].innerText += "s";
      }
    }
    if (time === "weekly") {
      cardTitle[i].innerText = data[i].title;
      cardTime[i].innerText = `${data[i].timeframes.weekly.current}hr`;
      if (data[i].timeframes.weekly.current > 0) {
        cardTime[i].innerText += "s";
      }
      cardHistory[
        i
      ].innerText = `Last Week - ${data[i].timeframes.weekly.previous}hr`;
      if (data[i].timeframes.weekly.previous > 0) {
        cardHistory[i].innerText += "s";
      }
    }
    if (time === "monthly") {
      cardTitle[i].innerText = data[i].title;
      cardTime[i].innerText = `${data[i].timeframes.monthly.current}hr`;
      if (data[i].timeframes.monthly.current > 0) {
        cardTime[i].innerText += "s";
      }
      cardHistory[
        i
      ].innerText = `Last Week - ${data[i].timeframes.monthly.previous}hr`;
      if (data[i].timeframes.monthly.previous > 0) {
        cardHistory[i].innerText += "s";
      }
    }
  }
}

render();
