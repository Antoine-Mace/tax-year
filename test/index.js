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

function loadCalendar(calculator) {
  var computeDate = new Date();
  var days = 1;
  console.log("\nTest 3/3: Uk, 1 year")
  while (days != 365) {
    var result =  calculator.getTaxYear(computeDate);
    console.log(`\n${days + 1}/365`)
    console.log("Result:", result)
    computeDate.setDate(computeDate.getDate() + 1);
    days++;
  }
}


function runTest() {
  const calculator = taxYear()

  console.log("Test 1/3: Irish, financial year start")
  console.log("Result:", calculator.getTaxYear(new Date(), {
    day: 1,
    month: 1
  }))
  console.log("\nTest 2/3: Uk, financial year start")
  calculator.setFYS({
    day: 6,
    month: 4
  })
  console.log("Result:", calculator.getTaxYear(new Date()))

  loadCalendar(calculator)
}

runTest()