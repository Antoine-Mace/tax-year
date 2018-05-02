'use strict'

const taxYear = require('../')

const today = new Date()
const testCases = [
  {
    fys: undefined,
    date: today
  },
  {
    fys: {day: 1, month: 1},
    date: today
  },
]

function runTest() {
  const calculator = taxYear()

  console.log("Test 1/2: default UK, financial year start")
  console.log("Result:", calculator.getTaxYear(new Date()))
  console.log("\nTest 2/2: Irish, financial year start")
  calculator.setFYS({
    day: 1,
    month: 1
  })
  console.log("Result:", calculator.getTaxYear(new Date()))
}

runTest()