function changeText(id){
    id.innerHTML = 'You clicked';
    const msg= document.querySelector('.msg');
    msg.innerHTML='You clicked, displaying some text.';
}

function changeTextTitle(){
    var heading = document.getElementById('heading');
    heading.innerHTML = 'You clicked, Title changed!';
}

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}


function changeBackground(obj1){
    console.log(obj1.value);
    var body = document.getElementById('body');
    body.style.backgroundColor= obj1.value;
}


// ck: Don't know why this doesn't work!
function validateForm(){
    console.log("Inside validateForm");
    var firstName = document.forms["myform"]["firstName"].value;
    if(firstName== null || firstName == ""){
        alert("First name is required!");
        return false;
    }
}





// DOM document object model
console.log(window); // window is the parent of the browser object

// document.getElementById('my-form'); //
// document.querySelector('h1');
// document.querySelectorAll('.item'); // returns NodeLists

// document.getElementsByClassName('item');
// document.getElementsByTagName('li');

// Single element
const element1 = document.getElementById('heading');
console.log(element1 );
const form1 = document.getElementById('myForm');

const btn= document.querySelector('button');
btn.style.background= 'red';


// 
/*
const msg= document.querySelector('.msg');
const nameInput = document.querySelector('firstName');

form1.addEventListener('submit', onSummit);

function onSummit(e){
    if(nameInput.value=='')
    {
        msg.innerHTML='Please enter all fields';
    }
    else
    {
        console.log('Success');
    }
}
*/
