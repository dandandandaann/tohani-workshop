const moveSpeed = 4;
const timeSpeedMs = 50;
const hitErrorMarginPx = 18;

const validKey = {
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    ArrowLeft: "ArrowLeft"
}

const directionProperty = {
    ArrowUp: "top",
    ArrowRight: "left",
    ArrowDown: "top",
    ArrowLeft: "left"
}

const directionSpeed = {
    ArrowUp: -moveSpeed,
    ArrowRight: +moveSpeed,
    ArrowDown: +moveSpeed,
    ArrowLeft: -moveSpeed
}

var currentDirection = '';
var currentSpeed = moveSpeed;

var timer = setInterval(function(){ Time(); }, timeSpeedMs); 
// clearInterval(timer);

document.onkeydown = function (event, callback) {
    var code;

    if (event.key !== undefined) {
        code = event.key;
    } else if (event.keyIdentifier !== undefined) {
        code = event.keyIdentifier;
    } else if (event.keyCode !== undefined) {
        code = event.keyCode;
    }

    if (!!validKey[code]) {
        SetMove(directionProperty[code], directionSpeed[code]);
    }
}

function SetMove(cssProperty, speed) {
    currentDirection = cssProperty;
    currentSpeed = speed;
}

function Time() {
    let head = MoveHead(currentDirection, currentSpeed);

    if (CheckIfHitFood(head)) {
        console.log('food was hit');
    }
}

function MoveHead(cssProperty, speed) {
    let head = document.querySelector('#head');
    let headStyle = getComputedStyle(head);

    head.style[cssProperty] = `${parseInt(headStyle[cssProperty]) + speed}`;

    let top = parseInt(headStyle['top']);
    let left = parseInt(headStyle['left']);
    return { top, left };
}

function CheckIfHitFood(head) {
    let food = document.querySelector('#food');
    let foodStyle = getComputedStyle(food);

    let top = parseInt(foodStyle['top']);
    let left = parseInt(foodStyle['left']);

    if((head.top > top - hitErrorMarginPx && head.top < top + hitErrorMarginPx) &&
        (head.left > left - hitErrorMarginPx && head.left < left + hitErrorMarginPx))
        return true;

    return false;
}