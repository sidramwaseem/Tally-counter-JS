var count = 0;

function increment(){
  count++;
  document.getElementById("count-num").innerHTML = count;
}

function Reset(){
  count = 0;
  document.getElementById("count-num").innerHTML = count;
}