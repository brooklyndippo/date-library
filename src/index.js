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

    get dateDay() {
        return this.date.getDate()
    }

    get datePadded() {
        return String(this.date.getDate()).padStart(2, 0)
    }

    get dateSuffix() {
        switch (this.date.getDate() % 10) {
            case 1:
                return this.date.getDate() + 'st'
                break;
            case 2: 
                return this.date.getDate() + 'nd'
                break;
            case 3:
                return this.date.getDate() + 'rd'
                break;
            default:
                return this.date.getDate() + 'th'
                break; 
        }
    }

    get hours() {
        return this.date.getHours()
    }

    get hoursPadded() {
        return String(this.date.getHours()).padStart(2, 0)
    }

    get mins() {
        return this.date.getMinutes()
    }

    get minsPadded() {
        return String(this.date.getMinutes()).padStart(2, 0)
    }

    get secs() {
        return this.date.getSeconds()
    }

    get secsPadded() {
        return String(this.date.getSeconds()).padStart(2, 0)
    }

    get when() {
        const today = new Date()
        const difference = this.date - today

        let whenStr = ''

        const seconds = difference / 1000  // get the seconds
        const mins = seconds / 60    // get minutes
        const hrs = mins / 60     // get hours
        const days = hrs / 24     // get days
        const months = days / 30.437
        const years = months / 12 // get years

        if ( Math.abs(years) > 1) {
            const yrs = Math.floor(years)
            if (years > 1) {
                whenStr += `${yrs} years from now`
            } else {
                whenStr += `${Math.abs(yrs) - 1} years ago`
            }
        } else if (years < 1 && months > 1) {
            const mos = Math.floor(months)
            if (months > 1) {
                whenStr += `${mos} months from now`
            } else {
                whenStr += `${Math.abs(mos) - 1} months ago`
            }
        } else {
            const ds = Math.floor(days)
            if (days > 1) {
                whenStr += `${ds} days from now`
            } else {
                whenStr += `${Math.abs(ds) - 1} days ago`
            }
        }
        return whenStr
    }

    format(mask) {
        if (!mask) {
            return `${this.day}, ${this.month} ${this.dateDay}, ${this.year}`
        }
        else {
            let formattedStr = ''
            for (let i = 0; i < mask.length; i++) {
                switch(mask[i]) {
                    case 'Y':
                        formattedStr += this.year
                        break
                    case 'y':
                        formattedStr += this.yr
                        break
                    case 'M':
                        formattedStr += this.month
                        break
                    case 'm':
                        formattedStr += this.mon
                        break
                    case 'D':
                        formattedStr += this.datePadded
                        break
                    case 'd':
                        formattedStr += this.dateDay
                        break
                    case 'W':
                        formattedStr += this.day
                        break
                    case 'w':
                        formattedStr += this.dy
                        break
                    case '#':
                        formattedStr += this.dateSuffix
                        break
                    case 'H':
                        formattedStr += this.hoursPadded
                        break
                    case 'h':
                        formattedStr += this.hours
                        break
                    case 'I':
                        formattedStr += this.minsPadded
                        break
                    case 'i':
                        formattedStr += this.mins
                        break
                    case 'S':
                        formattedStr += this.secsPadded
                        break
                    case 's':
                        formattedStr += this.secs
                        break
                    default:
                        formattedStr += mask[i]
                }
            }
            return formattedStr
        }

    }

}

// Gets the current date with no params
const d = new D(1994, 11, 26, 3, 4, 5)
console.log( d.year )  // 2021 - Full year
console.log( d.yr )    // 21   - Short year
console.log( d.month ) // July - Full month
console.log( d.mon )   // Jul  - Short month
console.log( d.day )   // Tuesday - Full day
console.log( d.dy )    // Tue  - Short day
console.log( d.dateDay )  // 27   - Date
console.log( d.hours ) // 18   - Hour
console.log( d.mins )  // 6    - Minutes
console.log( d.secs )  // 5    - Seconds


console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 

console.log(d.when)

const b = new D(2022, 11, 26, 3, 4, 5)

console.log(b.when)

const t = new D(2022, 9, 10)

console.log(t.when)

module.exports = D