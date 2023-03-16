
document.getElementById('dropdownRadioButton').addEventListener('click', () => {
    document.getElementById('submitContainer').style.display = 'none';

    document.getElementById('blogs').style.display = 'block';

})
document.getElementById('dropdownRadioButton').addEventListener('click', () => {
    document.getElementById('submitContainer').style.display = 'flex';
    document.getElementById('blogs').style.display = 'none';

})
