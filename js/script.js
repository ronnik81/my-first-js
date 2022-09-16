"use strict";



function gogo() {
    const userAnswer = prompt("Впиши-ка имя самого крутого программиста на свете!");    

    if (userAnswer === null) {
        alert("Зачем же отменять? Жми снова!");
    }
    else if (userAnswer.toLowerCase() === "роман") {
        alert(`ДА! Именно РОМАН!`);
    }
    else {
        alert(`О неееет! ${userAnswer} - єто хто ваще??`);
    }
}