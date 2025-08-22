export default function analyzeArray(arr) {
  function getMin(arr) {
    return Math.min(...arr);
  }

  function getMax(arr) {
    return Math.max(...arr);
  }

  function getAverage(arr) {
    const sum = arr.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
    return sum / arr.length;
  }


  return {
    min: getMin(arr),
    max: getMax(arr),
    average: getAverage(arr),
    length: arr.length,
  };
}
