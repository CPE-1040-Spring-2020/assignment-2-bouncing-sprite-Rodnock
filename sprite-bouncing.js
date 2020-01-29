let verticalPlace = Math.randomRange(0, 4);
let horizonalPlace = Math.randomRange(0, 4);
let spriteShow: boolean = false
let ledSprite = game.createSprite(horizonalPlace, verticalPlace)

input.onButtonPressed(Button.A, function () {
    ledSprite.turn(Direction.Right, 45)
})

input.onButtonPressed(Button.B, function () {
    verticalPlace = Math.randomRange(0, 4);
    horizonalPlace = Math.randomRange(0, 4);
    if (spriteShow) {
        ledSprite = game.createSprite(horizonalPlace, verticalPlace)
        spriteShow = !spriteShow
    } else {
        ledSprite.delete()
        spriteShow = !spriteShow
    }
    // ledSprite = game.createSprite(horizonalPlace, verticalPlace)
    // basic.pause(500)
    // ledSprite.delete()
})

basic.forever(function () {
    ledSprite.move(1)
    basic.pause(250)
    ledSprite.ifOnEdgeBounce();
    //ledSprite.get(LedSpriteProperty.X);
    //ledSprite.get(LedSpriteProperty.Y)
    //  if (ledSprite) {
    //    LedSpriteProperty.X = 0,4
    //  ledSprite.turn(Direction.Right, 45)
    //    } if else {
    //      LedSpriteProperty.Y = 0,4
    //    ledSprite.turn(Direction.Right, 45)
    //  } else {
    //    ledSprite.move(1)
    //  }
    //}
    // ledSprite.turn(Direction.Right, 45)

    //     let ledSprite = game.createSprite(horizonalPlace, verticalPlace)
    //     basic.pause(500)
    //     ledSprite.delete()

})
