// closure is a function that use independent variable

/* (function () {
  let num1 = 2;
  let num2 = 5;

  var sum = function () {
    return num1 + num2;
  };

  console.log(sum());
  console.dir(sum);
})();
 */

/* function stopWatch() {
  var startTime = Date.now();

  function getDelay() {
    console.log(Date.now() - startTime);
  }
  return getDelay;
}

var timer = stopWatch();

for (var i = 0; i < 10000000; i++) {
  var a = Math.random() * 1000000;
}


console.dir(timer); */
/* var a = 20;

function async() {
  var myFunc = () => {
    console.log(a);
  };
  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}

async();

a = 30;
 */

/* function apiFunction(url) {
   fetch(url)
      .then((res) => {
      console.log(res);
   })
}

apiFunction("https://jsonplaceholder.typicode.com/todos/1");

console.log("I'm here."); */

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 3000);
}

console.log(i);
