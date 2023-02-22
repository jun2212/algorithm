function solution(numbers) {
  let answer = 45;

  for (const num of numbers) {
    answer = answer - num;
  }

  return answer;
}
