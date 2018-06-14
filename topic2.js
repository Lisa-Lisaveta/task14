function splitArray(A) {
  const B = [];
  const C = [];
  A.forEach((el) => {
    if (el > 0) B.push(el);
    if (el < 0) C.push(el);
  });
  console.log('Array B: ' + B);
  console.log('Array C: ' + C);
}

function countRepetitions(arr) {
  const result = arr.reduce((acc, el) => {
    acc[el] = (acc[el] || 0) + 1;
    return acc;
  }, {});
  console.log(result);
}

function isAnagramm(str1, str2) {
  return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
}
