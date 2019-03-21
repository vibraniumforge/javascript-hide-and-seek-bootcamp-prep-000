function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
   let x =document.querySelectorAll('ul.ranked-list li');
   for (let i =0; i< x.length; i++) {
     x[i].innerHTML = parseInt(x[i].innerHTML, 10) + n;
   }
}

function deepestChild() {
  let x =document.querySelector("#grand-node div div div div");
  return x;
}
