function solution(n, works) {
  let repeat = n;
  const sortWorks = works.sort((a, b) => a - b);

  while (repeat) {
    const max = sortWorks[works.length - 1];

    for (let i = works.length - 1; i >= 0; i--) {
      if (sortWorks[i] >= max) {
        sortWorks[i]--;
        repeat--;
      }
      if (sortWorks[i] < 0) return 0;
      if (!repeat) break;
    }
  }

  return sortWorks.reduce((acc, cur) => Math.pow(cur, 2) + acc, 0);
}
