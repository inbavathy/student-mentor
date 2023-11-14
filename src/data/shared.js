export function selectRandom(arr, max) {
  const shuffled = arr.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, max);
}

export function createItems(func, number) {
  const results = [];
  for (let i = 0; results.length < number; i++) {
    const item = func();
    if (!results.includes(item)) results.push(item);
  }
  return results;
}

export function getRest(users, user) {
  return users.filter((u) => u !== user);
}
