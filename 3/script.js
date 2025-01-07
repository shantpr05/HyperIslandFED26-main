// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Change label texts
    document.querySelector('label[for="name"]').textContent = 'Full Name:';
    document.querySelector('label[for="email"]').textContent = 'Email Address:';
    document.querySelector('label[for="phone"]').textContent = 'Phone Number:';
    document.querySelector('label[for="message"]').textContent = 'Your Message:';
    document.querySelector('label[for="options"]').textContent = 'Select an Option:';

    // Style the form
    const form = document.querySelector('form');
    form.style.fontFamily = '"Rubik", serif';
    form.style.fontSize = '20px';
    form.style.maxWidth = '100%';
    form.style.margin = '0 60px';
    form.style.padding = '30px';
    form.style.boxShadow = '0 4px 8px rgba(81, 66, 218, 0.2)';
    form.style.color = '#00509F';
    
    form.style.backgroundColor = '#fcfcff';

    // Style labels
    const labels = document.querySelectorAll('label');
    labels.forEach(label => {
        label.style.display = 'block';        
        label.style.marginBottom = '15px';
        label.style.fontWeight = 'bold';
    });

    // Style inputs and textarea
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], textarea');
    inputs.forEach(input => {
        input.style.fontFamily = '"Rubik", serif';
        input.style.fontSize = '14px';
        input.style.marginBottom = '10px';
        input.style.padding = '8px';
        input.style.border = '1px solid #ccd';
        input.style.borderRadius = '5px';
        input.style.width = '90%';
        input.style.boxSizing = 'border-box';
    });

    // Style select
    const select = document.querySelector('select');
    select.style.width = '90%';
    select.style.padding = '8px';
    select.style.fontSize = '14px';
    select.style.marginBottom = '15px';
    select.style.border = '1px solid #ddd';
    select.style.borderRadius = '4px';
    select.style.backgroundColor = 'white';

    // Style radio buttons and their labels
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    const radioLabels = document.querySelectorAll('input[type="radio"] + label');

    radioButtons.forEach(radio => {
        radio.style.marginRight = '50px';
        radio.style.marginLeft = '20px';
        radio.style.cursor = 'pointer';
        radio.style.border = '1px solid currentColor';
        radio.style.width = '1.15em';
        radio.style.height = '1.15em';
        radio.style.borderRadius = '50%';
    });

    radioLabels.forEach(label => {
        label.style.display = 'inline-block';
        label.style.marginBottom = '10px';
        label.style.cursor = 'pointer';
    });




    // Style submit button
    const submitButton = document.querySelector('input[type="submit"]');
    submitButton.style.padding = '15px 25px';
    submitButton.style.marginLeft = '10px';
    submitButton.style.fontFamily = '"Rubik", serif';
    submitButton.style.fontSize = '16px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.backgroundColor = '#0582ca';
    submitButton.style.color = '#fff';
    submitButton.style.fontWeight = 'bold';
    submitButton.style.cursor = 'pointer';
    submitButton.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';

    submitButton.addEventListener('mouseover', () => {
    submitButton.style.backgroundColor = '#003f88';
    });

    submitButton.addEventListener('mouseout', () => {
    submitButton.style.backgroundColor = '#0582ca';
    });
});
