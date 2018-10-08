const Logger = require('./logger')
/**
 * CASE 0: Passing objects thru variables.
 * This function demonstrates the behavior when assigning a variable, which
 * holds an object, to another variable.
*/
function passObjsThruVarsExample () {
  const obj1 = {}
  const obj2 = obj1
  obj1.aProp = 2
  const aPropObj1 = obj1.aProp
  const aPropObj2 = obj2.aProp

  // log result to describe behavior
  const logger = new Logger()
  logger.header = `FILE: general, CASE: 0`
  logger.dek = `Behavior when assigning a variable's value, which holds an object, to another variable`
  logger.statements.push(`obj1.aProp: ${aPropObj1}`)
  logger.statements.push(`obj2.aProp: ${aPropObj2}`)
  logger.log()
}

/**
 * CASE 1: Copying an object into another independent copy
 * This function demonstrates the use of Object.assing() to
 * copy an object into another variable and not passing by reference.
*/
function copyObjectExample () {
  const obj1 = {}
  const obj2 = Object.assign({}, obj1)
  obj1.aProp = 2
  const aPropObj1 = obj1.aProp
  const aPropObj2 = obj2.aProp

  // log result to describe behavior
  const logger = new Logger()
  logger.header = `FILE: general, CASE: 1`
  logger.dek = `Copying an object into another variable using Object.assign()`
  logger.statements.push(`obj1.aProp: ${aPropObj1}`)
  logger.statements.push(`obj2.aProp: ${aPropObj2}`)
  logger.log()
}

/**
 * CASE 2: Functions are "first-class" objects in JS
 * This function demonstrates how functions can be created as variables,
 * and in any part of the code (inside another function, as params, etc.)
*/
function functionsAsObjs () {
  const executeFunction = function (toExecute) {
    return toExecute()
  }

  function toBeExecuted () {
    return `Look, ma! I was executed! :D`
  }

  // log result to describe behavior
  const logger = new Logger()
  logger.header = `FILE: general, CASE: 2`
  logger.dek = `Functions as 'first-class' objects`
  logger.statements.push(`${executeFunction(toBeExecuted)}`)
  logger.log()
}

/**
 * CASE 3: Functions can have properties.
 * This function demonstrates that a function can behave as an object and
 * be assigned properties that can be later on executed.
*/
function functionsWithProps () {
  function iHaveProps () {
    return 3
  }

  iHaveProps.aFunctionProp = 'hehe'

  iHaveProps.aFunctionsFunction = function () {
    return `Look, ma! I'm a function that belongs to a function!`
  }

  const logger = new Logger()
  logger.header = `FILE: general, CASE: 3`
  logger.dek = `Functions behave like plain objs and can be assigned props`
  logger.statements.push(`Plain function execution: ${iHaveProps()}`)
  logger.statements.push(`Function's property aFunctionProp: ${iHaveProps.aFunctionProp}`)
  logger.statements.push(`Function's function execution: ${iHaveProps.aFunctionsFunction()}`)
  logger.log()
}

module.exports = [
  passObjsThruVarsExample,
  copyObjectExample,
  functionsAsObjs,
  functionsWithProps
]
