const square = document.querySelector(".square");
const s = square.style

window.onkeydown = handleKeys;

function handleKeys(e) {
    switch (e.key) {
        case "ArrowUp":
            move("up")
            break;
        case "ArrowDown":
            move("down")
            break;
        case "ArrowLeft":
            move("left")
            break;
        case "ArrowRight":
            move("right")
            break;
        default:
            break;
    }
};

function move(dir) {
    const s = square.style

    const x = +s.left.slice(0, -2);
    const y = +s.top.slice(0, -2);

    const w = +s.width.slice(0, -2);
    const h = +s.height.slice(0, -2);


    if (dir === "up") {
        if(y > 0) s.top = `${y - 10}px`
        else if (h > 10){
            s.width = `${w + 10}px`;
            s.height = `${h - 10}px`;
        }
    }
    else if (dir === "down") {
        if(y < innerHeight - h-20) s.top = `${y + 10}px`;
        else if(h > 10){
            s.width = `${w + 10}px`;
            s.height = `${h - 10}px`; 
            s.top = `${y + 10}px`;
            if(x > innerWidth - w -20){
                s.left = `${x - 10}px`;
            }
        }
    }
    else if (dir === "left") {
        if (x > 0) s.left = `${x - 10}px`;
        else if (w > 10) {
            s.width = `${w - 10}px`;
            s.height = `${h + 10}px`;
        };
    }
    else if (dir === "right") {
        if(x < innerWidth - w-20) s.left = `${x + 10}px`;
        else if (w > 10){
            s.width = `${w - 10}px`;
            s.height = `${h + 10}px`;
            s.left = `${x + 10}px`;
        }
    }
};
