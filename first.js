const biganimation = document.getElementById('biganimation');


const numberOFColorBoxes = 400;

for (let i = 0; i < numberOFColorBoxes; i++){
    const colorBox = document.createElement
    ('div');
    colorBox.classList.add('colorbox');
    biganimation.append(colorBox)
}
