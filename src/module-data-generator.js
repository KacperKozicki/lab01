const fs = require('fs');
const path = require('path');

const count = Number(process.argv[2]);
let carBrands = [];

fs.readFile('./src/cars.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    carBrands = data.split("\n").map(s => s.trim()).filter(n => n.length !== 0);

    // Pobierz listę zdjęć z folderu public/cars
    const imagesFolder = './public/cars';
    let imageFiles = [];
    try {
        imageFiles = fs.readdirSync(imagesFolder).filter(file => {
            // Filtrujemy tylko pliki z rozszerzeniami graficznymi
            return ['.png', '.jpg', '.jpeg', '.webp', '.avif'].includes(path.extname(file).toLowerCase());
        });
    } catch (error) {
        console.error("Nie udało się odczytać plików obrazów z folderu 'public/cars':", error);
        return;
    }

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

    function getRandomPrice() {
        return (Math.random() * (30.0 - 20.0) + 20.0).toFixed(2);
    }

    function getRandomRating() {
        return Math.floor(Math.random() * 11);
    }
    
    function getRandomDistance() {
        return Math.floor(Math.random() * 2000) + 100; // Distance in meters
    }

    function getRandomSeats() {
        return Math.floor(Math.random() * 3) + 2; // Between 2 and 5 seats
    }

    function getRandomFuel() {
        const fuels = ["Diesel", "Petrol", "Electric"];
        return fuels[Math.floor(Math.random() * fuels.length)];
    }

    function getRandomTransmission() {
        const transmissions = ["Manual", "Automatic"];
        return transmissions[Math.floor(Math.random() * transmissions.length)];
    }

    function getRandomImage() {
        // Losuje losowy plik z listy obrazów
        const randomImageFile = imageFiles[Math.floor(Math.random() * imageFiles.length)];
        return `/cars/${randomImageFile}`;  // Ścieżka do pliku w folderze public/cars
    }

    let content = "export const data = [\n";
    for (let i = 0; i < count; i++) {
        const randomCar = carBrands[Math.floor(Math.random() * carBrands.length)];
        const randomId = i + 1;
        const randomRegistration = getRandomRegistration();
        const randomYear = getRandomYear();
        const randomColor = getRandomColor();
        const randomEngineSize = getRandomEngineSize();
        const randomPrice = getRandomPrice();
        const randomRating = getRandomRating();
        const randomDistance = getRandomDistance();
        const randomSeats = getRandomSeats();
        const randomFuel = getRandomFuel();
        const randomTransmission = getRandomTransmission();
        const randomImage = getRandomImage();

        const car = {
            id: randomId,
            car: randomCar,
            registration: randomRegistration,
            year: randomYear,
            color: randomColor,
            engine: randomEngineSize,
            price: randomPrice,
            rating: randomRating,
            distance: randomDistance,
            seats: randomSeats,
            fuel: randomFuel,
            transmission: randomTransmission,
            image: randomImage
        };

        content += `  ${JSON.stringify(car)},\n`;
    }
    content += "];\n";

    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
            console.error(err);
        }
        console.log("module-data.js generated");
    });
});
