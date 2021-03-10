// console.log(document.getElementsByTagName('h1'));

document.getElementsByTagName('h1')[0].innerHTML = 'New Text';

let color_button = document.getElementById('color-button');
// console.log(color_button);

function colorChange(){
    let header_element = document.getElementsByTagName('h1')[0];
    if (header_element.className == ''){
        header_element.className = 'color-change';
    } else {
        header_element.className = ''
    }
}

// Change Text Color via click event listener in JS

// color_button.addEventListener('click', colorChange);


// Adding New Button via JavaScript

let button = document.createElement('button');

// Add innerHTML to the button
button.innerHTML = 'I am Alive!';
document.body.append(button);


// Add event listener to new button to add more text to page
button.addEventListener('click', () =>{
    let more_text = document.createElement('h2');
    more_text.innerHTML = 'More JavaScript Info Here...';
    document.body.append(more_text);
});

// Grabbing Form Data from a submit event
const form = document.querySelector('#testDataForm');
// console.log(form);

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    console.log(event);
    let firstName = event.path[0][0].value;
    let lastName = event.path[0][1].value;
    console.log(firstName, lastName);
    let queryFirst = document.querySelector('#firstName');
    let queryLast = document.querySelector('#lastName');
    console.log(`Query: ${queryFirst.value} ${queryLast.value}`)
})

