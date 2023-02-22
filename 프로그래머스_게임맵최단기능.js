function solution(maps) {
  let answer = 1;
  const visited = maps;
  const queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length - 1;
  const m = maps[0].length - 1;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        const newX = x + dx[j];
        const newY = y + dy[j];

        if (newX >= 0 && newX <= n && newY >= 0 && newY <= m && visited[newX][newY] === 1) {
          if (newX === n && newY === m) {
            return ++answer;
          }

          queue.push([newX, newY]);
          visited[newX][newY] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}
