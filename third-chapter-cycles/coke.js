
const throwCoin = () => {

    let totalCoinInserted = 0 ;
    const costOfDrinks = 50;

    while(totalCoinInserted < costOfDrinks){
        let coin = Number(prompt("Please enter your coin.. "))

        if(coin === 25 || coin === 10 || coin === 5){
            totalCoinInserted += coin
            if(totalCoinInserted < costOfDrinks){
                console.log(`You Entered ${coin} cent and you need plus another ${costOfDrinks - totalCoinInserted} need to buy a drink`)
            }else{
                let change = totalCoinInserted - costOfDrinks

                console.log(`You entered ${coin} cent, you will get a drink. Your change is ${change} cent `)
            }
        }else{
            console.log("Invalid coin, please enter 25, 10 or 5 cent")
        }
    }
}

throwCoin()