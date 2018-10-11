const Logger = require('./logger')

/**
 * CASE 0: Quiz about object passing thru variables vs
 * Object.create()
*/
function objPassingVsObjCreate () {
  const objVar1 = {
    aProp: 1
  }
  const objVar2 = objVar1

  const objCreate1 = {
    aProp: 2
  }
  const objCreate2 = Object.create(objCreate1)

  const objVar1APropValue = objVar1.aProp
  const objVar2APropValue = objVar2.aProp
  const objCreate1APropValue = objCreate1.aProp
  const objCreate2APropValue = objCreate2.aProp
  const objVar1HasAProp = objVar1.hasOwnProperty('aProp')
  const objVar2HasAProp = objVar2.hasOwnProperty('aProp')
  const objCreate1HasAProp = objCreate1.hasOwnProperty('aProp')
  const objCreate2HasAProp = objCreate2.hasOwnProperty('aProp')

  // log results
  const logger = new Logger()
  logger.statements = [
    `objVar1.aProp value: ${objVar1APropValue}`,
    `objVar2.aProp value: ${objVar2APropValue}`,
    `objCreate1.aProp value: ${objCreate1APropValue}`,
    `objCreate2.aProp value: ${objCreate2APropValue}`,
    `objVar1 has a property: ${objVar1HasAProp}`,
    `objVar2 has a property: ${objVar2HasAProp}`,
    `objCreate1 has a property: ${objCreate1HasAProp}`,
    `objCreate2 has a property: ${objCreate2HasAProp}`
  ]
  logger.log('prototype', 0)
}

/**
 * CASE 1: Mainstream animal -> rabbit -> specific rabbit example
 * to explain prototype inheritance and behavior delegation.
*/
function mainstreamRabbitExample () {
  const animal = {
    eat: function () {
      return `Look, ma! I'm an animal that eats!`
    }
  }

  const rabbit = Object.create(animal)
  rabbit.jump = function () {
    return `Look, ma! I'm not only an animal, but a rabbit that jumps!`
  }

  const grayRabbit = Object.create(rabbit)
  grayRabbit.jump = function () {
    return `Look, ma! I'm a gray rabbit jumping!`
  }

  const babyGrayRabbit = Object.create(grayRabbit)

  let animalEating = ''
  let rabbitEating = ''
  let animalJumping = ''
  let rabbitJumping = ''
  let grayRabbitEating = ''
  let grayRabbitJumping = ''
  let babyGrayRabbitEating = ''
  let babyGrayRabbitJumping = ''

  try {
    animalEating = animal.eat()
  } catch (error) {
    animalEating = error
  }

  try {
    rabbitEating = rabbit.eat()
  } catch (error) {
    rabbitEating = error
  }

  try {
    animalJumping = animal.jump()
  } catch (error) {
    animalJumping = error
  }

  try {
    rabbitJumping = rabbit.jump()
  } catch (error) {
    rabbitJumping = error
  }

  try {
    grayRabbitEating = grayRabbit.eat()
  } catch (error) {
    grayRabbitEating = error
  }

  try {
    grayRabbitJumping = grayRabbit.jump()
  } catch (error) {
    grayRabbitJumping = error
  }

  try {
    babyGrayRabbitEating = babyGrayRabbit.eat()
  } catch (error) {
    babyGrayRabbitEating = error
  }

  try {
    babyGrayRabbitJumping = babyGrayRabbit.jump()
  } catch (error) {
    babyGrayRabbitJumping = error
  }

  const logger = new Logger()
  logger.statements = [
    `Animal eating: ${animalEating}`,
    `Rabbit eating: ${rabbitEating}`,
    `Animal jumping: ${animalJumping}`,
    `Rabbit jumping: ${rabbitJumping}`,
    `Gray rabbit eating: ${grayRabbitEating}`,
    `Gray rabbit jumping: ${grayRabbitJumping}`,
    `Baby gray rabbit eating: ${babyGrayRabbitEating}`,
    `Baby gray rabbit jumping: ${babyGrayRabbitJumping}`
  ]
  logger.log('prototype', 1)
}

/**
 * CASE 2: Dynamically change an object's parent.
 * This function demonstrates that you can change dynamically an object's
 * parent based on conditions
*/
function dynamicallyAssignParent () {
  const usCitizen = {
    sayHi: function () {
      return `Hello, buddy!`
    }
  }
  const mexicanCitizen = {
    sayHi: function () {
      return `¡Hola, amigo!`
    }
  }

  const randomCitizen1 = {
    nationality: 'mexican'
  }

  const randomCitizen2 = {
    nationality: 'american'
  }

  function assignParent (citizen) {
    if (citizen.nationality === 'mexican') {
      Object.setPrototypeOf(citizen, mexicanCitizen)
    } else {
      Object.setPrototypeOf(citizen, usCitizen)
    }
  }

  assignParent(randomCitizen1)
  assignParent(randomCitizen2)

  const randomCitizen1Salute = randomCitizen1.sayHi()
  const randomCitizen2Salute = randomCitizen2.sayHi()

  // log results
  const logger = new Logger()
  logger.statements = [
    `Random citizen 1 says hi: ${randomCitizen1Salute}`,
    `Random citizen 2 says hi: ${randomCitizen2Salute}`
  ]
  logger.log('prototype', 2)
}

/**
 * CASE 3: Functions as constructors.
 * This function demonstrates what happens when you call a function with the
 * `new` operand. In this case, the function returns a newly created object.
 * Anything that is assigned as a property of `this` is bound to the returned object.
*/
function functionAsConstructor () {
  function Animal () {
    this.eat = function () {
      return `Look, ma! I'm an animal that eats!`
    }
  }

  const rabbit = new Animal()
  const rabbitEating = rabbit.eat()

  // log result
  const logger = new Logger()
  logger.statements = [
    `Rabbit says while eating: ${rabbitEating}`
  ]
  logger.log('prototype', 3)
}

/**
 * CASE 4: Functions as constructors quiz, part 1.
 * This function shows that, apparently, it is the same to create an object
 * using the `new` operand, or simply returning an object in the function's return
*/
function functionAsConstructorQuizPart1 () {
  function AnimalAsConstructor () {
    this.eat = function () {
      return `Look, ma! I'm an animal, built with a constructor, that eats!`
    }
  }

  function AnimalAsPlainObjectReturned () {
    return {
      eat: function () {
        return `Look, ma! I'm an animal, returned as a plain object, that eats!`
      }
    }
  }

  // build object using the `new` operand:
  const rabbit1 = new AnimalAsConstructor()

  // build object using the function's return statement:
  const rabbit2 = AnimalAsPlainObjectReturned() // please note, no `new` here.

  // log results
  const logger = new Logger()
  logger.statements = [
    `rabbit 1 eating: ${rabbit1.eat()}`,
    `rabbit 2 eating: ${rabbit2.eat()}`
  ]
  logger.log('prototype', 4)
}

/**
 * CASE 5: Functions as constructors quiz part 2.
 * This function shows the actual difference between creating an object with `new`
 * and simply returning an object in the function's return statemeng.
*/
function functionAsConstructorQuizPart2 () {
  function AnimalAsConstructor () {
    this.eat = function () {
      return `Look, ma! I'm an animal, built with a constructor, that eats!`
    }
  }

  function AnimalAsPlainObjectReturned () {
    return {
      eat: function () {
        return `Look, ma! I'm an animal, returned as a plain object, that eats!`
      }
    }
  }

  // please pay attention to these very important steps!
  const jumperAnimal = {
    jump: function () {
      return `Look, ma! I'm an animal that jumps!`
    }
  }
  AnimalAsConstructor.prototype = jumperAnimal

  AnimalAsPlainObjectReturned.prototype = jumperAnimal

  // build object using the `new` operand:
  const rabbit1 = new AnimalAsConstructor()

  // build object using the function's return statement:
  const rabbit2 = AnimalAsPlainObjectReturned() // please note, no `new` here.

  let rabbit1Eating = ''
  let rabbit2Eating = ''
  let rabbit1Jumping = ''
  let rabbit2Jumping = ''

  // make rabbit 1 eat
  try {
    rabbit1Eating = rabbit1.eat()
  } catch (error) {
    rabbit1Eating = error
  }

  // make rabbit 2 eat
  try {
    rabbit2Eating = rabbit2.eat()
  } catch (error) {
    rabbit2Eating = error
  }

  // make rabbit 1 jump
  try {
    rabbit1Jumping = rabbit1.jump()
  } catch (error) {
    rabbit1Jumping = error
  }

  // make rabbit 2 jump
  try {
    rabbit2Jumping = rabbit2.jump()
  } catch (error) {
    rabbit2Jumping = error
  }

  // log results
  const logger = new Logger()
  logger.statements = [
    `rabbit 1 eating: ${rabbit1Eating}`,
    `rabbit 2 eating: ${rabbit2Eating}`,
    `rabbit 1 jumping: ${rabbit1Jumping}`,
    `rabbit 2 jumping: ${rabbit2Jumping}`
  ]
  logger.log('prototype', 5)
}

/**
 * CASE 6: Polyfills example.
 * This function will add a custom polyfill to the String built-in constructor.
*/
function polyfillExample () {
  function replaceLetterA (str) {
    return this.replace('A', '').replace('a', '')
  }

  String.prototype.replaceLetterA = String.prototype.replaceLetterA || replaceLetterA

  const replaced = 'abcABC'.replaceLetterA()

  // log result
  const logger = new Logger()
  logger.statements = [
    `Replacing all letters A from word: 'abcABC':`,
    `${replaced}`
  ]
  logger.log('prototype', 6)
}

module.exports = [
  objPassingVsObjCreate,
  mainstreamRabbitExample,
  dynamicallyAssignParent,
  functionAsConstructor,
  functionAsConstructorQuizPart1,
  functionAsConstructorQuizPart2,
  polyfillExample
]
