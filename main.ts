buttonClicks.onButtonSingleClicked(buttonClicks.AorB.A, function () {
    count += 1
    if (count == 10) {
        count = 0
    }
    basic.showString("" + (count))
})
let count = 0
count = 0
