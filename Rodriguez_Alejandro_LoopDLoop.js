for (mile = 0; mile <= 6; mile += 2){
    if (mile == 2 || mile == 4 || mile == 6){
        console.log(mile + ' You won a candy!')
    }
}

// secon problem
var speed = 5.5
for (mile = 0; mile <= 6; mile += 2){
    if (mile == 2 || mile == 4 || mile == 6 && speed >= 5.5){
        console.log(mile + ' You won a candy!')
    }
}