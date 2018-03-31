(function(){
  "use strict";

  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  var result = document.getElementById("result");
  var startTime;
  var isStarted = false;

  start.addEventListener("click", function(){
    if(isStarted === true){
      return;
    }
    startTime = Date.now();
    this.className = "pushed";
    stop.className = "";
    result.textContent = "0.000";
    result.className = "standby"
    isStarted = true
  });

  stop.addEventListener("click", function(){
    if(isStarted === false){
      return;
    }
    var elapsedTime;
    var diff;
    elapsedTime = (Date.now() - startTime) / 1000 ;
    result.textContent = elapsedTime.toFixed(3);
    this.className = "pushed";
    start.className = "";
    result.className = "";
    isStarted = false;
    diff = elapsedTime - 5;
    if(Math.abs(diff)<1.0){
      result.className = "almost";
    }
  });
})();
