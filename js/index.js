function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const numeroAleatorio = getRandomInt(0, 11);
console.log(numeroAleatorio);
