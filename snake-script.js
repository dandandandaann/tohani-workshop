const moveSpeed = 5;

const validKey = {
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    ArrowLeft: "ArrowLeft"
}

const directionProperty = {
    ArrowUp: "margin-top",
    ArrowRight: "margin-left",
    ArrowDown: "margin-top",
    ArrowLeft: "margin-left"
}

const directionSpeed = {
    ArrowUp: -moveSpeed,
    ArrowRight: +moveSpeed,
    ArrowDown: +moveSpeed,
    ArrowLeft: -moveSpeed
}

var currentDirection = '';
var currentSpeed = moveSpeed;

var timer = setInterval(function(){ Move(currentDirection, currentSpeed); }, 50); 
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

function Move(cssProperty, speed) {
    let head = document.querySelector('#head');
    let headStyle = getComputedStyle(head);

    head.style[cssProperty] = `${parseInt(headStyle[cssProperty]) + speed}px`
}