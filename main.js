
const icons = document.querySelectorAll('.section-1-icons i');
// This line selects all the <i> elements within elements having the class "section-1-icons" and stores them in the icons constant.
let i = 0;
// This line declares a variable i and initializes it to 0. This variable will be used to keep track of the current index in the icons array.
setInterval(() => {

    // This line declares a variable i and initializes it to 0. This variable will be used to keep track of the current index in the icons array.
    i++;
    // This sets up a recurring timer that executes the provided callback function every 2000 milliseconds (2 seconds). The callback function will contain the code that will be executed in the loop.
    const icon = document.querySelector('.section-1-icons .change');

    // This increments the value of i by 1. This step ensures that the index moves to the next element in the icons array.

    icon.classList.remove('change');

    // This line selects the element with the class "change" within the elements having the class "section-1-icons" and assigns it to the icon constant. It finds the element that currently has the "change" class.
    // This removes the "change" class from the icon element. This step ensures that the previously active icon no longer has the "change" class.

    // This is a conditional statement that checks whether i has exceeded or is equal to the length of the icons array. If it has, it means we have reached the end of the array, so we need to loop back to the first element.
// If i is indeed greater than or equal to icons.length, it adds the "change" class to the first element of icons to display it as active, and then resets i to 0.
// If i is less than icons.length, it selects the next sibling of the icon element (the next icon) and adds the "change" class to it, making it the active icon.
    if (i >=icons.length) {
        icons[0].classList.add('change')
        i = 0;
    }

    else {
        icon.nextElementSibling.classList.add('change');
    }

}, 2000);





