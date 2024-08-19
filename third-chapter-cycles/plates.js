
const validatePlate = () => {
    let plate = prompt("Enter the plate number:");

    const platePattern = /^[A-Z]{2,4}[1-9][0-9]{0,2}$/;

    
    if (plate.length >= 2 && plate.length <= 6 && platePattern.test(plate)) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validatePlate();

