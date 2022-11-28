// Code your solutions in this file
function writeCards(names,event){
    const messages = [];
    for(let i = 0;  i < 3; i++ ){
        const writeCards = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(writeCards);
    }
return messages;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


//function for countdown 

function countDown(){
let i = 10;
while(i >= 0){
    console.log(i);
    i--;
}
}

countDown();