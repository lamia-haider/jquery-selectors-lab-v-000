'use-strict';

// selects all <h1> elements and returns them using an element selector.

function h1Selector(){
  return $('h1');
}

// selects and returns all <li> inside of <ol> using a descendant selector.
function liInOlSelector(){
  return $('ol li');
}

// selects and returns the <a> that is inside of the element that has both an id of box4 and a class of box5.
function linkSelector(){
  return $('#box4.box5 a');
}
//that selects and returns the image of the cat that has the alt text equal to "cat sleeping".
function imageSelector(){
  return $('img[alt="cat sleeping"]');
}
//selects and returns all the checkbox inputs
function checkboxInputSelector(){
  return $('input[type="checkbox"]');
}
