function solution(n) {
  let first = 1;
  let second = 0;
  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer = (first + second) % 1000000007;
    second = first;
    first = answer;
  }

  return answer;
}
