export default function secretAlgorithm() {
  let result = 0;

  for (let i = 0; i < 50000000; i++) {
    result += Math.random();
  }

  return result;
}
