// const hours10 = document.getElementsByClassName("hours-10s-ten");
// const hours20 = document.getElementsByClassName("hours-10s-twenty");
// const hours1 = document.getElementsByClassName("hours-units-one");
// const hours2 = document.getElementsByClassName("hours-units-two");
// const hours3 = document.getElementsByClassName("hours-units-three");
// const hours4 = document.getElementsByClassName("hours-units-four");
// const hours5 = document.getElementsByClassName("hours-units-five");
// const hours6 = document.getElementsByClassName("hours-units-six");
// const hours7 = document.getElementsByClassName("hours-units-seven");
// const hours8 = document.getElementsByClassName("hours-units-eight");
// const hours9 = document.getElementsByClassName("hours-units-nine");

// const minutes10 = document.getElementsByClassName("minutes-10s-ten");
// const minutes20 = document.getElementsByClassName("minutes-10s-twenty");
// const minutes30 = document.getElementsByClassName("minutes-10s-thirty");
// const minutes40 = document.getElementsByClassName("minutes-10s-forty");
// const minutes50 = document.getElementsByClassName("minutes-10s-fifty");
// const minutes1 = document.getElementsByClassName("minutes-units-one");
// const minutes2 = document.getElementsByClassName("minutes-units-two");
// const minutes3 = document.getElementsByClassName("minutes-units-three");
// const minutes4 = document.getElementsByClassName("minutes-units-four");
// const minutes5 = document.getElementsByClassName("minutes-units-five");
// const minutes6 = document.getElementsByClassName("minutes-units-six");
// const minutes7 = document.getElementsByClassName("minutes-units-seven");
// const minutes8 = document.getElementsByClassName("minutes-units-eight");
// const minutes9 = document.getElementsByClassName("minutes-units-nine");

// const seconds10 = document.getElementsByClassName("seconds-10s-ten");
// const seconds20 = document.getElementsByClassName("seconds-10s-twenty");
// const seconds30 = document.getElementsByClassName("seconds-10s-thirty");
// const seconds40 = document.getElementsByClassName("seconds-10s-forty");
// const seconds50 = document.getElementsByClassName("seconds-10s-fifty");
// const seconds1 = document.getElementsByClassName("seconds-units-one");
// const seconds2 = document.getElementsByClassName("seconds-units-two");
// const seconds3 = document.getElementsByClassName("seconds-units-three");
// const seconds4 = document.getElementsByClassName("seconds-units-four");
// const seconds5 = document.getElementsByClassName("seconds-units-five");
// const seconds6 = document.getElementsByClassName("seconds-units-six");
// const seconds7 = document.getElementsByClassName("seconds-units-seven");
// const seconds8 = document.getElementsByClassName("seconds-units-eight");
// const seconds9 = document.getElementsByClassName("seconds-units-nine");

const seconds1 = document.getElementById("sec1");
seconds1.style.backgroundColor = "#00FF00";       

// let now = new Date().toString();

// numHour1 = [...now][16];
// numHour2 = [...now][17];
// numMin1 = [...now][19];
// numMin2 = [...now][20];
// numSec1 = [...now][22];
// numSec2 = [...now][23];

//console.log(`${numHour1}${numHour2}:${numMin1}${numMin2}:${numSec1}${numSec2}`)
 
function sleep(milliseconds) {
    const initialisedTime = Date.now();
    do {
    } while (Date.now() - initialisedTime < milliseconds)
}

function offOn(element, colour) {
    element.style.backgroundColor = colour;
}

function switcher(obj, num) {
    return obj[num]
}

// const hoursTens = {1: offOn(hours10, rgb(255, 0, 0)), 
//     2: offOn(hours20, rgb(255, 0, 0))}
// const hoursUnits = {1: offOn(hours1, rgb(255, 0, 0)), 
//     2: offOn(hours2, rgb(255, 0, 0)), 
//     3: offOn(hours3, rgb(255, 0, 0)), 
//     4: offOn(hours4, rgb(255, 0, 0)), 
//     5: offOn(hours5, rgb(255, 0, 0)), 
//     6: offOn(hours6, rgb(255, 0, 0)), 
//     7: offOn(hours7, rgb(255, 0, 0)), 
//     8: offOn(hours8, rgb(255, 0, 0)), 
//     9: offOn(hours9, rgb(255, 0, 0))}
// const minutesTens = {1: offOn(minutes1, rgb(255, 0, 0)), 
//     2: offOn(minutes2, rgb(255, 0, 0)), 
//     3: offOn(minutes3, rgb(255, 0, 0)), 
//     4: offOn(minutes4, rgb(255, 0, 0)), 
//     5: offOn(minutes5, rgb(255, 0, 0))}
// const minutesUnits = {1: offOn(minutes1, rgb(255, 0, 0)), 
//     2: offOn(minutes2, rgb(255, 0, 0)), 
//     3: offOn(minutes3, rgb(255, 0, 0)), 
//     4: offOn(minutes4, rgb(255, 0, 0)), 
//     5: offOn(minutes5, rgb(255, 0, 0)), 
//     6: offOn(minutes6, rgb(255, 0, 0)), 
//     7: offOn(minutes7, rgb(255, 0, 0)), 
//     8: offOn(minutes8, rgb(255, 0, 0)), 
//     9: offOn(minutes9, rgb(255, 0, 0))}
// const secondsTens = {1: offOn(seconds1, rgb(255, 0, 0)), 
//     2: offOn(seconds2, rgb(255, 0, 0)), 
//     3: offOn(seconds3, rgb(255, 0, 0)), 
//     4: offOn(seconds4, rgb(255, 0, 0)), 
//     5: offOn(seconds5, rgb(255, 0, 0))}
// const secondsUnits = {1: offOn(seconds1, rgb(255, 0, 0)), 
    // 2: offOn(seconds2, rgb(255, 0, 0)), 
    // 3: offOn(seconds3, rgb(255, 0, 0)), 
    // 4: offOn(seconds4, rgb(255, 0, 0)), 
    // 5: offOn(seconds5, rgb(255, 0, 0)), 
    // 6: offOn(seconds6, rgb(255, 0, 0)), 
    // 7: offOn(seconds7, rgb(255, 0, 0)), 
    // 8: offOn(seconds8, rgb(255, 0, 0)), 
    // 9: offOn(seconds9, rgb(255, 0, 0))}

// const test = {1: testFunc("this works")}

// function testFunc(str) {
//     console.log(str)
// }

// function something(){
//     return test[1]
// }

// something()
// let isOn = False

// while (true) {
//     // let now = new Date().toString();
//     // numHour1 = [...now][16];
//     // numHour2 = [...now][17];
//     // numMin1 = [...now][19];
//     // numMin2 = [...now][20];
//     // numSec1 = [...now][22];
//     // numSec2 = [...now][23];
//     // switcher(secondsUnits, numSec2)
//     if (!isOn) {
//         offOn(seconds1, "#00FF00")
//     } else {
//         offOn(seconds1, "red")
//     }
//     sleep(1000)

// }