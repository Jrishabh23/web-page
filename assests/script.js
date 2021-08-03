var placeholder = '';
const inputField = document.querySelector('form');

// Create placeholder as a label
inputField.addEventListener('click', (e) => {
    placeholder = e.target.placeholder;
    if (!placeholder) return;
    const name = e.target.name;
    document.getElementById(name).innerHTML = placeholder
    e.target.placeholder = '';
})
// Create label as a placeholder if input value is empty
inputField.addEventListener('focusout', (e) => {
    const value = e.target.value;
    if (!value) {
        e.target.placeholder = placeholder;
        document.getElementById(e.target.name).innerHTML = '';
        document.querySelector(`.${e.target.name}-error`).innerHTML = 'This field is required';
    } else {
        // if value has empty
        document.querySelector(`.${e.target.name}-error`).innerHTML = '';
    }
})
// Select gender is active 
document.querySelector('.gender-list').addEventListener('click', (e) => {
    const label = e.target.closest('.gender-label');
    if (!label) return;
    const gender = document.querySelectorAll('.gender-label');
    gender.forEach((labels) => labels.classList.remove('active'));
    label.classList.add('active');
    document.querySelector('input[type=radio]').value = (label.innerText).toLowerCase();
})
// Form is submit and check validation 
document.querySelector(".button").addEventListener('click', (e) => {
    e.preventDefault();
    const formData = document.querySelector('form').querySelectorAll('input, select');
    //validation
    formData.forEach((input) => {
        if (!input.value) {
            document.querySelector(`.${input.name}-error`).innerHTML = 'This field is required';
        } else {
            document.querySelector(`.${input.name}-error`).innerHTML = '';
            //Check password validation
            if (input.name == 'confirm_password') {
                document.querySelector(`.${input.name}-error`).innerHTML = ((input.value.trim() != document.querySelector('input[name="password"]').value.trim()) ? 'Password and Confirm password must be equal' : '');
            } else {
                console.log('Data Submitted');
            }
        }
    })
})