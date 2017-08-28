
$(document).ready(function(){
  $('input[name=clowns]').change(function(){
    if($('input[name=clowns]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});

$(document).ready(function(){
  $('input[name=gym]').change(function(){
    if($('input[name=gym]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});

$(document).ready(function(){
  $('input[name=food]').change(function(){
    if($('input[name=food]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});

$(document).ready(function(){
  $('input[name=brain]').change(function(){
    if($('input[name=brain]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});
$(document).ready(function(){
  $('input[name=mem]').change(function(){
    if($('input[name=mem]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});
$(document).ready(function(){
  $('input[name=think]').change(function(){
    if($('input[name=think]:checked').val() === "CORRECT") {
      alert('You have selected the correct answer!');
    } else {
      alert('You have selected the wrong answer!');
    }
  });
});

document.getElementById('timer').innerHTML =
  05 + ":" + 00;
startTimer();

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}



//select the value of the input tag once user clicked
userguess=$("input[name]:checked","#first").val()

$('#first input').on('change', function() {
   console.log($('input[name=gender]:checked', '#first').val()); 

}); 

