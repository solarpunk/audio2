input.onSwitchMoved(SwitchDirection.Right, function () {
    light.setBrightness(20)
})
input.onSwitchMoved(SwitchDirection.Left, function () {
    light.setBrightness(20)
})
forever(function () {
    light.graph(input.soundLevel(), 100)
})
