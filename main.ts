function doSomething (num: number) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        y = 4
        x = 13 - num
    } else if (num >= 14 && num < 16) {
        x = 0
        y = 17 - num
    }
    led.plot(x, y)
}
let y = 0
let x = 0
let a = 0
basic.forever(function () {
    a += 1
    doSomething(a - 1)
})
