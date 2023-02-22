function solution(array, commands) {
  const answer = [];

  for (let i = 0; i < commands.length; i++) {
    const sliceArray = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);

    answer.push(sliceArray[commands[i][2] - 1]);
  }

  return answer;
}
