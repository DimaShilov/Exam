document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const counter = document.querySelector('.counter');
    const winMessage = document.querySelector('.win-message');
    const loseMessage = document.querySelector('.lose-message');
    const restartButton = document.getElementById('restart');
    const changeColorButton = document.getElementById('ChangeColorButton');
    let foundCount = 0;
    const totalSquares = 1;
    let gameEnded = false;

    function reloadPage() {
        location.reload();
    }

    restartButton.addEventListener('click', reloadPage);

    function endGame(win) {
        gameEnded = true;
        if (win) {
            winMessage.style.display = 'block';
        } else {
            loseMessage.style.display = 'block';
            document.body.style.backgroundColor = 'yellow';
        }
    }

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.top = `${Math.random() * (window.innerHeight - 15 * 37.795)}px`;
        square.style.left = `${Math.random() * (window.innerWidth - 15 * 37.795)}px`;
        square.addEventListener('click', (event) => {
            if (!square.classList.contains('found') && !gameEnded) {
                square.classList.add('found');
                foundCount++;
                counter.textContent = `Found: ${foundCount}/${totalSquares}`;
                if (foundCount === totalSquares) {
                    endGame(true);
                }
            }
            event.stopPropagation(); // Prevent the click from propagating to the document
        });
        body.appendChild(square);
    }

    document.addEventListener('click', () => {
        if (!gameEnded) {
            endGame(false);
        }
    });

    changeColorButton.addEventListener('click', () => {
        if (document.body.style.backgroundColor === 'yellow') {
            document.body.style.backgroundColor = 'white';
        } else {
            document.body.style.backgroundColor = 'yellow';
        }
    });
});
