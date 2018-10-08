/**
 * CASE 0: Quiz about object passing thru variables vs
 * Object.create()
*/
function objPassingVsObjCreate () {
  const obj1 = {
    aProp: 1
  }
  const obj2 = obj1
}

module.exports = [
  objPassingVsObjCreate
]
