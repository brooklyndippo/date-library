const D = require('../src/index')
const { months, dayOfWeek } = require('../src/utils')

const today = new Date()
const d = new D(today)
const bday = new D('12/26/1994') 

test ('D.year', () => {
    expect(d.year).toBe( today.getFullYear() )
    expect(bday.year).toBe(1994)
})

test ('D.yr', () => {
    expect(d.yr).toBe( today.getFullYear() % 100 )
    expect(bday.yr).toBe(94)
})

test ('D.month', () => {
    expect(d.month).toBe( months[today.getMonth()] )
    expect(bday.month).toBe('December')
})

test ('D.mon', () => {
    expect(d.mon).toBe( months[today.getMonth()].slice(0,3) )
    expect(bday.mon).toBe('Dec')
})

test ('D.day', () => {
    expect(d.day).toBe( dayOfWeek[today.getDay()] )
    expect(bday.day).toBe('Monday')
})

test ('D.dy', () => {
    expect(d.dy).toBe( dayOfWeek[today.getDay()].slice(0,3) )
    expect(bday.dy).toBe('Mon')
})

test ('D.dateday', () => {
    expect(d.dateday).toBe( today.getDate() )
    expect(bday.dateday).toBe(26)
})

test ('D.hours', () => {
    expect(bday.hours).toBe(0)
})

test ('D.mins', () => {
    expect(bday.mins).toBe(0)
})

test ('D.secs', () => {
    expect(bday.secs).toBe(0)
})