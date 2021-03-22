var {
    Application,
    Container,
    Loader,
    utils,
    Sprite,
    Texture,
    stage,
    Ticker,
    Text,
    TextStyle,
    Graphics,
    AnimatedSprite,
    Circle
} = PIXI;
var loader = Loader.shared;

// if browser don't suppert WebGL then use canvas
var type = 'WebGL';

if (!utils.isWebGLSupported()) {
    type = 'canvas';
}


utils.sayHello(type);

var viewContainer = document.querySelector('#viewContainer');
// 裝置解析度
var screenResolution = window.devicePixelRatio;

// create application root
var app = new Application({
    view: document.querySelector('#view'),
    width: 800,
    height: 800,
    autoDensity: true,
    resolution: screenResolution || 1,
    transparent: true
});

var mainContainer = new PIXI.Container();
app.stage.addChild(mainContainer);

app.stage.sortableChildren = true;
mainContainer.sortableChildren = true;

loader.load(main);


function main() {
    var container = new PIXI.Container();

    var thing = new PIXI.Graphics();
    var thingBack = new PIXI.Graphics();
    var dot = new PIXI.Graphics();
    var dotBack = new PIXI.Graphics();
    
    container.x = 250;
    container.y = 250;

    container.addChild(thing, thingBack, dot, dotBack);
    mainContainer.addChild(container);

    var count = 0;
    gsap.ticker.add(function dotLine() {
        count += 0.01;

        thing.clear();
        thing.lineStyle(1, 0x222d4d, 0.4);
        thingBack.clear();
        thingBack.lineStyle(1, 0x222d4d, 0.2);
        dot.clear();
        dot.beginFill(0x222d4d, 1);
        dotBack.clear();
        dotBack.beginFill(0x222d4d, 0.4);

        var d1x = -100 + Math.cos(count) * 50,
            d1y = -200 + Math.sin(count) * 50,
            d2x = 100 + Math.cos(count) * 20,
            d2y = -200 + Math.sin(count) * 80,
            d3x = 200 + Math.sin(count) * 50,
            d3y = 50 + Math.cos(count) * 20,
            d4x = 0 + Math.cos(count) * 20,
            d4y = 200 + Math.sin(count) * 100,
            d5x = -200 + Math.sin(count) * 50,
            d5y = 50 + Math.cos(count) * 50,
            d6x = -10 + Math.sin(count) * 10,
            d6y = -110 + Math.cos(count) * 50,
            d7x = 50 + Math.cos(count) * 50,
            d7y = -10 + Math.sin(count) * 50,
            d8x = 10 + Math.sin(count) * 80,
            d8y = 50 + Math.cos(count) * 20,
            d9x = -50 + Math.sin(count) * 50,
            d9y = 80 + Math.cos(count) * 20,
            d10x = -100 + Math.cos(count) * 50,
            d10y = -50 + Math.sin(count) * 80;

        dot.drawCircle(d1x, d1y, 4);
        dot.drawCircle(d2x, d2y, 4);
        dot.drawCircle(d3x, d3y, 4);
        dot.drawCircle(d4x, d4y, 4);
        dot.drawCircle(d5x, d5y, 4);
        dot.drawCircle(d6x, d6y, 4);
        dotBack.drawCircle(d7x, d7y, 4);
        dot.drawCircle(d8x, d8y, 4);
        dotBack.drawCircle(d9x, d9y, 4);
        dotBack.drawCircle(d10x, d10y, 4);

        thing.moveTo(d1x, d1y);
        thing.lineTo(d2x, d2y);
        thing.lineTo(d3x, d3y);
        thing.lineTo(d4x, d4y);
        thing.lineTo(d5x, d5y);
        thing.moveTo(d1x, d1y);
        thing.lineTo(d5x, d5y);

        thingBack.moveTo(d1x, d1y);
        thingBack.lineTo(d6x, d6y);
        thingBack.lineTo(d2x, d2y);
        thingBack.lineTo(d7x, d7y);
        thingBack.lineTo(d3x, d3y);
        thingBack.lineTo(d8x, d8y);
        thingBack.lineTo(d4x, d4y);
        thingBack.lineTo(d9x, d9y);
        thingBack.lineTo(d5x, d5y);
        thingBack.lineTo(d10x, d10y);
        thingBack.lineTo(d1x, d1y);

        thingBack.moveTo(d6x, d6y);
        thingBack.lineTo(d7x, d7y);
        thingBack.lineTo(d8x, d8y);
        thingBack.lineTo(d9x, d9y);
        thingBack.lineTo(d10x, d10y);
        thingBack.lineTo(d6x, d6y);
        thingBack.lineTo(d8x, d8y);
        thingBack.lineTo(d10x, d10y);
        thingBack.lineTo(d7x, d7y);
        thingBack.lineTo(d9x, d9y);


        thing.rotation = count * 0.1;
        thingBack.rotation = count * 0.1;
        dot.rotation = count * 0.1;
        dotBack.rotation = count * 0.1;
    });
}