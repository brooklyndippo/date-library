const { months, dayOfWeek } = require('./utils')
// Date Object

class D {
	constructor(...args) {
		this.date = new Date(...args)
	}

    get year() {
        return this.date.getFullYear()
    }

    get yr() {
        return this.date.getFullYear() % 100
    }

    get month() {
        return months[this.date.getMonth()]
    }

    get mon() {
        return months[this.date.getMonth()].slice(0,3)
    }

    get day() {
        return dayOfWeek[this.date.getDay()]
    }

    get dy() {
        return dayOfWeek[this.date.getDay()].slice(0,3)
    }

    get dateday() {
        return this.date.getDate()
    }

    get hours() {
        return this.date.getHours()
    }

    get mins() {
        return this.date.getMinutes()
    }

    get secs() {
        return this.date.getSeconds()
    }

    format() {
        
    }

}

// Gets the current date with no params
const d = new D('12/26/1994') 
console.log( d.year )  // 2021 - Full year
console.log( d.yr )    // 21   - Short year
console.log( d.month ) // July - Full month
console.log( d.mon )   // Jul  - Short month
console.log( d.day )   // Tuesday - Full day
console.log( d.dy )    // Tue  - Short day
console.log( d.dateday )  // 27   - Date
console.log( d.hours ) // 18   - Hour
console.log( d.mins )  // 6    - Minutes
console.log( d.secs )  // 5    - Seconds

module.exports = D