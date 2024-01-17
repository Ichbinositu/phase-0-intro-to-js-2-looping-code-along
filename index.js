/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
  console.log(`Wrapped ${gift} and added a bow!`);
}
basic structure => for ([initialization]; [condition]; [iteration]) {
    [loop body]
}
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
*/
const names = [];


function writeCards(names, event) {
  for (let i = 0; i < names.length; i++) {
    names[i] = (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return names;
}
writeCards(names);


function countDown(num) {
  let i = 0
  while (i <= num) {
    console.log(num--)
  }
}