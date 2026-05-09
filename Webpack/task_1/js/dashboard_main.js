const $ = require('jquery');
const _ = require('lodash');

// Append elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Track button clicks
let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Bind the lodash debounce function to the click event 
// This prevents spamming by ensuring the function only runs once every 500 milliseconds
$('button').on('click', _.debounce(updateCounter, 500));