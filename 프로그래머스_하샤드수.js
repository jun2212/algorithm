function solution(x) {
  const y = (x + "").split("").reduce((acc, cur) => acc + Number(cur), 0);

  return !Boolean(x % y);
}
