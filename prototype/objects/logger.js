function Logger () {
  this.header = ''
  this.dek = ''
  this.statements = []
  this.log = function () {
    console.log(`\n**********************`)
    console.log(`\n${this.header}`)
    console.log(`\n${this.dek}`)
    this.statements.forEach(s => {
      console.log(`\t${s}`)
    })
    console.log(`\n**********************`)
  }
}

module.exports = Logger
