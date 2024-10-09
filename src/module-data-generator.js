const fs = require('fs');

const count = Number(process.argv[2]);
let carBrands = [];

fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

    function getRandomRegistration() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers = "0123456789";
    
        const randomLetters = `${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}${letters[Math.floor(Math.random() * letters.length)]}`;
        const randomNumbers = `${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}`;
        return `${randomLetters} ${randomNumbers}`;
    }
    

    function getRandomYear() {
        return Math.floor(Math.random() * (2024 - 1990 + 1)) + 1990;
    }

    function getRandomColor() {
        const colors = ["Red", "Blue", "Green", "Black", "White", "Silver", "Gray"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function getRandomEngineSize() {
        return (Math.random() * (5.0 - 1.0) + 1.0).toFixed(1) + "L";
    }

    let content = "export const data = [\n";
    for(let i = 0; i < count; i++) {
        const randomCar = carBrands[Math.floor(Math.random() * carBrands.length)];
        const randomId = i + 1;
        const randomRegistration = getRandomRegistration();
        const randomYear = getRandomYear();
        const randomColor = getRandomColor();
        const randomEngineSize = getRandomEngineSize();

        const car = {
            id: randomId,
            car: randomCar,
            registration: randomRegistration,
            year: randomYear,
            color: randomColor,
            engine: randomEngineSize
        };

        content += `  ${JSON.stringify(car)},\n`;
    }
    content += "];\n";

    fs.writeFile('./src/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
