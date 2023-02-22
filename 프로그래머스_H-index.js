function solution(citations) {
  const sortArr = citations.sort((a, b) => b - a);

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] <= i) {
      return i;
    }
  }

  return citations.length;
}
