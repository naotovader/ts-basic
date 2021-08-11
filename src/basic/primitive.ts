export default function premitiveSample() {
  let name: string = 'Naotovader'
  // name = 123
  console.log("premitive sample 1:", typeof name, name)

  let age: number = 27
  // age = "28"
  console.log("premitive sample 2:", typeof age, age)

  let isSingle: boolean = true
  // isSingle = 23
  console.log("premitive sample 3:", typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log("premitive sample 4:", typeof isOver20, isOver20)

}
