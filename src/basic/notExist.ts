export default function notExistSample() {
  let name = null
  console.log("notExsit sample 1:", typeof name, name)

  name = "Naotovader"
  if(!name) {
    console.log("notExsit sample 2:", "吾輩は猫である。名前はまだ" + name)
  } else {
    console.log("notExsit sample 3:", "吾輩は猫である。名前は" + name)
  }

  let age = undefined
  console.log("notExsit sample 4:", typeof age, age)

  age = 27
  if(!age) {
    console.log("notExsit sample 5:", "年齢は秘密です。")
  } else {
    console.log("notExsit sample 5:", "年齢は" + age + "です。")
  }
}