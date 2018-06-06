'use strict'

function taxYear (fys) {
  this.FYS = fys

  this.setFYS = function (newFYS) {
    Object.assign(this.FYS, newFYS)
  }

  this.getTaxYear = function (date, financialYearStart = this.FYS) {
    let taxYear = {
      yearIn: 'undefined',
      monthIn: 0,
      weekIn: 0
    }

    const FYS = financialYearStart;

    const current = {
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear()
    }

    const operation = current.month >= FYS.month &&
    (current.day >= FYS.day || current.month > FYS.month)
      ? 1
      : -1

    const taxYearUse = (current.year + operation).toString()
    taxYear.yearIn = operation > 0
      ? current.year.toString() + "-" + taxYearUse
      : taxYearUse + "-" + current.year.toString()

    const monthInYear = 12
    taxYear.monthIn = current.month >= FYS.month
      ? current.month - FYS.month
      : monthInYear - FYS.month + current.month
    taxYear.monthIn += 1

    var fysDate = new Date((operation > 0 ? current.year : taxYearUse), FYS.month - 1, FYS.day)
    var dayDiff =
      new Date(
        current.year,
        current.month - 1,
        current.day
      ) - fysDate

    dayDiff = Math.ceil(dayDiff / (1000 * 60 * 60 * 24))

    taxYear.weekIn = dayDiff < 7
      ? operation > 0 ? 1 : dayDiff * -1
      : Math.ceil(dayDiff / 7)
    if (dayDiff > 0 && !(dayDiff % 7))
      taxYear.weekIn += 1
    if (!(date.getDate() % 7) && !(dayDiff % 7) && date.getDay() !== fysDate.getDay()) {
      taxYear.weekIn -= 1
    }

    return taxYear
  }
}

module.exports = (FYS) => {
  const defaultFYS = Object.assign({
    day: 6,
    month: 4
  }, FYS)
  return new taxYear(defaultFYS)
}
