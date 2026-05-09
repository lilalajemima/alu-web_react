import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css'; // Import the CSS file

// Append the logo element at the very top
$('body').append('<div id="logo"></div>');
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
$('button').on('click', _.debounce(updateCounter, 500));