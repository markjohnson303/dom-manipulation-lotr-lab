console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


function makeMiddleEarth() {

  var middle_earth = document.createElement('section');
  middle_earth.setAttribute('id', 'middle-earth');
  for (var i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    var heading = document.createElement('h1');
    heading.textContent = lands[i];
    land.appendChild(heading);
    middle_earth.appendChild(land);
  }
  document.body.appendChild(middle_earth);
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
}

makeMiddleEarth();


// Part 2
  var hobbits_list = document.createElement('ul');
function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  for (var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.innerText = hobbits[i];
    hobbit.className = 'hobbit';
    hobbits_list.appendChild(hobbit);
  }
  body.querySelectorAll('article')[0].appendChild(hobbits_list);
}

makeHobbits();


// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var the_ring = document.createElement('div');
  // give the div a class of 'magic-imbued-jewelry'
  the_ring.className = 'magic-imbued-jewelry';
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  the_ring.addEventListener("click", nazgulScreech);
  // add the ring as a child of Frodo
  body.querySelectorAll('li')[0].appendChild(the_ring);
}
keepItSecretKeepItSafe();

// Part 4

var rivendell = body.querySelectorAll('article')[1];

function makeBuddies() {
  // create an aside tag
  var buddies_aside = document.createElement('aside');
  // attach an unordered list of the 'buddies' in the aside
  var buddies_list = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddies_list.appendChild(buddy);
  }
  buddies_aside.appendChild(buddies_list);
  // insert your aside as a child element of rivendell
  rivendell.appendChild(buddies_aside);
}


function makeBuddies() {
  // create an aside tag
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0, len = buddies.length; i < len; i++){
    // attach an unordered list of the 'buddies' in the aside
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();


// Part 5


function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider =  body.querySelectorAll('li')[7];
  strider.textContent = 'Aragorn';
}

beautifulStranger();
// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
}


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
