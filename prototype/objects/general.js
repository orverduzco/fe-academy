/**
 * SCENARIO 1: Copy an object.
 * This function demonstrates the behavior when assigning a variable, which
 * holds an object, to another variable.
*/
function copyObj () {
  const obj1 = {}
  const obj2 = obj1
  obj1.aProp = 2
  console.log(`obj1.aProp: ${obj1.aProp}`)
  console.log(`obj2.aProp: ${obj2.aProp}`)
}

module.exports = [
  copyObj
]
