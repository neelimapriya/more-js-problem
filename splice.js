const friends=[12,45,32,22,44,62,29,97,675,987,87];
// (start, end, ...insert elements)
const partial= friends.splice(3,4,99,55);
// splice change the original array
console.log(partial)
console.log(friends)