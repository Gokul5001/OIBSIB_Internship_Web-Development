// Get the display element
var display = document.getElementById('display');

// Get all the buttons
var buttons = document.querySelectorAll('.buttons button');

// Add a click event listener to each button
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    var buttonText = button.innerText;

    if (buttonText === 'C') {
      // Clear the display
      display.value = '';
    } else if (buttonText === '=') {
      // Calculate the result
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    } else {
      // Append the clicked button text to the display
      display.value += buttonText;
    }
  });
});
