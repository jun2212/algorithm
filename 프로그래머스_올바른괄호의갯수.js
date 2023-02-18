function solution(n) {
  const s = (arr, n) => {
    if (n === 0) return arr;
    const copyArr = [...arr];
    result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i] * arr[arr.length - i - 1];
    }
    copyArr.push(result);
    return s(copyArr, n - 1);
  };

  return s([1, 1], [n])[n];
}
