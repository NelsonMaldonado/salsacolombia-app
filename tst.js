var arr = [
  {
    id: 1,
    name: "bill",
  },
  {
    id: 2,
    name: "ted",
  },
]

var result = arr.map((person) => person.id)
// console.log(result)

const len = arr.length
console.log(len)
const loadRandom = () => {
  const num = Math.floor(Math.random() * 10)

  console.log(num)
  return num
}
loadRandom()
