var Key = {
  LEFT:   97,
  UP:     119,
  RIGHT:  100,
  DOWN:   115
};

var firstLi = document.querySelector('li');
var body = document.querySelector('body');

addClickRandomColor(firstLi);

body.addEventListener('keypress', function(e) {
  if(e.keyCode == Key.UP) {
    addUl();
  } else if(e.keyCode == Key.DOWN) {
    removeUl();
  } else if(e.keyCode == Key.RIGHT) {
    addLi();
  } else if(e.keyCode == Key.LEFT) {
    removeLi();
  }
}, false);

function removeLi() {
  uls = document.querySelectorAll('ul');
  lis = document.querySelectorAll('li');
  width = 100/((lis.length-uls.length)/uls.length) + 'vw';

  for(i = 0 ; i < uls.length ; i++) {
    uls[i].removeChild(uls[i].lastElementChild);
  }

  for(i = 0 ; i < lis.length ; i++) {
    lis[i].style.width = width;
  }
};

function addLi() {
  uls = document.querySelectorAll('ul');
  lis = document.querySelectorAll('li');
  height = 100/uls.length + 'vh';
  width = 100/((lis.length+uls.length)/uls.length) + 'vw';

  for(i = 0 ; i < lis.length ; i++) {
    lis[i].style.width = width;
  }

  for(i = 0 ; i < uls.length ; i++) {
    newLi = document.createElement('LI')
    newLi.style.height = height;
    newLi.style.width = width;
    addClickRandomColor(newLi);
    uls[i].appendChild(newLi);
  }
};

function removeUl() {
  uls = document.querySelectorAll('ul');
  lis = document.querySelectorAll('li');
  height = 100/(uls.length-1) + 'vh';

  document.body.removeChild(uls[uls.length-1]);

  for(i = 0 ; i < lis.length ; i++) {
    lis[i].style.height = height;
  }
};

function addUl() {
  uls = document.querySelectorAll('ul');
  lis = document.querySelectorAll('li');
  height = 100/(uls.length+1) + 'vh';
  width = 100/(lis.length/uls.length) + 'vw';

  for(i = 0; i<lis.length; i++) {
    lis[i].style.height = height;
  }

  newUl = document.createElement('UL');

  for(i = 0; i<(lis.length/uls.length); i++) {
    newLi = document.createElement('LI')
    newLi.style.height = height;
    newLi.style.width = width;
    addClickRandomColor(newLi);
    newUl.appendChild(newLi);
  }

  document.body.appendChild(newUl);
};

function addClickRandomColor(el) {
  el.addEventListener('click', function() {
    this.style.backgroundColor = randomColor();
    console.log(randomColor());
  });
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
