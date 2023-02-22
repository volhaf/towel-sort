
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  const columns = matrix.map((arguments, i) => {
  if ((i + 1) % 2 === 0) {
    return arguments.reverse();
  } else {return arguments}
})
  return columns.flat();
}