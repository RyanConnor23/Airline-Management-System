const box = document.getElementById('box');

function handleRadioClick() {
    if (document.getElementById('roundtrip').checked) {
        box.style.display = 'visible';
    } else {
        box.style.display = 'hidden';
    }
}

const radioButtons = document.querySelectorAll('input[name="optradio"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});