const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const jump = () => {
    mario.classList.add("mario-jump");
    setTimeout(() => mario.classList.remove("mario-jump"), 500);
};

const detectCollision = () => {
    const pipeRect = pipe.getBoundingClientRect();
    const marioRect = mario.getBoundingClientRect();

    return (
        marioRect.left < pipeRect.right &&
        marioRect.right > pipeRect.left &&
        marioRect.bottom > pipeRect.top
    );
};

const gameLoop = () => {
    const marioPosition = Number(window.getComputedStyle(mario).bottom.replace("px", ""));

    if (detectCollision()) {
        // Se Mario colidir com o tubo
        pipe.style.animation = "none";
        mario.style.animation = "none";
        mario.src = "./imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        // Para o loop de jogo
        clearInterval(loop);
    }
};

const interval = 10;
const loop = setInterval(gameLoop, interval);

document.addEventListener("keydown", jump);