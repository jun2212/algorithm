function solution(k, room_number) {
  let answer = [];
  const map = new Map();

  const findFunc = (num) => {
    if (!map.has(num)) {
      map.set(num, num + 1);
      return num;
    }
    let findNum = findFunc(map.get(num));
    map.set(num, findNum + 1);
    return findNum;
  };

  for (const number of room_number) {
    answer.push(findFunc(number));
  }

  return answer;
}
