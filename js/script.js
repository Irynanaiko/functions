// TASK 01

function getNumber(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  }
  
  // TASK 02
  
  const factorial = (n) => {
    return n * (n - 1);
  };
  
  // TASK 03
  const addNumbers = (a, b, c) => {
    return "" + a + b + c;
  };
  
  //  TASK 04
  function area(a, b) {
    if (b !== undefined) {
      return a * b;
    } else {
      return a * a;
    }
  }
  
  // TASK 07
  
  function time(hour, min, sec) {
    if (min == undefined) {
      return `${hour} : 00 : ${sec}`;
    } else if (sec == undefined) {
      return `${hour} : ${min} : 00`;
    } else if (min == undefined && sec == undefined) {
      return `${hour} : 00 : 00`;
    } else {
      return `${hour} : ${min} : ${sec}`;
    }
  }
  
  // TASK 08
  
  const timeOfSeconds = (hr, mn, sc) => {
    return hr * 3600 + mn * 60 + sc;
  };
  
  // TASK 09
  function secondToTime(sec) {
    let hour = Math.floor(sec / 3600);
    let min = Math.floor(sec / 60) - Math.floor(sec / 3600) * 60;
    let second = sec % 60;
    return `${hour} : ${min} : ${second}`;
  }

