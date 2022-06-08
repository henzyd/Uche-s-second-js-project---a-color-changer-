const button = document.querySelector('button');
const main = document.querySelector('main');
const bgColors = document.querySelector('.colors');

let colors = ['white', 'black', 'purple', 'blue', 'pink', 'yellow', 'grey', 'green', 'red', 'orange' ]; 

// button.addEventListener('click', () => {
//     let random = Math.random() * 10;
//     let floor = Math.floor(random);
//     main.style.backgroundColor = colors[floor];
//     console.log(floor);
//     bgColors.innerText = colors[floor]
// })


button.addEventListener('click', () => {
    // hsl (0, 100%, 100%)

    let hue = Math.random() * 361;
    let floorHue = Math.floor(hue)
    
    let saturation = Math.random() * 101; 
    let floorSaturation = Math.floor(saturation)
        
    let lightness = Math.random() * 101;
    let floorLightness = Math.floor(lightness)
        
    main.style.backgroundColor = `hsl(${floorHue}, ${floorSaturation}%, ${floorLightness}%)`
    console.log(`hsl(${floorHue}, ${floorSaturation}%, ${floorLightness}%)`);

    bgColors.innerText = `hsl(${floorHue}, ${floorSaturation}%, ${floorLightness}%)`
})

