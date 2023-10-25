function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, orange) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(orange);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
