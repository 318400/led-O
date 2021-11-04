input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index < 16; index++) {
        a += 1
        doSomething(a - 1, false)
        if (a >= 16) {
            a = 1
        }
        doSomething(a, true)
        basic.pause(100)
    }
    a = 0
    basic.clearScreen()
})
function doSomething (num: number, bool: boolean) {
    if (num < 6) {
        x = num - 1
        y = 0
    } else if (num >= 6 && num < 9) {
        x = 4
        y = num - 5
    } else if (num >= 9 && num < 14) {
        x = 13 - num
        y = 4
    } else if (num >= 14 && num <= 16) {
        x = 0
        y = 17 - num
    }
    if (bool) {
        led.plot(x, y)
    } else {
        led.unplot(x, y)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    for (let index = 0; index < 16; index++) {
        a += 1
        doSomething(a - 1, false)
        if (a >= 16) {
            a = 1
        }
        doSomething(a, true)
        basic.pause(100)
    }
    a = 0
    basic.clearScreen()
    b = 16
    for (let index = 0; index < 16; index++) {
        b += 0 - 1
        doSomething(b + 1, false)
        if (b >= 16) {
            b = 15
        }
        doSomething(b, true)
        basic.pause(100)
    }
    b = 16
    basic.clearScreen()
})
let y = 0
let x = 0
let b = 0
let a = 0
basic.clearScreen()
a = 0
for (let index = 0; index < 16; index++) {
    a += 1
    doSomething(a + 1, true)
    if (a >= 16) {
        a = 1
    }
    doSomething(a, true)
    basic.pause(100)
}
a = 0
b = 16
basic.clearScreen()
