const COUNT = 7;

var number = 1;

time1 = setInterval(function() {
  if (number == COUNT) {
    clearInterval(time1);
  }

  number++;
  var ball = document.createElement('div');
  ball.style.left = 15 + 'px';
  ball.style.top = 940 + 'px';
  ball.className = 'ball';
  document.body.appendChild(ball);
},3000);

setTimeout(function() {
  var number2 = 1;
  time2 = setInterval(function() {
    if (number2 == COUNT) {
      clearInterval(time2);
    }
  
    number2++;
    var ball = document.createElement('div');
    ball.style.left = 100 + 'px';
    ball.style.top = 940 + 'px';
    ball.className = 'ball';
    document.body.appendChild(ball);
  },3000);
},1500);

var number3 = 1;
time3 = setInterval(function() {
  if (number3 == COUNT) {
    clearInterval(time3);
  }

  number3++;
  var ball = document.createElement('div');
  ball.style.left = 185 + 'px';
  ball.style.top = 940 + 'px';
  ball.className = 'ball';
  document.body.appendChild(ball);
},3000);

setTimeout(function() {
  var number4 = 1;
  time4 = setInterval(function() {
    if (number4 == COUNT) {
      clearInterval(time4);
    }
  
    number4++;
    var ball = document.createElement('div');
    ball.style.left = 280 + 'px';
    ball.style.top = 940 + 'px';
    ball.className = 'ball';
    document.body.appendChild(ball);
  },3000);
},1500);


var number5 = 1;

time5 = setInterval(function() {
  if (number5 == COUNT) {
    clearInterval(time5);
  }

  number5++;
  var ball = document.createElement('div');
  ball.style.left = 1300 + 'px';
  ball.style.top = 940 + 'px';
  ball.className = 'ball';
  document.body.appendChild(ball);
},3000);

setTimeout(function() {
  var number6 = 1;
  time6 = setInterval(function() {
    if (number6 == COUNT) {
      clearInterval(time6);
    }
  
    number6++;
    var ball = document.createElement('div');
    ball.style.left = 1385 + 'px';
    ball.style.top = 940 + 'px';
    ball.className = 'ball';
    document.body.appendChild(ball);
  },3000);
},1500);

var number7 = 1;

time7 = setInterval(function() {
  if (number7 == COUNT) {
    clearInterval(time7);
  }

  number7++;
  var ball = document.createElement('div');
  ball.style.left = 1470 + 'px';
  ball.style.top = 940 + 'px';
  ball.className = 'ball';
  document.body.appendChild(ball);
},3000);

setTimeout(function() {
  var number8 = 1;
  time8 = setInterval(function() {
    if (number8 == COUNT) {
      clearInterval(time8);
    }
  
    number8++;
    var ball = document.createElement('div');
    ball.style.left = 1565 + 'px';
    ball.style.top = 940 + 'px';
    ball.className = 'ball';
    document.body.appendChild(ball);
  },3000);
},1500);