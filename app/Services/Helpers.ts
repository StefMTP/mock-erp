export function getRandomElements<T>(array: T[]): T[] {
  let elements: T[] = [];
  let tmpArray = array;
  let count = Math.ceil(Math.random() * array.length);
  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * tmpArray.length);
    const item = tmpArray[randomIndex];
    elements.push(item);
    tmpArray = tmpArray.filter((el) => el !== item);
  }

  return elements;
}
