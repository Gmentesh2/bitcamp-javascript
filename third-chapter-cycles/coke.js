
const throwCoin = () => {
    let insertedAmount = 0;
    const cost = 50;

    while (insertedAmount < cost) {
        let coin = Number(prompt("Enter your coin (25, 10, 5)"));
        if (coin === 25 || coin === 10 || coin === 5) {
            insertedAmount += coin;
            if (insertedAmount < cost) {
                console.log(`You used ${coin} and you need to enter another ${cost - insertedAmount} to get a drink.`);
            } else {
                const change = insertedAmount - cost;
                console.log(`You used ${coin} again and you will get a drink soon. Your change is ${change}.`);
            }
        } else {
            console.log("Invalid coin, please enter 25, 10, or 5 cents.");
        }
    }
}

throwCoin();