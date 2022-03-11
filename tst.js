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
console.log(result)

const len = arr.length
console.log(len)

function sing(callback) {
  console.log(" la  la la  la")
  callback()
}

function meow() {
  console.log("meow")
}
sing(meow)
