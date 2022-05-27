// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//LESSON 59

// const temperatures = [3, 1, 'error', 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [5, 8, 7];
// const calcTempAmplitude = function (t1, t2) {
//     const temps = t1.concat(t2);
//     let max = 0;
//     let min = 0;
//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i];
//         if (typeof curTemp !== 'number') continue;
//         if (curTemp > max) max = curTemp;
//         if (curTemp < min) min = curTemp;
//     }
//     console.log(min, max);
//     return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, temperatures2);
// console.log(amplitude);

//LESSON 61 DEBUGGING WITH CONSOLE AND BREAKPOINTS

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         //C) Fix - adder Number function
//         value: Number(prompt('Degrees celsius:')),
//     };
//     // console.log(measurement);
//     //B) Find the bug
//     console.table(measurement);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// };
// //A) Identify bug
// console.log(measureKelvin());
