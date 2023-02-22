function solution(n, s) {
  if (n > s) return [-1];

  let answer = [];
  const rest = s % n;
  const result = (s - rest) / n;

  for (let i = 0; i < n; i++) {
    if (i >= n - rest) {
      answer.push(result + 1);
    } else {
      answer.push(result);
    }
  }

  return answer;
}
