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
// const seconds1 = document.getElementsByClassName("seconds-units-one");
// const seconds2 = document.getElementsByClassName("seconds-units-two");
// const seconds3 = document.getElementsByClassName("seconds-units-three");
// const seconds4 = document.getElementsByClassName("seconds-units-four");
// const seconds5 = document.getElementsByClassName("seconds-units-five");
// const seconds6 = document.getElementsByClassName("seconds-units-six");
// const seconds7 = document.getElementsByClassName("seconds-units-seven");
// const seconds8 = document.getElementsByClassName("seconds-units-eight");
// const seconds9 = document.getElementsByClassName("seconds-units-nine");



let now = new Date().toString();
binHour1 = [...now][16];
binHour2 = [...now][17];
binMin1 = [...now][19];
binMin2 = [...now][20];
binSec1 = [...now][22];
binSec2 = [...now][23];

console.log(`${binHour1}${binHour2}:${binMin1}${binMin2}:${binSec1}${binSec2}`)
 