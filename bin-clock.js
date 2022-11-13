const hour10 = document.getElementById("hour10");
const hour20 = document.getElementById("hour20");
const hour1 = document.getElementById("hour1");
const hour2 = document.getElementById("hour2");
const hour4 = document.getElementById("hour4");
const hour8 = document.getElementById("hour8");
const min10 = document.getElementById("min10");
const min20 = document.getElementById("min20");
const min40 = document.getElementById("min40");
const min1 = document.getElementById("min1");
const min2 = document.getElementById("min2");
const min4 = document.getElementById("min4");
const min8 = document.getElementById("min8");
const sec10 = document.getElementById("sec10");
const sec20 = document.getElementById("sec20");
const sec40 = document.getElementById("sec40");
const sec1 = document.getElementById("sec1");
const sec2 = document.getElementById("sec2");
const sec4 = document.getElementById("sec4");
const sec8 = document.getElementById("sec8");

function hoursTens(num) {
    switch (num) {
        case "0":
            offOn("transparent", hour10, hour20, hour40)
            break;
        case "1":
            offOn("green", hour10)
            break;
        case "2":
            offOn("green", hour20)
            break;
    }
}

function hoursUnits(num) {
    switch (num) {
        case "0":
            offOn("transparent", hour1, hour2, hour4, hour8)
            break;
        case "1":
            offOn("green", hour1)
            break;
        case "2":
            offOn("green", hour2)
            break;
        case "3":
            offOn("green", hour1, hour2)
            break;
        case "4":
            offOn("green", hour4)
            break;
        case "5":
            offOn("green", hour1, hour4)
            break;
        case "6":
            offOn("green", hour2, hour4)
            break;
        case "7":
            offOn("green", hour1, hour2, hour4)
            break;
        case "8":
            offOn("green", hour8)
            break;
        case "9":
            offOn("green", hour1, hour8)
            break;
    }
}

function minutesTens(num) {
    switch (num) {
        case "0":
            offOn("transparent", min10, min20, min40)
            break;
        case "1":
            offOn("green", min10)
            break;
        case "2":
            offOn("green", min20)
            break;
        case "3":
            offOn("green", min10, min20)
            break;
        case "4":
            offOn("green", min40)
            break;
        case "5":
            offOn("green", min10, min40)
            break;
    }
}

function minutesUnits(num) {
    switch (num) {
        case "0":
            offOn("transparent", min1, min2, min4, min8)
            break;
        case "1":
            offOn("green", min1)
            break;
        case "2":
            offOn("green", min2)
            break;
        case "3":
            offOn("green", min1, min2)
            break;
        case "4":
            offOn("green", min4)
            break;
        case "5":
            offOn("green", min1, min4)
            break;
        case "6":
            offOn("green", min2, min4)
            break;
        case "7":
            offOn("green", min1, min2, min4)
            break;
        case "8":
            offOn("green", min8)
            break;
        case "9":
            offOn("green", min1, min8)
            break;
    }
}

function secondsTens(num) {
    switch (num) {
        case "0":
            offOn("transparent", sec10, sec20, sec40)
            break;
        case "1":
            offOn("green", sec10)
            break;
        case "2":
            offOn("green", sec20)
            break;
        case "3":
            offOn("green", sec10, sec20)
            break;
        case "4":
            offOn("green", sec40)
            break;
        case "5":
            offOn("green", sec10, sec40)
            break;
    }
}

function secondsUnits(num) {
    switch (num) {
        case "0":
            offOn("transparent", sec1, sec2, sec4, sec8)
            break;
        case "1":
            offOn("green", sec1)
            break;
        case "2":
            offOn("green", sec2)
            break;
        case "3":
            offOn("green", sec1, sec2)
            break;
        case "4":
            offOn("green", sec4)
            break;
        case "5":
            offOn("green", sec1, sec4)
            break;
        case "6":
            offOn("green", sec2, sec4)
            break;
        case "7":
            offOn("green", sec1, sec2, sec4)
            break;
        case "8":
            offOn("green", sec8)
            break;
        case "9":
            offOn("green", sec1, sec8)
            break;
    }
}
    
function sleep(milliseconds) {
    const initialisedTime = Date.now();
    do {
    } while (Date.now() - initialisedTime < milliseconds)
}

function offOn(colour, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = colour;
    }
}

let now = new Date().toString();
numHour1 = [...now][16];
numHour2 = [...now][17];
numMin1 = [...now][19];
numMin2 = [...now][20];
numSec1 = [...now][22];
numSec2 = [...now][23];
hoursTens(numHour1)
hoursUnits(numHour2)
minutesTens(numMin1)
minutesUnits(numMin2)
secondsTens(numSec1)
secondsUnits(numSec2)
sleep(1000)
location.reload()
