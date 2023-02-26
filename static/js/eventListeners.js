const control = document.querySelector("#control");

control.addEventListener("touchstart", (event) => {
    if (player.preventInput) return

    switch (event.target.dataset.type) {
        case "up":
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                ) {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true;
                    player.switchSprite("enterDoor");
                    door.play();
                    return;
                }
            }
            if (player.velocity.y === 0) player.velocity.y = -25;

            break;
        case "left":
            keys.a.pressed = true;
            break;
        case "right":
            keys.d.pressed = true;
            break;
    }
});

control.addEventListener("touchend", (event) => {
    switch (event.target.dataset.type) {
        case "left":
            keys.a.pressed = false;
            break;
        case "right":
            keys.d.pressed = false;
            break;
    }
});

window.addEventListener("keydown", (event) => {
    if (player.preventInput) return

    switch (event.key) {
        case "ц":
        case "ArrowUp":
        case "w":
            for (let i = 0; i < doors.length; i++) {
                const door = doors[i];

                if (
                    player.hitbox.position.x + player.hitbox.width <= door.position.x + door.width &&
                    player.hitbox.position.x >= door.position.x &&
                    player.hitbox.position.y + player.hitbox.height >= door.position.y &&
                    player.hitbox.position.y <= door.position.y + door.height
                ) {
                    player.velocity.x = 0;
                    player.velocity.y = 0;
                    player.preventInput = true;
                    player.switchSprite("enterDoor");
                    door.play();
                    return;
                }
            }
            if (player.velocity.y === 0) player.velocity.y = -25;

            break;
        case "ф":
        case "ArrowLeft":
        case "a":
            keys.a.pressed = true;
            break;
        case "в":
        case "ArrowRight":
        case "d":
            keys.d.pressed = true;
            break;
    }
});

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "ф":
        case "ArrowLeft":
        case "a":
            keys.a.pressed = false;
            break;
        case "в":
        case "ArrowRight":
        case "d":
            keys.d.pressed = false;
            break;
    }
});