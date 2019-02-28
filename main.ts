let ticks = 0
let emptyObstacleY = 0
let obstaculo: game.LedSprite[] = []
let index = 0
let bird: game.LedSprite = null
input.onButtonPressed(Button.A, () => {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, () => {
    bird.change(LedSpriteProperty.Y, 1)
})
index = 0
obstaculo = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(() => {
    while (obstaculo.length > 0 && obstaculo[0].get(LedSpriteProperty.X) == 0) {
        obstaculo.removeAt(0).delete()
    }
    for (let obstacle2 of obstaculo) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = Math.randomRange(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstaculo.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstaculo) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
