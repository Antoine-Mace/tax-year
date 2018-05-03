'use strict'

const taxYear = require('../')

const today = new Date()
const calculator = taxYear()

function runCalendarTest() {
  let computeDate = today;
  let days = 1;
  console.log("\nTest 3/3: Uk, 1 year")
  while (days != 365) {
    let result =  calculator.getTaxYear(computeDate);
    console.log(`\n${days + 1}/365`)
    console.log("Result:", result)
    computeDate.setDate(computeDate.getDate() + 1);
    days++;
  }
}


function runTest() {
  console.log("Test 1/3: Irish, financial year start")
  console.log("Result:", calculator.getTaxYear(today, {
    day: 1,
    month: 1
  }))
  console.log("\nTest 2/3: Uk, financial year start")
  calculator.setFYS({
    day: 6,
    month: 4
  })
  console.log("Result:", calculator.getTaxYear(today))
  runCalendarTest(calculator)
}

runTest()